import styled from "styled-components";

/* ========================================================= */
/* HISTORIAL */
/* ========================================================= */

export const HistoryContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 16px;

  padding: 20px;

  box-sizing: border-box;

  background: #f0e2cf;

  border: 1px solid #d8c2a6;

  border-radius: 14px;

  overflow: hidden;

  @media (max-width: 700px) {
    height: auto;
    min-height: 0;

    padding: 14px;

    gap: 12px;

    border-radius: 12px;
  }

  @media (max-width: 420px) {
    padding: 10px;

    gap: 10px;

    border-radius: 10px;
  }
`;

/* ========================================================= */
/* HEADER */
/* ========================================================= */

export const HistoryHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 20px;

  flex-shrink: 0;

  .header-info {
    display: flex;
    flex-direction: column;

    gap: 4px;

    min-width: 0;
  }

  h3 {
    margin: 0;

    color: #5a4030;

    font-size: 1.15rem;

    font-weight: 700;
  }

  span {
    color: #806957;

    font-size: 0.75rem;
  }

  @media (max-width: 650px) {
    align-items: stretch;

    flex-direction: column;

    gap: 10px;

    h3 {
      font-size: 1.05rem;
    }

    span {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 420px) {
    h3 {
      font-size: 1rem;
    }

    span {
      font-size: 0.66rem;
    }
  }
`;

/* ========================================================= */
/* SELECTOR DE MES */
/* ========================================================= */

export const MonthSelector = styled.div`
  display: flex;

  align-items: center;

  gap: 5px;

  padding: 4px;

  background: #e5d0b5;

  border: 1px solid #d8c2a6;

  border-radius: 9px;

  flex-shrink: 0;

  @media (max-width: 650px) {
    width: 100%;

    justify-content: space-between;

    box-sizing: border-box;
  }
`;

export const MonthButton = styled.button`
  width: 30px;
  height: 30px;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  border-radius: 7px;

  background: #f7ebdd;

  color: #80664f;

  font-size: 1.1rem;

  line-height: 1;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #c9aa85;

    color: #ffffff;
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 420px) {
    width: 28px;
    height: 28px;
  }
`;

export const MonthTitle = styled.span`
  min-width: 135px;

  margin: 0 !important;

  text-align: center;

  color: #5a4030 !important;

  font-size: 0.78rem !important;

  font-weight: 700;

  opacity: 1 !important;

  @media (max-width: 420px) {
    min-width: 0;

    flex: 1;

    font-size: 0.72rem !important;
  }
`;

/* ========================================================= */
/* LISTA */
/* ========================================================= */

export const HistoryList = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 6px;

  flex: 1;

  min-height: 0;

  overflow-x: auto;

  overflow-y: auto;

  scrollbar-width: thin;

  scrollbar-color: #cdb596 transparent;

  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #cdb596;

    border-radius: 10px;
  }

  @media (max-width: 700px) {
    overflow-x: hidden;

    overflow-y: auto;
  }
