import styled from "styled-components";

/* =========================================================
   CONTROLES DE CANTIDAD
========================================================= */

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;

  gap: 6px;

  flex-shrink: 0;

  button {
    width: 28px;

    height: 28px;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 0;

    border: 1px solid rgba(101, 48, 7, 0.15);

    border-radius: 50%;

    background-color: #c29e70;

    color: #ffffff;

    cursor: pointer;

    font-size: 0.9rem;

    font-weight: 700;

    transition:
      background-color 0.2s ease,
      transform 0.15s ease,
      box-shadow 0.2s ease;

    &:hover {
      background-color: #b38d5f;

      box-shadow:
        0 2px 6px
        rgba(70, 40, 15, 0.18);
    }

    &:active {
      transform: scale(0.92);
    }

    &:disabled,
    &.disabled {
      background-color: #999999;

      opacity: 0.45;

      cursor: not-allowed;

      box-shadow: none;
    }
  }

  strong {
    min-width: 20px;

    text-align: center;

    color: #653007;

    font-size: 0.82rem;

    font-weight: 700;
  }

  @media (max-width: 500px) {
    gap: 5px;

    button {
      width: 26px;
      height: 26px;

      font-size: 0.82rem;
    }

    strong {
      min-width: 18px;

      font-size: 0.78rem;
    }
  }
`;

/* =========================================================
   PANEL DE CREACIÓN
========================================================= */

export const OrderSection = styled.section`
  width: 100%;

  min-width: 0;
  min-height: 0;
height: 100%;
  display: flex;

  flex-direction: column;

  padding: 16px;

  box-sizing: border-box;

  background-color: rgba(115, 77, 44, 0.7);

  border-radius: 10px;

  overflow: hidden;

  @media (max-width: 850px) {
    padding: 14px;
  }

  @media (max-width: 700px) {
    padding: 12px;
  }

  @media (max-width: 400px) {
    padding: 10px;
  }

`;

/* =========================================================
   HEADER
========================================================= */

export const OrderHeader = styled.div`
  width: 100%;

  min-width: 0;

  flex-shrink: 0;

  display: grid;

  grid-template-columns: 1fr auto;

  align-items: center;

  gap: 8px;

  margin-bottom: 10px;

  h3 {
    min-width: 0;

    margin: 0;

    color: #ffffff;

    font-size: 1rem;

    line-height: 1.2;
  }

  span {
    color: #ffffff;

    font-size: 0.78rem;

    font-weight: 600;

    white-space: nowrap;
  }

  @media (max-width: 500px) {
    gap: 6px;

    h3 {
      font-size: 0.92rem;
    }

    span {
      font-size: 0.72rem;
    }
  }
`;

/* =========================================================
   CLIENTE
========================================================= */

export const CustomerInput = styled.input`
  width: 100%;

  height: 38px;

  grid-column: 1 / -1;

  padding: 0 11px;

  box-sizing: border-box;

  border: none;

  border-radius: 7px;

  outline: none;

  background-color: #ffffff;

  color: #222222;

  font-size: 0.82rem;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    box-shadow:
      0 0 0 2px
      rgba(194, 158, 112, 0.5);
  }

  @media (max-width: 500px) {
    height: 36px;

    font-size: 0.78rem;
  }
`;

/* =========================================================
   ERROR
========================================================= */

export const Error = styled.p`
  width: 100%;

  flex-shrink: 0;

  margin: 7px 0 0;

  padding: 7px 9px;

  box-sizing: border-box;

  text-align: center;

  border-radius: 6px;

  color: #8b1e1e;

  background-color: #ffe4e4;

  border: 1px solid #e2aaaa;

  font-size: 0.74rem;

  font-weight: 600;

  line-height: 1.3;
`;

/* =========================================================
   ITEMS DE LA COMANDA
========================================================= */

export const OrderItems = styled.div`
  width: 100%;

  flex: 1;

  min-width: 0;
  min-height: 0;

  display: flex;

  flex-direction: column;

  gap: 6px;

  overflow-y: auto;

  overflow-x: hidden;

  padding-right: 2px;

  box-sizing: border-box;

  scrollbar-width: thin;

  scrollbar-color:
    rgba(255, 255, 255, 0.2)
    transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);

    border-radius: 10px;
  }

  > p {
    margin: 15px 5px;

    text-align: center;

    color: rgba(255, 255, 255, 0.75);

    font-size: 0.78rem;
  }
`;

/* =========================================================
   ITEM
========================================================= */

export const OrderItem = styled.div`
  width: 100%;

  min-width: 0;

  min-height: 50px;

  flex-shrink: 0;

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 8px;

  padding: 8px 10px;

  box-sizing: border-box;

  background-color: #ffffff;

  border-radius: 7px;

  h4 {
    min-width: 0;

    margin: 0;

    color: #333333;

    font-size: 0.82rem;

    font-weight: 600;

    line-height: 1.25;

    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;
  }

  span {
    color: #653007;

    font-size: 0.76rem;

    font-weight: 600;

    white-space: nowrap;
  }

  > div:first-child {
    min-width: 0;

    flex: 1;

    display: flex;

    flex-direction: column;

    gap: 2px;
  }

  @media (max-width: 500px) {
    min-height: 47px;

    padding: 7px 8px;

    h4 {
      font-size: 0.77rem;
    }

    span {
      font-size: 0.71rem;
    }
  }
