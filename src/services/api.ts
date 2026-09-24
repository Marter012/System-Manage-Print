import axios from "axios";

const CLIENT_ID_STORAGE_KEY = "boutique-sabores-client-id";

export const getClientId = (): string => {
  const storedClientId = localStorage.getItem(CLIENT_ID_STORAGE_KEY);

  if (storedClientId) {
    return storedClientId;
  }

  const clientId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  localStorage.setItem(CLIENT_ID_STORAGE_KEY, clientId);

  return clientId;
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/*
 * Identifica el navegador que realizó la operación.
 * El backend usa este ID para que el equipo que originó una orden
 * no vuelva a imprimirla cuando recibe su propio evento WebSocket.
 */
api.interceptors.request.use((config) => {
  config.headers.set("X-Client-ID", getClientId());

  return config;
});
