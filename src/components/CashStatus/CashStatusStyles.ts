import styled from "styled-components";

type CashStatus = "open" | "closed" | "not-open";

interface CashStatusProps {
  $status: CashStatus;
}

// =========================================================
// CONTENEDOR PRINCIPAL
// =========================================================

export const CashStatusContainer = styled.div<CashStatusProps>`
  position: relative;

  display: flex;
  align-items: center;

  color: white;

  width: fit-content;
  min-width: 0;

  padding: 5px 8px;

  border-radius: 12px;

  box-sizing: border-box;

  border: 1px solid rgba(255, 255, 255, 0.1);

  background: rgba(255, 255, 255, 0.045);

  backdrop-filter: blur(8px);

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  // =====================================================
  // BOTÓN MOBILE
  // =====================================================

  .mobile-status-toggle {
    display: none;
  }

  // =====================================================
  // CONTENIDO
  // =====================================================

  .cash-status-content {
    display: flex;
    align-items: center;
  }

  // =====================================================
  // CALENDARIO
  // =====================================================

  .calendar-icon {
    width: 34px;
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 9px;

    flex-shrink: 0;

    background: rgba(255, 255, 255, 0.08);
  }

  .calendar-icon svg {
    font-size: 17px;
  }

  // =====================================================
  // INPUT FECHA
  // =====================================================

  input[type="date"] {
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    opacity: 0;

    cursor: pointer;

    z-index: 10;
  }

  // =====================================================
  // DIVISOR
  // =====================================================

  .divider {
    width: 1px;
    height: 30px;

    margin: 0 10px;

    background: rgba(255, 255, 255, 0.16);

    flex-shrink: 0;
  }

  // =====================================================
  // ESTADO GENERAL - ABIERTA
  // =====================================================

  ${({ $status }) =>
    $status === "open" &&
    `
      border-color: rgba(101, 209, 107, 0.22);

      .calendar-icon {
        color: #8ee494;
        background: rgba(76, 175, 80, 0.14);
      }

      .mobile-status-icon {
        color: #8ee494;
        background: rgba(76, 175, 80, 0.14);
      }
    `}

  // =====================================================
  // ESTADO GENERAL - CERRADA
  // =====================================================

  ${({ $status }) =>
    $status === "closed" &&
    `
      border-color: rgba(255, 101, 101, 0.22);

      .calendar-icon {
        color: #ff8585;
        background: rgba(200, 60, 60, 0.14);
      }

      .mobile-status-icon {
        color: #ff8585;
        background: rgba(200, 60, 60, 0.14);
      }
    `}

  // =====================================================
  // ESTADO GENERAL - SIN ABRIR
  // =====================================================

  ${({ $status }) =>
    $status === "not-open" &&
    `
      border-color: rgba(255, 255, 255, 0.1);

      .calendar-icon {
        color: #cfcfcf;
        background: rgba(255, 255, 255, 0.07);
      }

      .mobile-status-icon {
        color: #cfcfcf;
        background: rgba(255, 255, 255, 0.07);
      }
    `}

  // =====================================================
  // HOVER
  // =====================================================

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }

  // =====================================================
  // LINKS
  // =====================================================

  a {
    color: inherit;
    text-decoration: none;
  }

  // =====================================================
  // TABLET
  // =====================================================

  @media (max-width: 1000px) {
    padding: 4px 7px;

    .calendar-icon {
      width: 32px;
      height: 32px;
    }

    .divider {
      height: 28px;
      margin: 0 7px;
    }
  }

  // =====================================================
  // MOBILE
  // =====================================================

  @media (max-width: 700px) {
    width: auto;

    padding: 3px;

    border-radius: 10px;

    // -----------------------------------------------------
    // BOTÓN
    // -----------------------------------------------------

    .mobile-status-toggle {
      width: auto;
      min-width: 105px;

      display: flex;
      align-items: center;

      gap: 7px;

      padding: 4px 6px;

      border: none;
      border-radius: 8px;

      background: transparent;

      color: white;

      cursor: pointer;

      box-sizing: border-box;

      transition:
        background-color 0.2s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.06);
      }
    }

    // -----------------------------------------------------
    // ICONO BOTÓN
    // -----------------------------------------------------

    .mobile-status-icon {
      width: 28px;
      height: 28px;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;

      border-radius: 7px;

      background: rgba(255, 255, 255, 0.08);
    }

    .mobile-status-icon svg {
      font-size: 14px;
    }

    // -----------------------------------------------------
    // TEXTO BOTÓN
    // -----------------------------------------------------

    .mobile-status-text {
      min-width: 0;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 1px;

      line-height: 1.1;
    }

    .mobile-status-text small {
      font-size: 0.5rem;

      line-height: 1;

      text-transform: uppercase;

      letter-spacing: 0.4px;

      opacity: 0.55;
    }

    .mobile-status-text strong {
      font-size: 0.68rem;

      line-height: 1.1;

      font-weight: 700;

      white-space: nowrap;
    }

    // -----------------------------------------------------
    // FLECHA
    // -----------------------------------------------------

    .mobile-status-arrow {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 2px;

      font-size: 0.5rem;

      opacity: 0.6;

      flex-shrink: 0;
    }

    // -----------------------------------------------------
    // CONTENIDO OCULTO
    // -----------------------------------------------------

    .cash-status-content {
      display: none;
    }

    // -----------------------------------------------------
    // CONTENIDO ABIERTO
    // -----------------------------------------------------

    &.mobile-open {
      width: 230px;

      padding: 5px;

      z-index: 1000;

      .cash-status-content {
        position: absolute;

        top: calc(100% + 7px);
        left: 0;

        width: 230px;

        display: flex;
        flex-direction: column;
        align-items: stretch;

        gap: 5px;

        padding: 8px;

        box-sizing: border-box;

        border: 1px solid rgba(194, 158, 112, 0.18);

        border-radius: 12px;

        background: #653007;

        box-shadow:
          0 10px 30px rgba(0, 0, 0, 0.3);

        animation: cashStatusOpen 0.18s ease;
      }

      .divider {
        width: 100%;
        height: 1px;

        margin: 2px 0;

        background: rgba(255, 255, 255, 0.12);
      }

      .date-section {
        width: 100%;

        box-sizing: border-box;

        justify-content: flex-start;

        padding: 6px 7px;
      }

      .shift-status-container {
        width: 100%;

        display: flex;

        flex-direction: column;

        align-items: stretch;

        gap: 4px;
      }

      .shift-status-section {
        width: 100%;

        box-sizing: border-box;
      }
    }
  }

  // =====================================================
  // MOBILE CHICO
  // =====================================================

  @media (max-width: 500px) {
    .mobile-status-toggle {
      min-width: 98px;

      gap: 6px;

      padding: 3px 5px;
    }

    .mobile-status-icon {
      width: 27px;
      height: 27px;
    }

    .mobile-status-text strong {
      font-size: 0.64rem;
    }

    .mobile-status-text small {
      font-size: 0.48rem;
    }

    &.mobile-open {
      width: 215px;

      .cash-status-content {
        width: 215px;
      }
    }
  }

  // =====================================================
  // MOBILE MUY CHICO
  // =====================================================

  @media (max-width: 400px) {
    .mobile-status-toggle {
      min-width: 90px;

      gap: 5px;

      padding: 3px 4px;
    }

    .mobile-status-icon {
      width: 25px;
      height: 25px;

      border-radius: 6px;
    }

    .mobile-status-icon svg {
      font-size: 13px;
    }

    .mobile-status-text strong {
      font-size: 0.6rem;
    }

    .mobile-status-text small {
      font-size: 0.44rem;
    }

    .mobile-status-arrow {
      font-size: 0.45rem;
    }

    &.mobile-open {
      width: 205px;

      .cash-status-content {
        width: 205px;
      }
    }
  }

  // =====================================================
  // ANIMACIÓN
  // =====================================================

  @keyframes cashStatusOpen {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// =========================================================
// SECCIÓN FECHA
// =========================================================

export const DataSection = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  gap: 9px;

  padding: 2px 5px;

  border-radius: 9px;

  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 700px) {
    gap: 7px;

    padding: 4px 5px;
  }

  @media (max-width: 500px) {
    gap: 6px;

    padding: 4px;
  }
`;