`;

/* =========================================================
   TOTALES
========================================================= */

export const TotalSection = styled.div`
  width: 100%;

  flex-shrink: 0;

  display: flex;

  flex-direction: column;

  gap: 3px;

  margin-top: 8px;

  padding-top: 7px;

  border-top:
    1px solid
    rgba(255, 255, 255, 0.35);

  color: #222222;

  box-sizing: border-box;

  span,
  strong,
  button {
    color: #222222;
  }

  .subtotal-row {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 6px;

    min-height: 20px;
  }

  .subtotal-info {
    display: flex;

    align-items: center;

    gap: 6px;

    min-width: 0;
  }

  .subtotal-info span {
    font-size: 0.73rem;

    font-weight: 500;
  }

  .subtotal-info strong {
    font-size: 0.78rem;

    font-weight: 700;
  }

  .discount {
    flex-shrink: 0;

    white-space: nowrap;

    font-size: 0.68rem;

    font-weight: 600;
  }

  .total-row {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 6px;

    min-height: 26px;

    padding-top: 5px;

    border-top:
      1px solid
      rgba(255, 255, 255, 0.25);
  }

  .total-info {
    display: flex;

    align-items: center;

    gap: 6px;

    min-width: 0;
  }

  .total-info strong:first-child {
    font-size: 0.82rem;
  }

  .total-info strong:last-child {
    font-size: 0.92rem;
  }

  .promotions-toggle {
    flex-shrink: 0;

    padding: 3px 5px;

    border: none;

    border-radius: 5px;

    background: transparent;

    color: #222222;

    cursor: pointer;

    font-size: 0.65rem;

    font-weight: 600;

    white-space: nowrap;

    transition:
      background-color 0.2s ease,
      opacity 0.2s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  .promotions-details {
    display: flex;

    flex-direction: column;

    gap: 2px;

    max-height: 80px;

    overflow-y: auto;

    margin-top: 2px;

    padding-top: 3px;

    border-top:
      1px solid
      rgba(255, 255, 255, 0.2);
  }

  .promotion-row {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 6px;

    min-width: 0;

    padding: 2px 0;

    color: #222222;

    font-size: 0.66rem;
  }

  .promotion-row span {
    min-width: 0;

    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;
  }

  .promotion-row strong {
    flex-shrink: 0;

    font-size: 0.66rem;
  }

  @media (max-width: 500px) {
    margin-top: 6px;

    .discount {
      font-size: 0.62rem;
    }

    .total-info strong:first-child {
      font-size: 0.77rem;
    }

    .total-info strong:last-child {
      font-size: 0.86rem;
    }

    .promotions-toggle {
      font-size: 0.6rem;
    }
  }
`;

/* =========================================================
   DATOS DE LA COMANDA
========================================================= */

export const OrderData = styled.div`
  width: 100%;

  flex-shrink: 0;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 7px;

  margin-top: 8px;

  label {
    width: 100%;

    min-width: 0;

    display: flex;

    flex-direction: column;

    gap: 3px;

    color: #ffffff;

    font-size: 0.7rem;

    font-weight: 600;
  }

  label > span {
    color: #ffd6d6;

    font-size: 0.63rem;
  }

  .date-display {
    width: 100%;

    height: 35px;

    padding: 0 9px;

    box-sizing: border-box;

    border: none;

    border-radius: 6px;

    outline: none;

    background-color: #ffffff;

    color: #333333;

    font-size: 0.76rem;
  }

  @media (max-width: 700px) {
    gap: 6px;

    label {
      font-size: 0.67rem;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;

    gap: 5px;

    label {
      font-size: 0.64rem;
    }

    .date-display {
      height: 33px;

      font-size: 0.72rem;
    }
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;

    gap: 5px;
  }
`;

/* =========================================================
   SELECT
========================================================= */

export const Select = styled.select`
  width: 100%;

  height: 35px;

  padding: 0 8px;

  box-sizing: border-box;

  border: none;

  border-radius: 6px;

  outline: none;

  background-color: #ffffff;

  color: #333333;

  font-size: 0.76rem;

  cursor: pointer;

  &:focus {
    box-shadow:
      0 0 0 2px
      rgba(194, 158, 112, 0.5);
  }

  @media (max-width: 500px) {
    height: 33px;

    font-size: 0.72rem;
  }
`;

/* =========================================================
   HORA
========================================================= */

export const TimeInput = styled.input`
  width: 100%;

  height: 35px;

  padding: 0 8px;

  box-sizing: border-box;

  border: none;

  border-radius: 6px;

  outline: none;

  background-color: #ffffff;

  color: #333333;

  font-size: 0.76rem;

  &:focus {
    box-shadow:
      0 0 0 2px
      rgba(194, 158, 112, 0.5);
  }

  @media (max-width: 500px) {
    height: 33px;

    font-size: 0.72rem;
  }
`;

/* =========================================================
   BOTÓN CREAR
========================================================= */

export const CreateOrderButton = styled.button`
  width: 100%;

  min-height: 40px;

  flex-shrink: 0;

  margin-top: 8px;

  padding: 9px 12px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: none;

  border-radius: 7px;

  background-color: #c29e70;

  color: #ffffff;

  cursor: pointer;

  font-size: 0.84rem;

  font-weight: 700;

  transition:
    background-color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #b38d5f;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;

    transform: none;
  }

  @media (max-width: 500px) {
    min-height: 38px;

    margin-top: 7px;

    padding: 8px 10px;

    font-size: 0.78rem;
  }
`;