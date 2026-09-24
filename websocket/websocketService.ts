import type { AppDispatch } from "../store/store.ts";
import { getClientId } from "../services/api.ts";

import { getProductsAPI } from "../services/productService.ts";
import { getOrdersAPI } from "../services/orderService.ts";
import { getCashRegistersAPI } from "../services/cashRegisterService.ts";
import { getCashMovementsAPI } from "../services/cashMovementService.ts";
import { getPromotionsAPI } from "../services/promotionService.ts";
import { printOrderAPI } from "../services/printAgentService.ts";

import { setProducts } from "../store/slices/productSlice.ts";
import { setOrders } from "../store/slices/orderSlice.ts";
import { setCashRegisters } from "../store/slices/cashRegisterSlice.ts";
import { setCashMovements } from "../store/slices/cashMovementSlice.ts";
import { setPromotions } from "../store/slices/promotionSlice.ts";

import { buildOrderTicket } from "../components/Utils/OrderTicket.ts";
import type { IOrder } from "../interfaces/Order.ts";

interface WebSocketChangeEvent {
  type: "DATA_CHANGED";
  resource: string;
  action: "created" | "updated";
  data: unknown;
  source_client_id: string | null;
  timestamp: string;
}

let socket: WebSocket | null = null;
let reconnectTimer: number | null = null;
let heartbeatTimer: number | null = null;
let refreshTimer: number | null = null;
let reconnectDelay = 1000;
let stopped = false;
let currentDispatch: AppDispatch | null = null;

const getWebSocketURL = (): string => {
  const configuredUrl = import.meta.env.VITE_API_WS_URL as string | undefined;

  if (configuredUrl) {
    return configuredUrl;
  }

  const apiUrl = import.meta.env.VITE_API_URL as string;

  if (!apiUrl) {
    throw new Error("VITE_API_URL no está configurada.");
  }

  const websocketBaseUrl = apiUrl
    .replace(/^https:\/\//i, "wss://")
    .replace(/^http:\/\//i, "ws://")
    .replace(/\/$/, "");

  return `${websocketBaseUrl}/ws`;
};

const isPrintServer = (): boolean => {
  const configured = localStorage.getItem("boutique-sabores-print-server");

  if (configured === "true") {
    return true;
  }

  if (configured === "false") {
    return false;
  }

  const isSmallScreen = window.innerWidth <= 700;
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const isMobileUserAgent = /Android|iPhone|iPod|Mobile/i.test(
    navigator.userAgent,
  );

  return !isSmallScreen && !isCoarsePointer && !isMobileUserAgent;
};

const refreshAllData = async (dispatch: AppDispatch) => {
  try {
    const [products, orders, cashRegisters, cashMovements, promotions] =
      await Promise.all([
        getProductsAPI(),
        getOrdersAPI(),
        getCashRegistersAPI(),
        getCashMovementsAPI(),
        getPromotionsAPI(),
      ]);

    dispatch(setProducts(products));
    dispatch(setOrders(orders));
    dispatch(setCashRegisters(cashRegisters));
    dispatch(setCashMovements(cashMovements));
    dispatch(setPromotions(promotions));
  } catch (error) {
    console.error(
      "No se pudieron sincronizar los datos después de un evento WebSocket:",
      error,
    );
  }
};

const scheduleRefresh = (dispatch: AppDispatch) => {
  if (refreshTimer !== null) {
    window.clearTimeout(refreshTimer);
  }

  refreshTimer = window.setTimeout(() => {
    refreshTimer = null;
    void refreshAllData(dispatch);
  }, 150);
};

const printRemoteOrder = async (event: WebSocketChangeEvent) => {
  if (event.resource !== "order" || event.action !== "created") {
    return;
  }

  if (event.source_client_id === getClientId()) {
    return;
  }

  if (!isPrintServer()) {
    return;
  }

  const order = event.data as IOrder;

  if (!order || typeof order !== "object") {
    return;
  }

  try {
    const ticket = buildOrderTicket(order);

    await printOrderAPI(ticket);

    console.log(
      `Comanda #${order.order_number} recibida por WebSocket y enviada a impresión.`,
    );
  } catch (error) {
    console.error(
      `La comanda #${order.order_number} llegó por WebSocket, pero no pudo imprimirse:`,
      error,
    );
  }
};

const clearTimers = () => {
  if (reconnectTimer !== null) {
    window.clearTimeout(reconnectTimer);
    reconnectTimer = null;
  }

  if (heartbeatTimer !== null) {
    window.clearInterval(heartbeatTimer);
    heartbeatTimer = null;
  }

  if (refreshTimer !== null) {
    window.clearTimeout(refreshTimer);
    refreshTimer = null;
  }
};

const scheduleReconnect = () => {
  if (stopped || reconnectTimer !== null) {
    return;
  }

  reconnectTimer = window.setTimeout(() => {
    reconnectTimer = null;
    connectWebSocket();
  }, reconnectDelay);

  reconnectDelay = Math.min(reconnectDelay * 2, 10000);
};

const connectWebSocket = () => {
  if (stopped) {
    return;
  }

  if (
    socket &&
    (socket.readyState === WebSocket.OPEN ||
      socket.readyState === WebSocket.CONNECTING)
  ) {
    return;
  }

  try {
    const baseUrl = getWebSocketURL();
    const clientId = encodeURIComponent(getClientId());

    socket = new WebSocket(`${baseUrl}?client_id=${clientId}`);

    socket.onopen = () => {
      reconnectDelay = 1000;

      console.log("🟢 WebSocket conectado.");

      if (heartbeatTimer !== null) {
        window.clearInterval(heartbeatTimer);
      }

      heartbeatTimer = window.setInterval(() => {
        if (socket?.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify({ type: "ping" }));
        }
      }, 20000);
    };

    socket.onmessage = (message) => {
      try {
        const event = JSON.parse(message.data) as WebSocketChangeEvent;

        if (event.type !== "DATA_CHANGED") {
          return;
        }

        console.log("🔄 Cambio recibido por WebSocket:", event);

        if (currentDispatch) {
          scheduleRefresh(currentDispatch);
        }

        void printRemoteOrder(event);
      } catch (error) {
        console.error("Mensaje WebSocket inválido:", error);
      }
    };

    socket.onerror = (error) => {
      console.error("🔴 Error en WebSocket:", error);
    };

    socket.onclose = () => {
      console.warn("🟠 WebSocket desconectado. Reintentando...");

      if (heartbeatTimer !== null) {
        window.clearInterval(heartbeatTimer);
        heartbeatTimer = null;
      }

      socket = null;
      scheduleReconnect();
    };
  } catch (error) {
    console.error("No se pudo iniciar WebSocket:", error);
    scheduleReconnect();
  }
};

export const startWebSocket = (dispatch: AppDispatch) => {
  currentDispatch = dispatch;
  stopped = false;

  connectWebSocket();
};

export const stopWebSocket = () => {
  stopped = true;
  currentDispatch = null;
  clearTimers();

  if (socket) {
    socket.close();
    socket = null;
  }
};

export const isWebSocketConnected = (): boolean => {
  return socket?.readyState === WebSocket.OPEN;
};