// =========================================================
// INFORMACIÓN DE FECHA
// =========================================================

export const DateInfo = styled.div`
  display: flex;

  flex-direction: column;

  gap: 1px;

  pointer-events: none;

  text-align: center;

  .date-label {
    font-size: 0.62rem;

    line-height: 1;

    text-transform: uppercase;

    letter-spacing: 0.5px;

    opacity: 0.55;
  }

  strong {
    font-size: 0.88rem;

    line-height: 1.2;

    font-weight: 700;
  }

  .day-name {
    font-size: 0.72rem;

    line-height: 1.1;

    text-transform: capitalize;

    opacity: 0.6;
  }

  @media (max-width: 1000px) {
    .date-label {
      font-size: 0.58rem;
    }

    strong {
      font-size: 0.82rem;
    }

    .day-name {
      font-size: 0.68rem;
    }
  }

  @media (max-width: 700px) {
    .date-label {
      font-size: 0.55rem;
    }

    strong {
      font-size: 0.76rem;
    }

    .day-name {
      font-size: 0.64rem;
    }
  }

  @media (max-width: 500px) {
    .date-label {
      font-size: 0.5rem;
    }

    strong {
      font-size: 0.7rem;
    }

    .day-name {
      font-size: 0.58rem;
    }
  }

  @media (max-width: 400px) {
    .date-label {
      font-size: 0.46rem;
    }

    strong {
      font-size: 0.65rem;
    }

    .day-name {
      font-size: 0.54rem;
    }
  }
`;

// =========================================================
// CONTENEDOR DE TURNOS
// =========================================================

