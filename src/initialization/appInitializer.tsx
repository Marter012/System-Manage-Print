import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store.ts";
import {
  setProductError,
  setProductLoading,
  setProducts,
} from "../store/slices/productSlice.ts";
import { getProductsAPI } from "../services/productService.ts";
import {
  setOrderError,
  setOrderLoading,
  setOrders,
} from "../store/slices/orderSlice.ts";
import { getOrdersAPI } from "../services/orderService.ts";
import {
  setCashRegisterError,
  setCashRegisterLoading,
  setCashRegisters,
} from "../store/slices/cashRegisterSlice.ts";
import { getCashRegistersAPI } from "../services/cashRegisterService.ts";
import {
  setCashMovements,
  setCashMovemenvtError,
  setCashMovemenvtLoading,
} from "../store/slices/cashMovementSlice.ts";
import { getCashMovementsAPI } from "../services/cashMovementService.ts";
import {
  setPromotionError,
  setPromotionLoading,
  setPromotions,
} from "../store/slices/promotionSlice.ts";
import { getPromotionsAPI } from "../services/promotionService.ts";
import LoadingScreen from "../components/LoaginsScreen/LoadingScreen.tsx";
import { startWebSocket, stopWebSocket } from "../websocket/websocketService.ts";

interface LoadingState {
  server: boolean;
  products: boolean;
  orders: boolean;
  cashRegister: boolean;
  cashMovements: boolean;
  promotions: boolean;
}

interface AppInitializerProps {
  children: React.ReactNode;
}

const AppInitializer = ({ children }: AppInitializerProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState<LoadingState>({
    server: false,
    products: false,
    orders: false,
    cashRegister: false,
    cashMovements: false,
    promotions: false,
  });

  const [error, setError] = useState(false);

  const updateLoading = (key: keyof LoadingState, value: boolean) => {
    setLoading((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const initializeApp = async () => {
    setError(false);

    // Reiniciamos estados
    setLoading({
      server: false,
      products: false,
      orders: false,
      cashRegister: false,
      cashMovements: false,
      promotions: false,
    });

    try {
      /*
       * PRODUCTOS
       */
      const loadProducts = async () => {
        try {
          dispatch(setProductLoading(true));
          dispatch(setProductError(null));

          const data = await getProductsAPI();

          dispatch(setProducts(data));

          updateLoading("products", true);
        } catch (error) {
          console.error("Error cargando productos:", error);

          dispatch(setProductError("No se pudieron cargar los productos"));

          throw error;
        } finally {
          dispatch(setProductLoading(false));
        }
      };

      /*
       * ÓRDENES
       */
      const loadOrders = async () => {
        try {
          dispatch(setOrderLoading(true));
          dispatch(setOrderError(null));

          const data = await getOrdersAPI();

          dispatch(setOrders(data));

          updateLoading("orders", true);
        } catch (error) {
          console.error("Error cargando órdenes:", error);

          dispatch(setOrderError("No se pudieron cargar las órdenes"));

          throw error;
        } finally {
          dispatch(setOrderLoading(false));
        }
      };

      /*
       * CAJA
       */
      const loadCashRegister = async () => {
        try {
          dispatch(setCashRegisterLoading(true));
          dispatch(setCashRegisterError(null));

          const data = await getCashRegistersAPI();

          dispatch(setCashRegisters(data));

          updateLoading("cashRegister", true);
        } catch (error) {
          console.error("Error cargando caja registradora:", error);

          dispatch(
            setCashRegisterError("No se pudo cargar la caja registradora"),
          );

          throw error;
        } finally {
          dispatch(setCashRegisterLoading(false));
        }
      };

      /*
       * MOVIMIENTOS DE CAJA
       */
      const loadCashMovements = async () => {
        try {
          dispatch(setCashMovemenvtLoading(true));
          dispatch(setCashMovemenvtError(null));

          const data = await getCashMovementsAPI();

          dispatch(setCashMovements(data));

          updateLoading("cashMovements", true);
        } catch (error) {
          console.error("Error cargando movimientos de caja:", error);

          dispatch(
            setCashMovemenvtError(
              "No se pudieron cargar los movimientos de caja",
            ),
          );

          throw error;
        } finally {
          dispatch(setCashMovemenvtLoading(false));
        }
      };

      /*
       * PROMOCIONES
       */
      const loadPromotions = async () => {
        try {
          dispatch(setPromotionLoading(true));
          dispatch(setPromotionError(null));

          const data = await getPromotionsAPI();

          dispatch(setPromotions(data));

          updateLoading("promotions", true);
        } catch (error) {
          console.error("Error cargando promociones:", error);

          dispatch(setPromotionError("No se pudieron cargar las promociones"));

          throw error;
        } finally {
          dispatch(setPromotionLoading(false));
        }
      };

      /*
       * Todas las APIs se ejecutan al mismo tiempo
       */
      await Promise.all([
        loadProducts(),
        loadOrders(),
        loadCashRegister(),
        loadCashMovements(),
        loadPromotions(),
      ]);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      /*
       * Todo terminó correctamente
       */
      updateLoading("server", true);

      /*
       * Una vez que la carga inicial terminó, abrimos una única conexión
       * WebSocket para mantener todos los clientes sincronizados.
       */
      startWebSocket(dispatch);
    } catch (error) {
      console.error("Error inicializando la aplicación:", error);

      setError(true);
    }
  };

  useEffect(() => {
    initializeApp();

    return () => {
      stopWebSocket();
    };
  }, []);

  /*
   * Si hubo error
   */
  if (error) {
    return (
      <LoadingScreen
        items={[
          {
            label: "Conectando con el servidor",
            completed: false,
          },
          {
            label: "No se pudo iniciar el sistema",
            completed: false,
          },
        ]}
        error
        onRetry={initializeApp}
      />
    );
  }

  /*
   * Mientras carga
   */
  const isReady =
    loading.server &&
    loading.products &&
    loading.orders &&
    loading.cashRegister &&
    loading.cashMovements &&
    loading.promotions;

  if (!isReady) {
    return (
      <LoadingScreen
        items={[
          {
            label: "Conectando con el servidor",
            completed: loading.server,
          },
          {
            label: "Cargando productos",
            completed: loading.products,
          },
          {
            label: "Cargando comandas",
            completed: loading.orders,
          },
          {
            label: "Cargando caja",
            completed: loading.cashRegister,
          },
          {
            label: "Cargando movimientos",
            completed: loading.cashMovements,
          },
          {
            label: "Cargando promociones",
            completed: loading.promotions,
          },
        ]}
      />
    );
  }

  return <>{children}</>;
};

export default AppInitializer;
