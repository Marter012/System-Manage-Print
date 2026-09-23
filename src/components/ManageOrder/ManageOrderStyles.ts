import styled from "styled-components";

/* =========================================================
   CONTENEDOR PRINCIPAL
========================================================= */

export const ContainerManageOrders = styled.div`
  width: 100%;

  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;

  padding: 15px;

  box-sizing: border-box;

  .paid {
    background-color: #7bcf90;
    color: #287a3e;
  }

  .pending {
    background-color: #eacb75;
    color: #9a6b00;
  }

  .cancelled {
    background-color: #d37676;
    color: #a33a3a;
  }

  > div {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  @media (max-width: 850px) {
    gap: 12px;
    padding: 12px;
  }

  @media (max-width: 600px) {
    gap: 10px;
    padding: 10px 8px;

    /*
     * =====================================================
     * HEADER DE LA TABLA
     *
     * En móvil tenemos:
     *
     * 1. Comanda
     * 2. Nombre
     * 3. Tipo de pago
     * 4. Acciones
     *
     * ListTableStyles oculta por defecto el cuarto header,
     * así que lo volvemos a mostrar específicamente acá.
     * =====================================================
     */

    > div > div:first-child h4:nth-child(4) {
      display: block;
    }

    /*
     * Aseguramos que las 4 columnas del header
     * tengan espacio suficiente.
     */

    > div > div:first-child {
      grid-template-columns:
        minmax(0, 1.4fr)
        minmax(0, 1.8fr)
        minmax(0, 1fr)
        minmax(0, 0.9fr);

      gap: 5px;
    }

    /*
     * =====================================================
     * FILAS
     * =====================================================
     */

    .order-row {
      grid-template-columns:
        minmax(0, 1.4fr)
        minmax(0, 1.8fr)
        minmax(0, 1fr)
        minmax(0, 0.9fr);

      gap: 5px;
    }
  }

  @media (max-width: 400px) {
    padding: 8px 6px;

    > div > div:first-child {
      grid-template-columns:
        minmax(0, 1.3fr)
        minmax(0, 1.7fr)
        minmax(0, 0.9fr)
        minmax(0, 0.8fr);

      gap: 4px;
    }

    .order-row {
      grid-template-columns:
        minmax(0, 1.3fr)
        minmax(0, 1.7fr)
        minmax(0, 0.9fr)
        minmax(0, 0.8fr);

      gap: 4px;
    }
  }
`;

/* =========================================================
   HEADER ORDERS
========================================================= */

export const HeaderOrders = styled.div`
  width: 80%;

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 15px;

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 100%;

    flex-direction: column;

    align-items: stretch;

    gap: 10px;
  }
`;

/* =========================================================
   TÍTULO
========================================================= */

export const TitleContainer = styled.div`
  display: flex;

  flex-direction: column;

  gap: 4px;

  h2 {
    margin: 0;

    color: #653007;

    font-size: 1.8rem;

    line-height: 1.2;
  }

  p {
    margin: 0;

    opacity: 0.7;

    font-size: 0.9rem;

    line-height: 1.4;
  }

  @media (max-width: 700px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.82rem;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 1.35rem;
    }

    p {
      font-size: 0.78rem;
    }
  }
`;

/* =========================================================
   FILTROS
========================================================= */

export const Filter = styled.div`
  width: 80%;

  display: flex;

  gap: 5px;

  padding: 5px;

  box-sizing: border-box;

  background-color: rgba(115, 77, 44, 0.15);

  border-radius: 10px;

  button {
    flex: 1;

    height: 42px;

    border: none;

    border-radius: 7px;

    background-color: transparent;

    font-size: 0.95rem;

    font-weight: 500;

    cursor: pointer;

    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(194, 158, 112, 0.5);
    }

    &.active {
      background-color: #c29e70;

      font-weight: 600;
    }
  }

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 100%;

    button {
      height: 38px;

      font-size: 0.82rem;
    }
  }

  @media (max-width: 400px) {
    gap: 3px;

    padding: 4px;

    button {
      height: 36px;

      font-size: 0.76rem;
    }
  }
`;

/* =========================================================
   ACCIONES
========================================================= */

export const Actions = styled.div`
  min-width: 0;

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 10px;

  @media (max-width: 600px) {
    justify-content: flex-end;
    gap: 3px;
  }

  @media (max-width: 400px) {
    gap: 2px;
  }
`;

/* =========================================================
   BOTONES DE ACCIÓN
========================================================= */

