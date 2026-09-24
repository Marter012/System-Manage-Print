import styled from "styled-components";

/* ============================================================
   CONTENEDOR GENERAL DEL CASH DAY
============================================================ */

export const CashDayContent = styled.div`
  width: 100%;
  max-height: 100%;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 1050px) {
    width: 100%;
    gap: 18px;
  }

  @media (max-width: 700px) {
    width: 100%;
    gap: 14px;
  }

  @media (max-width: 420px) {
    gap: 12px;
  }
  .summary-overlay {
    display: none;

    @media (max-width: 700px) {
      display: block;
      position: fixed;
      inset: 0;
      background: rgba(35, 28, 23, 0.4);
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(1px);
      z-index: 15;
    }
  }
`;

/* ============================================================
   SUMMARY BAR
============================================================ */
export const SummaryBackdrop = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;

    position: fixed;
    inset: 0;

    z-index: 15;

    background: rgba(35, 28, 23, 0.28);

    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);

    cursor: pointer;
  }
`;
export const SummaryBar = styled.div`
  width: 100%;
  height: 92px;

  display: flex;
  align-items: stretch;

  position: relative;
  z-index: 20;

  background: #ffffff;

  border: 1px solid #e1d8d0;

  overflow: hidden ;

  margin-bottom: 0;

  box-shadow: 0 4px 14px rgba(101, 48, 7, 0.07);

  box-sizing: border-box;

  .summary-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;
    min-width: 0;
  }

  .summary-toggle {
    display: none;
  }

  @media (max-width: 1050px) {
    height: 92px;

    .summary-content {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    height: auto;

    display: block;

    overflow: visible;

    .summary-toggle {
      width: 100%;
      min-height: 58px;

      display: flex;
      align-items: center;

      gap: 10px;

      padding: 9px 12px;

      border: none;

      background: #ffffff;
      color: #40372f;

      cursor: pointer;

      box-sizing: border-box;

      text-align: left;
    }

    .summary-toggle:hover {
      background: #faf8f6;
    }

    .summary-toggle-icon {
      width: 36px;
      height: 36px;

      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 9px;

      background: rgba(101, 48, 7, 0.08);

      font-size: 18px;
      line-height: 1;
    }

    .summary-toggle-info {
      min-width: 0;
      flex: 1;
      display: flex;
      flex-direction: column;

      gap: 3px;
    }

    .summary-toggle-info strong {
      display: block;

      color: #653007;

      font-size: 13px;
      font-weight: 800;
      line-height: 1.2;
    }

    .summary-toggle-info small {
      display: block;

      min-width: 0;

      color: #82766d;

      font-size: 10px;
      font-weight: 500;
      line-height: 1.3;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .summary-toggle-arrow {
      width: 28px;
      height: 28px;

      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 8px;

      background: rgba(101, 48, 7, 0.07);

      color: #653007;

      font-size: 11px;
    }

    .summary-content {
      display: none;
    }

    &.summary-open {
      height: 58px;

      min-height: 58px;

      overflow: visible;

      z-index: 20;

      .summary-content {
        width: 100%;

        height: auto;

        max-height: min(70vh, 560px);

        display: grid;

        grid-template-columns:
          minmax(0, 1fr)
          minmax(0, 1fr);

        gap: 8px;

        padding: 8px;

        box-sizing: border-box;

        position: absolute;

        top: calc(100% + 8px);

        left: 0;

        overflow-y: auto;
        overflow-x: hidden;

        background: #faf8f6;

        border: 1px solid #e1d8d0;

        border-radius: 14px;

        box-shadow:
          0 16px 40px rgba(55, 39, 28, 0.22),
          0 4px 12px rgba(101, 48, 7, 0.08);

        z-index: 30;

        scrollbar-width: thin;

        scrollbar-color: rgba(101, 48, 7, 0.22) transparent;

        -webkit-overflow-scrolling: touch;

        overscroll-behavior: contain;
      }
    }
  }

  @media (max-width: 420px) {
    .summary-toggle {
      min-height: 54px;
      padding: 8px 10px;
    }

    .summary-toggle-icon {
      width: 33px;
      height: 33px;
      font-size: 16px;
    }

    .summary-toggle-info strong {
      font-size: 12px;
    }

    .summary-toggle-info small {
      font-size: 9px;
    }

    .summary-toggle-arrow {
      width: 26px;
      height: 26px;
    }

    &.summary-open {
      .summary-content {
        gap: 6px;
        padding: 6px;
      }
    }
  }
`;

/* ============================================================
   SUMMARY ELEMENTS
============================================================ */

export const SummaryIcon = styled.span`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 10px;

  background: rgba(101, 48, 7, 0.08);

  font-size: 19px;
  line-height: 1;

  color: #653007;
`;

export const SummaryInfo = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  gap: 5px;

  overflow: hidden;
`;

export const SummaryLabel = styled.span`
  display: block;

  max-width: 100%;

  font-weight: 800;
  font-size: 10px;
  line-height: 1;

  letter-spacing: 0.55px;

  text-transform: uppercase;

  color: #7b6e64;

  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SummaryValue = styled.strong`
  display: block;

  max-width: 100%;

  font-size: 15px;
  line-height: 1;

  color: #40372f;

  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SummaryItem = styled.div`
  flex: 1 1 0;

  min-width: 0;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  padding: 10px 14px;

  box-sizing: border-box;

  white-space: nowrap;

  border-right: 1px solid rgba(101, 48, 7, 0.08);

  transition:
    background 0.2s ease,
    filter 0.2s ease;

  &:last-child {
    border-right: none;
  }

  &:hover {
    filter: brightness(0.97);
  }

  strong {
    color: #40372f;
  }

  &[data-type="shift"] {
    flex: 0.85;

    background: #f3e5d5;

    strong {
      color: #653007;
    }

    span {
      color: #80644f;
    }
  }

  &[data-type="opening"] {
    flex: 1;

    background: #f4f1ee;

    strong {
      color: #40372f;
    }

    span {
      color: #82766d;
    }
  }

  &[data-type="sales"] {
    background: #e7f4e9;

    strong {
      color: #277238;
    }

    span {
      color: #4d7955;
    }
  }

  &[data-type="income"] {
    background: #e8f5e9;

    strong {
      color: #287438;
    }

    span {
      color: #4c7854;
    }
  }

  &[data-type="expense"] {
    background: #fbeaea;

    strong {
      color: #a83232;
    }

    span {
      color: #986060;
    }
  }

  &[data-type="payment"] {
    background: #eef3f6;

    strong {
      color: #35434c;
    }

    span {
      color: #65737c;
    }
  }

  @media (max-width: 700px) {
    width: 100%;

    height: auto;

    min-height: 56px;

    padding: 8px;

    border: none;

    border-radius: 8px;

    box-sizing: border-box;

    gap: 7px;

    ${SummaryInfo} {
      width: 100%;
      min-width: 0;
    }

    ${SummaryLabel} {
      font-size: 8px;
      letter-spacing: 0.35px;
    }

    ${SummaryValue} {
      font-size: 12px;
    }
  }

  @media (max-width: 420px) {
    min-height: 52px;

    padding: 7px;

    ${SummaryLabel} {
      font-size: 7px;
    }

    ${SummaryValue} {
      font-size: 11px;
    }
  }
`;

/* ============================================================
   SUMMARY GROUP
============================================================ */

export const SummaryGrup = styled.div`
  flex: 2.5 1 0;

  min-width: 0;

  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  border-right: 1px solid rgba(101, 48, 7, 0.09);

  @media (max-width: 700px) {
    width: 100%;

    height: auto;

    min-height: 0;

    grid-column: 1 / -1;

    display: flex;

    overflow: visible;

    border: none;

    border-radius: 9px;

    background: #ffffff;
  }
`;

export const SummaryGroupTitle = styled.div`
  width: 100%;

  height: 31px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 10px;

  box-sizing: border-box;

  font-weight: 800;
  font-size: 15px;

  letter-spacing: 0.65px;

  text-transform: uppercase;

  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;

  color: #53636c;

  background: rgba(255, 255, 255, 0.55);

  border-bottom: 1px solid rgba(101, 48, 7, 0.07);

  &.loss {
    background-color: #f16c69;
  }

  &.gain {
    background-color: #aebf96;
  }

  @media (max-width: 700px) {
    height: 30px;
    min-height: 30px;

    padding: 0 8px;

    font-size: 10px;

    letter-spacing: 0.35px;

    border-radius: 8px 8px 0 0;
  }

  @media (max-width: 420px) {
    height: 28px;
    min-height: 28px;

    font-size: 9px;
  }
`;

export const SummaryGroupItems = styled.div`
  width: 100%;

  height: calc(100% - 31px);

  display: flex;

  align-items: stretch;

  min-width: 0;

  overflow: hidden;

  ${SummaryItem} {
    flex: 1 1 0;

    min-width: 0;

    height: 100%;

    padding: 8px;

    border-right: 1px solid rgba(101, 48, 7, 0.07);

    &:last-child {
      border-right: none;
    }
  }

  @media (max-width: 700px) {
    width: 100%;

    height: auto;

    min-height: 0;

    display: grid;

    grid-template-columns:
      minmax(0, 1fr)
      minmax(0, 1fr);

    gap: 6px;

    padding: 6px;

    box-sizing: border-box;

    overflow: visible;

    background: #ffffff;

    border-radius: 0 0 8px 8px;

    ${SummaryItem} {
      width: 100%;

      height: auto;

      min-height: 54px;

      padding: 7px;

      border: none;

      border-radius: 7px;
    }
  }

  @media (max-width: 420px) {
    gap: 5px;

    padding: 5px;

    ${SummaryItem} {
      min-height: 50px;

      padding: 6px;
    }
  }
`;

export const SummaryDivider = styled.div`
  width: 1px;

  height: 58px;

  flex-shrink: 0;

  align-self: center;

  background: #ddd5ce;

  @media (max-width: 700px) {
    display: none;
  }
`;

/* ============================================================
   SELECTOR MOBILE / TABLET
============================================================ */

export const CashMobileTabs = styled.div`
  display: none;

  @media (max-width: 1050px) {
    width: 100%;

    display: grid;

    grid-template-columns:
      minmax(0, 1fr)
      minmax(0, 1fr);

    gap: 8px;

    padding: 5px;

    box-sizing: border-box;

    background: #f4f1ee;

    border: 1px solid #e1d8d0;

    border-radius: 12px;
  }

  @media (max-width: 700px) {
    gap: 6px;

    padding: 4px;

    border-radius: 10px;
  }

  @media (max-width: 420px) {
    gap: 5px;
  }
`;

export const CashMobileTab = styled.button<{
  $active: boolean;
}>`
  width: 100%;

  min-height: 42px;

  border: none;

  border-radius: 9px;

  padding: 8px 12px;

  box-sizing: border-box;

  cursor: pointer;

  font-size: 13px;

  font-weight: 800;

  color: ${({ $active }) => ($active ? "#ffffff" : "#6f6259")};

  background: ${({ $active }) => ($active ? "#653007" : "transparent")};

  box-shadow: ${({ $active }) =>
    $active ? "0 3px 8px rgba(101, 48, 7, 0.18)" : "none"};

  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: ${({ $active }) => ($active ? "#653007" : "#e9e2dc")};
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 700px) {
    min-height: 40px;

    padding: 7px 9px;

    font-size: 12px;

    border-radius: 8px;
  }

  @media (max-width: 420px) {
    min-height: 38px;

    padding: 6px 7px;

    font-size: 11px;
  }
`;

/* ============================================================
   CASH CONTENT
============================================================ */

export const CashContent = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;

  display: grid;

  grid-template-columns:
    minmax(0, 2fr)
    minmax(320px, 1fr);

  gap: 24px;

  align-items: stretch;

  /* =========================
     DESKTOP / NOTEBOOK
     ========================= */

  max-height: 80%;

  min-height: 0;

  box-sizing: border-box;

  overflow: hidden;

  .cash-sales,
  .cash-movements {
    min-width: 0;
  }

  .cash-mobile-hidden {
    display: block;
  }

  .cash-close {
    grid-column: 1 / -1;
  }

  /* =========================
     TABLET
     ========================= */

  @media (max-width: 1050px) {
    width: 100%;

    display: flex;

    flex-direction: column;

    align-items: stretch;

    gap: 18px;

    height: auto;

    min-height: 0;

    overflow: visible;

    position: relative;

    z-index: 1;

    .cash-sales,
    .cash-movements {
      width: 100%;

      min-width: 0;
    }

    /*
     * En tablet/celular solamente se muestra
     * el panel seleccionado.
     */
    .cash-mobile-hidden {
      display: none;
    }

    .cash-mobile-active {
      display: block;
    }

    .cash-close {
      order: 3;

      width: 100%;
    }
  }

  /* =========================
     MOBILE
     ========================= */

  @media (max-width: 700px) {
    width: 100%;

    display: flex;

    flex-direction: column;

    align-items: stretch;

    gap: 14px;

    height: auto;

    min-height: 0;

    overflow: visible;

    position: relative;

    z-index: 1;

    .cash-sales,
    .cash-movements {
      width: 100%;
    }

    .cash-close {
      width: 100%;
    }
  }

  @media (max-width: 420px) {
    gap: 12px;
  }
`;

/* ============================================================
   SALES CONTAINER
============================================================ */

export const SalesContainer = styled.div`
  width: 100%;
  min-width: 0;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  /* =========================
     DESKTOP
     ========================= */

  height: 350px;

  min-height: 0;

  /* =========================
     TABLET
     ========================= */

  @media (max-width: 1050px) {
    height: auto;

    min-height: 280px;
    overflow: visible;
  }

  /* =========================
     MOBILE
     ========================= */

  @media (max-width: 700px) {
    height: auto;

    min-height: 250px;

    overflow: visible;
  }

  /* =========================
     MOBILE PEQUEÑO
     ========================= */

  @media (max-width: 420px) {
    min-height: 220px;
  }
`;

/* ============================================================
   OPEN CASH
============================================================ */

export const OpenCashContainer = styled.div`
  width: min(560px, 100%);

  padding: 42px 48px;

  display: flex;

  flex-direction: column;

  align-items: center;

  text-align: center;

  background: #ffffff;

  border: 1px solid #e4ddd7;

  border-radius: 18px;

  box-shadow: 0 8px 24px rgba(101, 48, 7, 0.07);

  box-sizing: border-box;

  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(194, 158, 112, 0.7);

    box-shadow: 0 10px 28px rgba(101, 48, 7, 0.1);

    transform: translateY(-2px);
  }

  h2 {
    margin: 0 0 10px;

    color: #653007;

    font-size: 22px;

    font-weight: 700;

    line-height: 1.3;
  }

  h3 {
    margin: 0 0 8px;

    color: #7a4b2a;

    font-size: 17px;

    font-weight: 600;
  }

  p {
    max-width: 420px;

    margin: 0 0 8px;

    color: #5f5751;

    font-size: 15px;

    font-weight: 500;

    line-height: 1.5;
  }

  p:last-of-type {
    margin-bottom: 22px;
  }

  strong {
    color: #653007;

    font-weight: 700;
  }

  svg {
    width: 58px;
    height: 58px;

    padding: 15px;

    margin-bottom: 22px;

    color: #653007;

    background: rgba(194, 158, 112, 0.16);

    border-radius: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;

    padding: 30px 22px;

    border-radius: 15px;

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }

    svg {
      width: 50px;
      height: 50px;

      padding: 13px;

      margin-bottom: 18px;
    }
  }

  @media (max-width: 420px) {
    padding: 25px 16px;

    h2 {
      font-size: 18px;
    }

    h3 {
      font-size: 15px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const OpenCashButton = styled.button`
  display: inline-flex;

  align-items: center;
  justify-content: center;

  min-width: 150px;

  border: none;

  border-radius: 10px;

  padding: 11px 22px;

  cursor: pointer;

  background: #653007;

  color: #ffffff;

  font-size: 14px;

  font-weight: 600;

  box-shadow: 0 4px 10px rgba(101, 48, 7, 0.18);

  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #7b3b0b;

    box-shadow: 0 6px 14px rgba(101, 48, 7, 0.22);

    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);

    box-shadow: 0 3px 7px rgba(101, 48, 7, 0.16);
  }

  &:focus-visible {
    outline: 3px solid rgba(194, 158, 112, 0.35);

    outline-offset: 2px;
  }

  @media (max-width: 420px) {
    width: 100%;

    min-width: 0;
  }
`;

/* ============================================================
   CLOSE CASH
============================================================ */

export const CloseCashButton = styled.button`
  border: 1px solid #e5e7eb;

  border-radius: 9px;

  padding: 9px 15px;

  font-weight: 800;

  color: white;

  cursor: pointer;

  font-size: 13px;

  background: #bb6969;

  white-space: nowrap;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #9d5050;

    border-color: #d1d5db;

    color: #111827;
  }

  @media (max-width: 1050px) {
    align-self: flex-start;
  }

  @media (max-width: 700px) {
    width: 100%;

    min-height: 42px;

    padding: 10px 15px;
  }
`;
