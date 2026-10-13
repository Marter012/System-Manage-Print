import styled from "styled-components";

// =========================================================
// CONTENEDOR
// =========================================================

export const CardTable = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  border: 1px solid #e5e7eb;
  border-radius: 12px;

  background: #ffffff;

  text-align: center;
  box-sizing: border-box;

  @media (max-width: 700px) {
    border-radius: 10px;
  }

  @media (max-width: 400px) {
    border-radius: 8px;
  }
`;

// =========================================================
// CABECERA
// =========================================================

export const TableHeader = styled.div<{ $columns: number }>`
  display: grid;

  grid-template-columns: repeat(
    ${({ $columns }) => $columns},
    minmax(0, 1fr)
  );

  gap: 16px;

  align-items: center;

  padding: 12px 16px;

  background: #f9fafb;

  border-bottom: 1px solid #e5e7eb;

  box-sizing: border-box;

  h4 {
    margin: 0;

    font-size: 11px;

    font-weight: 700;

    color: #6b7280;

    text-transform: uppercase;

    letter-spacing: 0.04em;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 850px) {
    gap: 10px;

    padding: 10px 12px;

    h4 {
      font-size: 10px;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns:
      minmax(0, 1.6fr)
      0.65fr
      0.9fr
      0.8fr;

    gap: 6px;

    padding: 9px 8px;

    h4 {
      font-size: 9px;
      letter-spacing: 0.02em;
    }

    h4:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 400px) {
    grid-template-columns:
      minmax(0, 1.5fr)
      0.6fr
      0.85fr
      0.7fr;

    gap: 4px;

    padding: 8px 6px;

    h4 {
      font-size: 8px;
    }
  }
`;

// =========================================================
// CONTENEDOR DE FILAS
// =========================================================

export const ContainerRows = styled.div`
  width: 100%;

  flex: 1;

  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// =========================================================
// FILA
// =========================================================

export const TableRow = styled.div<{ $columns: number }>`
  display: grid;

  grid-template-columns: repeat(
    ${({ $columns }) => $columns},
    minmax(0, 1fr)
  );

  gap: 16px;

  align-items: center;

  padding: 15px 16px;

  border-bottom: 1px solid #f1f1f1;

  font-size: 13px;

  color: #4b5563;

  transition: background 0.15s ease;

  box-sizing: border-box;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #fafafa;
  }

  span,
  p,
  strong {
    min-width: 0;

    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;
  }

  p {
    margin: 0;
  }

  strong {
    color: #111827;

    font-weight: 600;
  }

  .actions {
    min-width: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 6px;
  }

  strong:last-child {
    color: #15803d;

    font-size: 14px;
  }

  &.pending {
    background-color: #eacb75;

    color: #9a6b00;
  }

  @media (max-width: 850px) {
    gap: 10px;

    padding: 12px;

    font-size: 12px;

    .actions {
      gap: 5px;
    }

    strong:last-child {
      font-size: 13px;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns:
      minmax(0, 1.6fr)
      0.65fr
      0.9fr
      0.8fr;

    gap: 6px;

    padding: 10px 8px;

    font-size: 11px;

    .category {
      display: none;
    }

    .actions {
      justify-content: flex-end;

      gap: 4px;
    }

    .price {
      font-weight: 600;
    }

    .product-name {
      min-width: 0;
    }

    .stock {
      text-align: center;
    }

    .price {
      text-align: center;
    }

    .buttonstock {
      width: 30px;

      min-width: 30px;

      height: 30px;

      padding: 6px;

      gap: 0;
    }

    .button-text {
      display: none;
    }

    .actions button:not(.buttonstock) {
      width: 30px;

      min-width: 30px;

      height: 30px;

      padding: 6px;

      gap: 0;
    }

    .status-text {
      display: none;
    }

    .actions svg {
      width: 14px;

      height: 14px;

      flex-shrink: 0;
    }

    strong:last-child {
      font-size: 12px;
    }
  }

  @media (max-width: 400px) {
    grid-template-columns:
      minmax(0, 1.5fr)
      0.6fr
      0.85fr
      0.7fr;

    gap: 4px;

    padding: 9px 6px;

    font-size: 10px;

    .actions {
      gap: 3px;
    }

    .buttonstock,
    .actions button:not(.buttonstock) {
      width: 28px;

      min-width: 28px;

      height: 28px;

      padding: 5px;
    }

    .actions svg {
      width: 13px;

      height: 13px;
    }

    strong:last-child {
      font-size: 11px;
    }
  }
`;

// =========================================================
// BOTÓN DE TABLA
// =========================================================

export const TableButton = styled.button`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 7px;

  width: fit-content;

  padding: 7px 12px;

  border: 1px solid #e5e7eb;

  border-radius: 7px;

  background: #ffffff;

  color: #4b5563;

  font-size: 12px;

  font-weight: 600;

  line-height: 1;

  white-space: nowrap;

  cursor: pointer;

  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease,
    transform 0.15s ease;

  &:hover {
    background: #f9fafb;

    border-color: #d1d5db;

    color: #111827;
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    background: #f3f4f6;

    border-color: #e5e7eb;

    color: #9ca3af;

    cursor: not-allowed;

    transform: none;
  }

  svg {
    width: 14px;

    height: 14px;

    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    padding: 6px;

    gap: 0;

    min-width: 30px;

    width: 30px;

    height: 30px;

    border-radius: 7px;

    .button-text {
      display: none;
    }

    svg {
      width: 14px;

      height: 14px;
    }
  }

  @media (max-width: 400px) {
    min-width: 28px;

    width: 28px;

    height: 28px;

    padding: 5px;

    svg {
      width: 13px;

      height: 13px;
    }
  }
`;