export const ShiftStatusContainer = styled.div`
  display: flex;

  align-items: center;

  gap: 5px;

  white-space: nowrap;

  min-width: 0;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 700px) {
    gap: 4px;
  }

  @media (max-width: 500px) {
    gap: 3px;
  }
`;

// =========================================================
// PROPS TURNO
// =========================================================

interface ShiftStatusProps {
  $status: CashStatus;
  $selected: boolean;
}

// =========================================================
// TURNO
// =========================================================

export const ShiftStatusSection = styled.div<ShiftStatusProps>`
  display: flex;

  align-items: center;

  gap: 7px;

  padding: 5px 8px;

  border-radius: 9px;

  cursor: pointer;

  border: 1px solid transparent;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  // =====================================================
  // ICONO
  // =====================================================

  .shift-icon {
    width: 27px;
    height: 27px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 7px;

    flex-shrink: 0;
  }

  .shift-icon svg {
    font-size: 14px;
  }

  // =====================================================
  // INFORMACIÓN
  // =====================================================

  .shift-info {
    display: flex;

    flex-direction: column;

    gap: 1px;
  }

  .shift-name {
    font-size: 0.58rem;

    line-height: 1;

    text-transform: uppercase;

    letter-spacing: 0.4px;

    opacity: 0.55;
  }

  .shift-info strong {
    font-size: 0.76rem;

    line-height: 1.2;

    font-weight: 700;
  }

  // =====================================================
  // INDICADOR
  // =====================================================

  .status-indicator {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    flex-shrink: 0;
  }

  // =====================================================
  // ABIERTO
  // =====================================================

  ${({ $status }) =>
    $status === "open" &&
    `
      .shift-icon {
        background: rgba(76, 175, 80, 0.16);
        color: #8ee494;
      }

      .status-indicator {
        background: #65d16b;

        box-shadow:
          0 0 0 3px
          rgba(101, 209, 107, 0.12);
      }
    `}

  // =====================================================
  // CERRADO
  // =====================================================

  ${({ $status }) =>
    $status === "closed" &&
    `
      .shift-icon {
        background: rgba(200, 60, 60, 0.16);
        color: #ff8585;
      }

      .status-indicator {
        background: #ff6565;

        box-shadow:
          0 0 0 3px
          rgba(255, 101, 101, 0.12);
      }
    `}

  // =====================================================
  // SIN ABRIR
  // =====================================================

  ${({ $status }) =>
    $status === "not-open" &&
    `
      .shift-icon {
        background: rgba(150, 150, 150, 0.14);
        color: #cfcfcf;
      }

      .status-indicator {
        background: #999;

        box-shadow:
          0 0 0 3px
          rgba(153, 153, 153, 0.1);
      }
    `}

  // =====================================================
  // SELECCIONADO
  // =====================================================

  ${({ $selected }) =>
    $selected &&
    `
      background: rgba(255, 255, 255, 0.08);

      border-color:
        rgba(255, 255, 255, 0.14);
    `}

  // =====================================================
  // HOVER
  // =====================================================

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }

  // =====================================================
  // TABLET
  // =====================================================

  @media (max-width: 1000px) {
    gap: 5px;

    padding: 4px 6px;

    .shift-icon {
      width: 25px;
      height: 25px;
    }

    .shift-icon svg {
      font-size: 13px;
    }

    .shift-info strong {
      font-size: 0.7rem;
    }

    .shift-name {
      font-size: 0.55rem;
    }

    .status-indicator {
      width: 6px;
      height: 6px;
    }
  }

  // =====================================================
  // MOBILE
  // =====================================================

  @media (max-width: 700px) {
    gap: 5px;

    padding: 5px 6px;

    .shift-icon {
      width: 25px;
      height: 25px;
    }

    .shift-icon svg {
      font-size: 13px;
    }

    .shift-info strong {
      font-size: 0.7rem;
    }

    .shift-name {
      font-size: 0.52rem;
    }

    .status-indicator {
      width: 6px;
      height: 6px;
    }
  }

  // =====================================================
  // MOBILE CHICO
  // =====================================================

  @media (max-width: 500px) {
    gap: 5px;

    padding: 5px 6px;

    .shift-icon {
      width: 24px;
      height: 24px;
    }

    .shift-icon svg {
      font-size: 12px;
    }

    .shift-info strong {
      font-size: 0.67rem;
    }

    .shift-name {
      font-size: 0.5rem;
    }
  }

  // =====================================================
  // MOBILE MUY CHICO
  // =====================================================

  @media (max-width: 400px) {
    gap: 4px;

    padding: 4px 5px;

    .shift-icon {
      width: 22px;
      height: 22px;
    }

    .shift-icon svg {
      font-size: 11px;
    }

    .shift-info strong {
      font-size: 0.63rem;
    }

    .shift-name {
      font-size: 0.47rem;
    }

    .status-indicator {
      width: 5px;
      height: 5px;
    }
  }
`;