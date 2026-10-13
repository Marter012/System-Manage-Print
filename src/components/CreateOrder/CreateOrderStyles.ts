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

      box-shadow: 0 2px 6px rgba(70, 40, 15, 0.18);
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
  height: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 14px;
  padding: 18px;
  box-sizing: border-box;
  background-color: rgba(115, 77, 44, 0.7);
  border-radius: 10px;
  overflow: hidden;
  .mobile-order-steps,
  .mobile-continue-button,
  .mobile-optional-button {
    display: none;
  }

  .order-header-row,
  .order-footer {
    grid-column: 1 / -1;
    min-width: 0;
  }

  .order-header-row {
    margin-bottom: 0;
  }

  .order-summary-column,
  .order-options-column {
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .order-summary-column {
    overflow: hidden;
  }

  .section-title {
    flex-shrink: 0;
    margin: 0;
    color: #fff;
    font-size: 1rem;
    line-height: 1.2;
  }

  .order-options-column {
    overflow: hidden;
  }

  .order-footer {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(180px, 0.35fr);
    align-items: center;
    gap: 14px;
  }

  .order-footer > div {
    min-width: 0;
    margin-top: 0;
  }

  .order-footer > button {
    margin-top: 0;
  }

  @media (max-width: 1250px) and (min-width: 701px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto;
    gap: 8px;
    padding: 10px;

    .order-footer {
      gap: 8px;
      grid-template-columns: minmax(0, 1fr) minmax(150px, 0.35fr);
    }

    .order-summary-column,
    .order-options-column {
      gap: 6px;
    }

    .section-title {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1250px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto minmax(0, 1fr) auto;
    gap: 8px;
    padding: 12px;

    .mobile-order-steps {
      height: 40px;
      overflow: hidden;
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 6px;
      padding: 4px;
      border-radius: 10px;
      background: rgba(67, 37, 16, 0.25);
    }

    .mobile-order-steps button {
      min-width: 0;
      height: 100%;
      border: 1px solid transparent;
      border-radius: 7px;
      background: transparent;
      color: rgba(255, 255, 255, 0.85);
      font: inherit;
      font-size: 0.82rem;
      font-weight: 700;
      cursor: pointer;
    }

    .mobile-order-steps button.active {
      height: 100%;
      background: #fff8ef;
      color: #653007;
      border-color: rgba(101, 48, 7, 0.15);
    }

    .order-summary-column,
    .order-options-column {
      grid-column: 1 / -1;
      min-height: 0;
    }

    &.step-products .order-options-column,
    &.step-payment .order-summary-column,
    &.step-optional .order-summary-column {
      display: none;
    }

    &.step-payment .details-nav,
    &.step-payment .details-panel {
      display: none;
    }

    &.step-optional .payment-section {
      display: none;
    }

    &.step-payment .order-header-row input,
    &.step-optional .order-header-row input {
      display: none;
    }

    .order-footer {
      grid-column: 1 / -1;
      grid-template-columns: minmax(0, 1fr);
      gap: 7px;
    }

    .mobile-continue-button,
    .mobile-optional-button {
      width: 100%;
      min-height: 42px;
      padding: 9px 12px;
      border: 0;
      border-radius: 8px;
      font: inherit;
      font-weight: 800;
      cursor: pointer;
    }

    .mobile-continue-button {
      display: block;
      background: #fff8ef;
      color: #653007;
    }

    .mobile-optional-button {
      display: none;
      background: rgba(255, 248, 239, 0.18);
      color: #fff8ef;
      border: 1px solid rgba(255, 248, 239, 0.45);
    }

    &.step-products .order-footer .desktop-create-order-button {
      display: none;
    }

    &.step-payment .order-footer .mobile-continue-button,
    &.step-optional .order-footer .mobile-continue-button {
      display: none;
    }

    &.step-payment .order-footer .mobile-optional-button {
      display: block;
    }

    &.step-payment .order-footer .desktop-create-order-button,
    &.step-optional .order-footer .desktop-create-order-button {
      display: flex;
    }

    .order-summary-column,
    .order-options-column {
      overflow: hidden;
    }

    .order-footer > div {
      min-width: 0;
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto minmax(0, 1fr) auto;
    gap: 6px;
    padding: 8px;

    .order-header-row {
      gap: 5px;
    }

    .order-summary-column,
    .order-options-column {
      min-height: 0;
      gap: 5px;
    }

    .order-summary-column {
      overflow: hidden;
    }

    .order-options-column {
      overflow: hidden;
    }

    .section-title {
      font-size: 0.84rem;
    }

    .order-footer {
      grid-template-columns: minmax(0, 1fr);
      gap: 5px;
    }

    .order-footer > div {
      min-width: 0;
    }

    .order-footer > button {
      min-height: 38px;
      height: 38px;
    }
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

    font-size: 1.08rem;

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
    box-shadow: 0 0 0 2px rgba(194, 158, 112, 0.5);
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

  flex: 1 1 0;

  min-width: 0;
  min-height: 88px;

  display: flex;

  flex-direction: column;

  gap: 6px;

  overflow-y: auto;

  overflow-x: hidden;

  padding-right: 2px;

  box-sizing: border-box;

  scrollbar-width: thin;

  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;

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

  border-top: 1px solid rgba(255, 255, 255, 0.35);

  color: #222222;

  box-sizing: border-box;

  span,
  strong,
  button {
    color: #ffffff;
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

    border-top: 1px solid rgba(255, 255, 255, 0.25);
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

    border-top: 1px solid rgba(255, 255, 255, 0.2);
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
  min-height: 0;
  flex: 1 1 auto;
  max-height: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0;
  padding: 0 2px 0 0;
  overflow: hidden;
  box-sizing: border-box;

  .details-nav.desktop-details-nav {
    display: none;
  }

  .details-nav {
    width: fit-content;
    max-width: 100%;
    min-height: 32px;
    display: flex;
    align-items: stretch;
    gap: 3px;
    padding: 3px;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 9px;
    background: rgba(67, 37, 16, 0.25);
  }

  .details-nav button {
    min-width: 68px;
    min-height: 28px;
    padding: 4px 10px;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: rgba(255, 255, 255, 0.82);
    font-family: inherit;
    font-size: 0.7rem;
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;
    transition:
      background 0.18s ease,
      color 0.18s ease,
      box-shadow 0.18s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
    }
    &.active {
      background: #fff8ef;
      color: #653007;
      box-shadow: 0 1px 4px rgba(40, 24, 12, 0.18);
    }
    &:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 1px;
    }
  }

  .details-nav {
    flex-shrink: 0;
  }

  .details-panel {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
  }

  .details-panel::-webkit-scrollbar {
    width: 4px;
  }

  .details-panel::-webkit-scrollbar-track {
    background: transparent;
  }

  .details-panel::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  .payment-section {
    flex-shrink: 0;
    height: 100%;

    overflow-y: auto !important;
    scrollbar-width: none !important;
  }

  .details-panel > .data-section {
    flex-shrink: 0;
  }

  .data-section {
    width: 100%;
    height: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px 10px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 10px;
    background: rgba(255, 250, 244, 0.12);
    overflow-y: auto;
    scrollbar-width: none;
  }

  .data-section-heading {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 3px 8px;
    strong {
      color: #fff;
      font-size: 0.78rem;
      font-weight: 800;
    }
    span {
      display: none;
    }
  }

  .fields-grid {
    min-width: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4px 6px;
  }

  label {
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
    color: #ffffff;
    font-size: 0.72rem;
    font-weight: 700;
  }

  label > span {
    color: #ffd6d6;
    font-size: 0.68rem;
  }

  .fields-grid input:not(.date-display),
  .combined-payment-row input {
    width: 90%;
    min-width: 0;
    height: 31px;
    padding: 0 8px;
    box-sizing: border-box;
    border: 1px solid #e6d7c8;
    border-radius: 7px;
    outline: none;
    background: #fff;
    color: #35271c;
    font-family: inherit;
    font-size: 0.74rem;
    font-weight: 500;
    &:focus {
      border-color: #c29e70;
      box-shadow: 0 0 0 2px rgba(194, 158, 112, 0.28);
    }
  }

  .combined-payments {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .combined-payments-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .combined-payments-heading > span {
    color: rgba(255, 255, 255, 0.84);
    font-size: 0.64rem;
  }
  .combined-payments-heading button,
  .add-extra-button {
    min-height: 28px;
    padding: 0 7px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.92);
    color: #653007;
    font-family: inherit;
    font-size: 0.67rem;
    font-weight: 800;
    cursor: pointer;
    &:hover:not(:disabled) {
      background: #f5e5d1;
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  .combined-payment-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(68px, 0.75fr) auto;
    align-items: center;
    gap: 4px;
  }
  .combined-payment-row button,
  .extra-item button {
    min-height: 32px;
    padding: 0 9px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 7px;
    background: rgba(255, 255, 255, 0.16);
    color: #fff;
    font-family: inherit;
    font-size: 0.66rem;
    font-weight: 700;
    cursor: pointer;
  }
  .combined-payment-row button:hover,
  .extra-item button:hover {
    background: rgba(255, 255, 255, 0.28);
  }
  .extra-name-field {
    grid-column: 1 / -1;
  }
  .extra-items-list {
    display: grid;
    gap: 5px;
  }
  .extra-item {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto auto;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border-radius: 7px;
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
    font-size: 0.7rem;
  }
  .extra-item span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .extra-item strong {
    white-space: nowrap;
  }
  .discount-hint {
    color: rgba(255, 255, 255, 0.78);
    font-size: 0.68rem;
  }

  .date-display {
    width: 100%;
    height: 31px;
    padding: 0 9px;
    box-sizing: border-box;
    border: 1px solid #e6d7c8;
    border-radius: 6px;
    outline: none;
    background-color: #ffffff;
    color: #333333;
    font-family: inherit;
    font-size: 0.78rem;
    font-weight: 500;
  }

  @media (max-width: 700px) {
    gap: 4px;
    min-height: 0;

    .payment-section {
      padding: 6px 7px;
      gap: 4px;
    }

    .data-section-heading strong {
      font-size: 0.72rem;
    }

    .details-nav {
      width: 100%;
      min-height: 30px;
      flex-shrink: 0;
      gap: 2px;
      padding: 2px;
    }

    .details-nav button {
      flex: 1 1 0;
      min-width: 0;
      min-height: 26px;
      padding: 3px 4px;
      font-size: 0.66rem;
    }

    .details-panel {
      min-height: 0;
    }

    .fields-grid {
      gap: 4px;
    }

    label {
      font-size: 0.67rem;
    }

    .fields-grid input:not(.date-display),
    .combined-payment-row input,
    .date-display {
      height: 29px;
      font-size: 0.7rem;
    }

    .combined-payments {
      gap: 3px;
    }

    .combined-payments-heading button,
    .add-extra-button {
      min-height: 25px;
      font-size: 0.62rem;
    }

    .combined-payment-row {
      grid-template-columns: minmax(0, 1fr) minmax(58px, 0.65fr) auto;
      gap: 3px;
    }

    .combined-payment-row button {
      min-height: 28px;
      padding-inline: 5px;
      font-size: 0.6rem;
    }

    .data-section {
      padding: 6px 7px;
      gap: 4px;
    }
  }

  @media (max-width: 500px) {
    gap: 5px;
    .details-nav button {
      font-size: 0.65rem;
    }
    .fields-grid {
      gap: 6px;
    }
    .data-section {
      padding: 7px;
      gap: 5px;
    }
    label {
      font-size: 0.66rem;
    }
    .date-display {
      height: 31px;
      font-size: 0.7rem;
    }
  }

  @media (max-width: 380px) {
    .fields-grid {
      grid-template-columns: 1fr 1fr;
    }
    .details-nav button {
      font-size: 0.61rem;
    }
    .combined-payment-row {
      grid-template-columns: minmax(0, 1fr) minmax(70px, 0.7fr) auto;
      gap: 4px;
    }
    .combined-payment-row button {
      padding: 0 6px;
    }
  }


  /* Ajuste exclusivo para pantallas grandes: no altera tablet ni móvil. */
  @media (min-width: 1401px) {
    /* En escritorio, el navbar vive debajo de Tipo de pago. */
    .payment-section {
      height: auto;
      flex: 0 0 auto;
      overflow: visible !important;
    }

    .details-nav.desktop-details-nav {
      display: flex;
      width: fit-content;
      max-width: 100%;
      flex-shrink: 0;
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .details-nav:not(.desktop-details-nav) {
      display: none;
    }

    /* Reserva espacio para renderizar el contenido de la opción activa. */
    .details-panel {
      display: block;
      flex: 1 1 0;
      min-height: 120px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .details-panel > .data-section {
      height: auto;
      min-height: 120px;
    }
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
    box-shadow: 0 0 0 2px rgba(194, 158, 112, 0.5);
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
    box-shadow: 0 0 0 2px rgba(194, 158, 112, 0.5);
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

  height: 100%;

  flex-shrink: 0;

  margin-top: 8px;

  padding: 9px 12px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: none;

  border-radius: 7px;

  background-color: #653007;

  color: #ffffff;

  cursor: pointer;

  font-size: 0.9rem;

  font-weight: 700;

  transition:
    background-color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #7b3d0b;
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
    min-height: 42px;

    margin-top: 7px;

    padding: 8px 10px;

    font-size: 0.84rem;
  }
`;
