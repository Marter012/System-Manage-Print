import type {
  ICashMovement,
  ICreateCashMovement,
} from "../interfaces/CashMovements.ts";

import { api } from "./api.ts";

// ==============================
// OBTENER MOVIMIENTOS
// ==============================

export const getCashMovementsAPI = async (): Promise<ICashMovement[]> => {
  const response = await api.get("/cashMovement/");

  return response.data;
};

// ==============================
// CREAR MOVIMIENTO
// ==============================

export const createCashMovementAPI = async (
  data: ICreateCashMovement,
): Promise<ICashMovement> => {
  const response = await api.post("/cashMovement/", data);

  return response.data;
};