`;

/* ========================================================= */
/* FILAS */
/* ========================================================= */

export const HistoryRow = styled.div<{
  $header?: boolean;
}>`
  min-width: 950px;

  min-height: ${({ $header }) =>
    $header ? "38px" : "55px"};

  display: grid;

  grid-template-columns:
    1.1fr
    0.8fr
    1fr
    1fr
    1fr
    1fr
    1fr
    0.9fr
    0.65fr;

  align-items: center;

  gap: 6px;

  padding: 0 14px;

  box-sizing: border-box;

  border-radius: 9px;

  background: ${({ $header }) =>
    $header ? "#e5d0b5" : "#f7ebdd"};

  border: 1px solid
    ${({ $header }) =>
      $header ? "#d8c2a6" : "#ead9c5"};

  box-shadow: ${({ $header }) =>
    $header
      ? "none"
      : "0 2px 5px rgba(90, 64, 48, 0.05)"};

  span,
  strong {
    text-align: center;
  }

  ${({ $header }) =>
    !$header &&
    `
      cursor: pointer;

      transition:
        background 0.18s ease,
        border-color 0.18s ease,
        transform 0.18s ease;

      &:hover {
        background: #fbf1e5;

        border-color: #d8c2a6;

        transform: translateY(-1px);
      }

      &:active {
        transform: translateY(0);
      }
    `}

  ${({ $header }) =>
    $header
      ? `
        color: #6f5542;

        font-size: 0.68rem;

        font-weight: 700;

        span {
          color: #6f5542;
        }
      `
      : `
        span {
          color: #806957;

          font-size: 0.76rem;
        }

        strong {
          color: #5a4030;

          font-size: 0.78rem;
        }
      `}

  .closed,
  .open {
    justify-self: center;

    padding: 5px 11px;

    border-radius: 18px;

    font-size: 0.65rem;

    font-weight: 700;

    white-space: nowrap;
  }

  .closed {
    color: #80664f;

    background: #eee3d4;

    border: 1px solid #dfcfbb;
  }

  .open {
    color: #397052;

    background: #e1eee5;

    border: 1px solid #c8ddce;
  }

  .positive {
    color: #397052 !important;

    font-weight: 700;
  }

  .negative {
    color: #a65353 !important;

    font-weight: 700;
  }

  .zero {
    color: #80664f !important;

    font-weight: 700;
  }

  .print-button {
    width: 34px;
    height: 34px;

    display: flex;

    align-items: center;
    justify-content: center;

    justify-self: center;

    padding: 0;

    border: 1px solid #d8c2a6;

    border-radius: 8px;

    background: #eee3d4;

    color: #80664f;

    font-size: 1rem;

    cursor: pointer;

    transition:
      background 0.18s ease,
      color 0.18s ease,
      transform 0.18s ease;

    svg {
      font-size: 17px;
    }

    &:hover:not(:disabled) {
      background: #c9aa85;

      color: #ffffff;

      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.45;

      cursor: not-allowed;
    }

    span {
      font-size: 0.65rem;

      color: inherit;
    }
  }

  /* =======================================================
     TABLET
     ======================================================= */

  @media (max-width: 850px) {
    min-width: 0;

    grid-template-columns:
      minmax(0, 1.2fr)
      minmax(0, 0.9fr)
      minmax(0, 0.9fr)
      48px;

    gap: 6px;

    padding: 0 10px;

    min-height: ${({ $header }) =>
      $header ? "36px" : "52px"};

    /* Ocultamos:
       3 = Apertura
       4 = Ventas
       5 = Esperado
       6 = Cierre
       7 = Diferencia
    */

    > :nth-child(3),
    > :nth-child(4),
    > :nth-child(5),
    > :nth-child(6),
    > :nth-child(7) {
      display: none;
    }

    span,
    strong {
      min-width: 0;

      overflow: hidden;

      text-overflow: ellipsis;

      white-space: nowrap;
    }

    .closed,
    .open {
      padding: 4px 8px;

      font-size: 0.6rem;
    }

    .print-button {
      width: 32px;
      height: 32px;

      svg {
        font-size: 16px;
      }
    }
  }

  /* =======================================================
     MOBILE
     ======================================================= */

  @media (max-width: 600px) {
    min-width: 0;

    width: 100%;

    grid-template-columns:
      minmax(0, 1.3fr)
      minmax(0, 0.9fr)
      minmax(0, 0.9fr)
      40px;

    gap: 5px;

    padding: 0 8px;

    min-height: ${({ $header }) =>
      $header ? "34px" : "50px"};

    border-radius: 8px;

    > :nth-child(3),
    > :nth-child(4),
    > :nth-child(5),
    > :nth-child(6),
    > :nth-child(7) {
      display: none;
    }

    ${({ $header }) =>
      $header
        ? `
          font-size: 0.6rem;

          span {
            font-size: 0.6rem;
          }
        `
        : `
          span {
            font-size: 0.68rem;
          }

          strong {
            font-size: 0.7rem;
          }
        `}

    .closed,
    .open {
      padding: 4px 6px;

      font-size: 0.57rem;

      border-radius: 14px;
    }

    .print-button {
      width: 30px;
      height: 30px;

      border-radius: 7px;

      svg {
        font-size: 15px;
      }
    }
  }

  /* =======================================================
     CELULARES PEQUEÑOS
     ======================================================= */

  @media (max-width: 420px) {
    grid-template-columns:
      minmax(0, 1.2fr)
      minmax(0, 0.8fr)
      minmax(0, 0.85fr)
      36px;

    gap: 4px;

    padding: 0 6px;

    min-height: ${({ $header }) =>
      $header ? "32px" : "46px"};

    ${({ $header }) =>
      $header
        ? `
          font-size: 0.55rem;

          span {
            font-size: 0.55rem;
          }
        `
        : `
          span {
            font-size: 0.62rem;
          }

          strong {
            font-size: 0.65rem;
          }
        `}

    .closed,
    .open {
      padding: 3px 5px;

      font-size: 0.52rem;
    }

    .print-button {
      width: 28px;
      height: 28px;

      svg {
        font-size: 14px;
      }
    }
  }
`;

/* ========================================================= */
/* SIN REGISTROS */
/* ========================================================= */

export const EmptyMessage = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  min-height: 140px;

  padding: 30px 20px;

  box-sizing: border-box;

  color: #806957;

  background: #f7ebdd;

  border: 1px dashed #d8c2a6;

  border-radius: 10px;

  text-align: center;

  font-size: 0.82rem;

  @media (max-width: 600px) {
    min-height: 110px;

    padding: 20px 12px;

    font-size: 0.75rem;
  }
`;

/* ========================================================= */
/* HEADER DEL MODAL */
/* ========================================================= */

export const SummaryHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 15px;

  padding: 14px 16px;

  margin-bottom: 14px;

  background: #f1e2d0;

  border: 1px solid #dfcbb1;

  border-radius: 10px;

  h3 {
    margin: 0;

    color: #5a4030;

    font-size: 1.05rem;

    font-weight: 700;
  }

  span {
    display: block;

    margin-top: 4px;

    color: #806957;

    font-size: 0.73rem;
  }

  @media (max-width: 500px) {
    align-items: flex-start;

    flex-direction: column;

    gap: 8px;

    padding: 12px;

    h3 {
      font-size: 0.95rem;
    }

    span {
      font-size: 0.68rem;
    }
  }