export const ActionButton = styled.button`
  width: 30px;

  height: 30px;

  display: flex;

  justify-content: center;

  align-items: center;

  padding: 0;

  border: none;

  border-radius: 6px;

  background-color: transparent;

  color: #653007;

  font-size: 1.2rem;

  cursor: pointer;

  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: #7b3d0b;

    background-color: rgba(194, 158, 112, 0.15);

    transform: translateY(-1px);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 600px) {
    width: 28px;
    height: 28px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 400px) {
    width: 26px;
    height: 26px;

    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

/* =========================================================
   ESTADO
========================================================= */

export const Status = styled.span`
  display: inline-flex;

  justify-content: center;

  align-items: center;

  padding: 4px 9px;

  border-radius: 20px;

  font-size: 0.72rem;

  font-weight: 600;

  white-space: nowrap;

  &.active {
    background-color: #d9f7e5;
    color: #08752f;
  }

  &.inactive {
    background-color: #f8d9d9;
    color: #9b1c1c;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

/* =========================================================
   OPCIONES DEL MODAL
========================================================= */

export const OrderOptions = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 20px;

  box-sizing: border-box;

  @media (max-width: 600px) {
    gap: 15px;
  }
`;

/* =========================================================
   INFORMACIÓN DEL MODAL
========================================================= */

export const OrderInfo = styled.div`
  display: flex;

  flex-direction: column;

  gap: 10px;

  h3 {
    margin: 0 0 6px;

    color: #653007;

    font-size: 1.3rem;
  }

  p {
    margin: 0;

    color: #555;

    line-height: 1.5;
  }

  > div {
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 10px;

    padding: 9px 11px;

    box-sizing: border-box;

    border-radius: 8px;

    background-color: rgba(194, 158, 112, 0.12);
  }

  span {
    color: #666;

    font-size: 0.85rem;
  }

  strong {
    color: #653007;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 1.15rem;
    }

    p {
      font-size: 0.85rem;
    }

    > div {
      padding: 8px 10px;
    }

    span {
      font-size: 0.8rem;
    }
  }
`;

/* =========================================================
   PRODUCTOS
========================================================= */

export const OrderItems = styled.div`
  display: flex;

  flex-direction: column;

  gap: 7px;

  h3 {
    margin: 0 0 6px;

    color: #653007;

    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 1rem;
    }
  }
`;

/* =========================================================
   ITEM
========================================================= */

export const OrderItem = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 10px;

  padding: 9px 11px;

  box-sizing: border-box;

  border-radius: 8px;

  background-color: rgba(194, 158, 112, 0.12);

  span {
    color: #555;

    font-size: 0.85rem;
  }

  strong {
    color: #653007;

    white-space: nowrap;
  }

  @media (max-width: 600px) {
    padding: 8px 9px;

    span {
      font-size: 0.78rem;
    }

    strong {
      font-size: 0.82rem;
    }
  }
`;

/* =========================================================
   ACCIONES DEL MODAL
========================================================= */

export const OrderActions = styled.div`
  display: flex;

  flex-direction: column;

  gap: 9px;

  margin-top: 5px;
`;

/* =========================================================
   CANCELAR
========================================================= */

export const CancelButton = styled.button`
  width: 100%;

  padding: 11px 14px;

  border: none;

  border-radius: 8px;

  background-color: #ddd;

  color: #333;

  font-size: 0.9rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #ccc;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 600px) {
    padding: 10px 12px;

    font-size: 0.85rem;
  }
`;

/* =========================================================
   CAMBIAR ESTADO
========================================================= */

export const StatusButton = styled.button`
  width: 100%;

  padding: 11px 14px;

  border: none;

  border-radius: 8px;

  color: white;

  font-size: 0.9rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &.active {
    background-color: #b42318;
  }

  &.inactive {
    background-color: #18b45e;
  }

  @media (max-width: 600px) {
    padding: 10px 12px;

    font-size: 0.85rem;
  }
`;

/* =========================================================
   SIN COMANDAS
========================================================= */

export const EmptyMessage = styled.div`
  width: 100%;

  min-height: 100px;

  display: flex;

  justify-content: center;

  align-items: center;

  padding: 20px;

  box-sizing: border-box;

  color: #777;

  text-align: center;

  font-size: 0.85rem;

  @media (max-width: 600px) {
    min-height: 80px;

    padding: 15px;

    font-size: 0.78rem;
  }
`;