`;

/* ========================================================= */
/* ESTADO */
/* ========================================================= */

export const SummaryStatus = styled.span`
  display: inline-flex !important;

  align-items: center;
  justify-content: center;

  margin: 0 !important;

  padding: 6px 12px;

  border-radius: 20px;

  font-size: 0.68rem !important;

  font-weight: 700;

  white-space: nowrap;

  &.closed {
    color: #80664f !important;

    background: #eee3d4;

    border: 1px solid #dfcfbb;
  }

  &.open {
    color: #397052 !important;

    background: #e1eee5;

    border: 1px solid #c8ddce;
  }
`;

/* ========================================================= */
/* SECCIONES DEL MODAL */
/* ========================================================= */

export const SummarySection = styled.section`
  display: flex;

  flex-direction: column;

  gap: 9px;

  margin-bottom: 14px;

  padding: 13px;

  background: #f0e4d4;

  border: 1px solid #dfcdb5;

  border-radius: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SummarySectionHeader = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 10px;

  h4 {
    margin: 0;

    color: #5a4030;

    font-size: 0.78rem;

    font-weight: 700;
  }

  > strong {
    color: #5a4030;

    font-size: 0.78rem;
  }
`;

/* ========================================================= */
/* RESUMEN */
/* ========================================================= */

export const SummaryGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 8px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 420px) {
    gap: 6px;
  }
`;

export const SummaryCard = styled.div`
  min-height: 72px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  gap: 5px;

  padding: 11px 13px;

  box-sizing: border-box;

  background: #f7ebdd;

  border: 1px solid #e4d3bd;

  border-radius: 8px;

  span {
    color: #806957;

    font-size: 0.65rem;
  }

  strong {
    color: #5a4030;

    font-size: 0.94rem;

    font-weight: 700;
  }
`;

/* ========================================================= */
/* DETALLES */
/* ========================================================= */

export const DetailGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 8px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailItem = styled.div`
  min-height: 48px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 10px;

  padding: 9px 11px;

  box-sizing: border-box;

  background: #f7ebdd;

  border: 1px solid #e4d3bd;

  border-radius: 8px;

  div {
    display: flex;

    align-items: center;

    gap: 7px;

    min-width: 0;
  }

  span {
    color: #806957;

    font-size: 0.69rem;
  }

  .icon {
    font-size: 0.9rem;
  }

  strong {
    color: #5a4030;

    font-size: 0.76rem;

    white-space: nowrap;
  }
`;

/* ========================================================= */
/* CÁLCULO DE EFECTIVO */
/* ========================================================= */

export const CashCalculation = styled.div`
  display: flex;

  flex-direction: column;

  gap: 0;

  overflow: hidden;

  background: #f7ebdd;

  border: 1px solid #dfcdb5;

  border-radius: 9px;
`;

export const CalculationTitle = styled.div`
  padding: 10px 13px;

  color: #5a4030;

  background: #e5d0b5;

  border-bottom: 1px solid #d8c2a6;

  font-size: 0.72rem;

  font-weight: 700;
`;

export const CalculationRow = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  padding: 8px 13px;

  border-bottom: 1px solid #eadbc8;

  span {
    color: #806957;

    font-size: 0.69rem;
  }

  strong {
    color: #5a4030;

    font-size: 0.75rem;

    white-space: nowrap;
  }
`;

export const CalculationResult = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  padding: 10px 13px;

  background: #e9d8c1;

  border-bottom: 1px solid #d8c2a6;

  span {
    color: #5a4030;

    font-size: 0.72rem;

    font-weight: 700;
  }

  strong {
    color: #5a4030;

    font-size: 0.82rem;

    font-weight: 700;
  }
`;

/* ========================================================= */
/* DIFERENCIA */
/* ========================================================= */

export const DifferenceLabel = styled.div`
  display: flex;

  flex-direction: column;

  gap: 2px;

  strong {
    font-size: 0.8rem;

    font-weight: 700;
  }

  span {
    font-size: 0.65rem;

    opacity: 0.7;
  }
`;

export const DifferenceValue = styled.strong`
  font-size: 1.05rem;

  font-weight: 800;

  white-space: nowrap;
`;

export const DifferenceBox = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  margin: 8px;

  padding: 12px 14px;

  border-radius: 8px;

  &.positive {
    background: #e1eee5;

    ${DifferenceLabel},
    ${DifferenceValue} {
      color: #397052;
    }
  }

  &.negative {
    background: #f3e3e3;

    ${DifferenceLabel},
    ${DifferenceValue} {
      color: #a65353;
    }
  }

  &.zero {
    background: #eee5da;

    ${DifferenceLabel},
    ${DifferenceValue} {
      color: #80664f;
    }
  }
`;