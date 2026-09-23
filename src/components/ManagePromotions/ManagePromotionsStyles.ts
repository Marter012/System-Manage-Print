import styled from "styled-components";

// =========================================================
// CONTENEDOR
// =========================================================

export const ContainerManagePromotions = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  padding: 20px;

  box-sizing: border-box;

  .active {
    background-color: green;
    color: white;
  }

  .inactive {
    background-color: red;
    color: white;
  }

  @media (max-width: 850px) {
    gap: 18px;
    padding: 18px;
  }

  @media (max-width: 600px) {
    gap: 15px;
    padding: 15px 10px;

    /*
     * ==================================================
     * TABLA DE PROMOCIONES
     * ==================================================
     *
     * Desktop:
     * Nombre | Descripción | Precio | Composición | Acciones
     *
     * Mobile:
     * Nombre | Precio | Acciones
     */

    /*
     * OCULTAMOS EL CONTENIDO
     */

    .promotion-description,
    .promotion-composition {
      display: none;
    }

    /*
     * NOMBRE
     */

    .promotion-name {
      min-width: 0;
    }

    .promotion-name strong {
      display: block;

      min-width: 0;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /*
     * PRECIO
     */

    .price {
      text-align: center;
      font-weight: 600;
    }

    /*
     * ACCIONES
     */

    .actions {
      justify-content: flex-end;
      gap: 4px;
    }

    .status-text {
      display: none;
    }

    /*
     * CABECERA DE LA TABLA
     *
     * Nombre | Descripción | Precio | Composición | Acciones
     *
     * Ocultamos:
     * Descripción
     * Composición
     */

    h4:nth-child(2),
    h4:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 400px) {
    gap: 12px;
    padding: 12px 8px;

    .actions {
      gap: 3px;
    }
  }
`;

// =========================================================
// AGREGAR PROMOCIÓN
// =========================================================

export const AddPromotionButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 12px 18px;

  border: none;
  border-radius: 8px;

  background-color: #734d2c;

  color: white;

  font-size: 0.95rem;
  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  svg {
    font-size: 14px;
    flex-shrink: 0;
  }

  &:hover {
    background-color: #c29e70;
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(101, 48, 7, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 11px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    padding: 10px 14px;
    font-size: 0.85rem;
  }
`;

// =========================================================
// FILTROS
// =========================================================

export const Filter = styled.div`
  width: 80%;

  display: flex;

  gap: 5px;

  padding: 5px;

  box-sizing: border-box;

  background-color: rgba(115, 77, 44, 0.15);

  border-radius: 10px;

  button,
  select {
    flex: 1;

    min-width: 0;

    height: 42px;

    border: none;

    border-radius: 7px;

    background-color: rgba(155, 122, 78, 0.3);

    font-size: 0.95rem;

    font-weight: 500;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      background-color: rgba(194, 158, 112, 0.7);
    }

    &.active {
      background-color: #c29e70;
      font-weight: 600;
    }
  }

  select {
    text-align: center;

    background-color: rgba(155, 122, 78) !important;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 100%;

    gap: 4px;

    button,
    select {
      height: 40px;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;

    button,
    select {
      flex: 1 1 calc(50% - 4px);

      min-width: calc(50% - 4px);

      height: 40px;

      font-size: 0.82rem;
    }

    select {
      flex: 1 1 100%;
      min-width: 100%;
    }
  }

  @media (max-width: 400px) {
    button,
    select {
      height: 38px;
      font-size: 0.78rem;
    }
  }
`;

// =========================================================
// OPCIONES DE LA PROMOCIÓN
// =========================================================

export const PromotionOptions = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 18px;

  @media (max-width: 600px) {
    gap: 14px;
  }

  @media (max-width: 400px) {
    gap: 12px;
  }
`;

// =========================================================
// INFORMACIÓN DE LA PROMOCIÓN
// =========================================================

export const PromotionInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 10px;

  h3 {
    margin: 0 0 4px;

    color: #653007;

    font-size: 1.3rem;
    font-weight: 700;

    line-height: 1.25;
  }

  p {
    margin: 0;

    color: #665e58;

    font-size: 0.9rem;

    line-height: 1.5;
  }

  > div {
    min-height: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 12px;

    box-sizing: border-box;

    padding: 10px 14px;

    border: 1px solid #e8ded5;

    border-radius: 9px;

    background-color: #ffffff;
  }

  span {
    min-width: 0;

    color: #766e68;

    font-size: 0.82rem;
    font-weight: 600;
  }

  strong {
    min-width: 0;

    color: #653007;

    font-size: 0.95rem;
    font-weight: 700;

    text-align: right;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > strong {
    display: block;

    padding: 13px 14px;

    border: 1px solid #eadfd4;

    border-radius: 9px;

    background-color: #faf7f4;

    color: #653007;

    font-size: 0.95rem;

    text-align: left;

    white-space: normal;

    overflow: visible;
  }

  @media (max-width: 600px) {
    gap: 8px;

    h3 {
      font-size: 1.15rem;
    }

    p {
      font-size: 0.85rem;
    }

    > div {
      min-height: 44px;

      gap: 8px;

      padding: 9px 11px;
    }

    span {
      font-size: 0.78rem;
    }

    strong {
      font-size: 0.88rem;
    }

    > strong {
      padding: 11px;
      font-size: 0.88rem;
    }
  }

  @media (max-width: 400px) {
    h3 {
      font-size: 1.05rem;
    }

    p {
      font-size: 0.8rem;
    }

    > div {
      padding: 8px 10px;
    }

    span {
      font-size: 0.74rem;
    }

    strong {
      font-size: 0.82rem;
    }

    > strong {
      padding: 10px;
      font-size: 0.82rem;
    }
  }
`;

// =========================================================
// COMPOSICIÓN
// =========================================================

export const PromotionItems = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 10px;

  h3 {
    margin: 0 0 4px;

    color: #653007;

    font-size: 1.05rem;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    gap: 8px;

    h3 {
      font-size: 0.98rem;
    }
  }

  @media (max-width: 400px) {
    gap: 7px;

    h3 {
      font-size: 0.92rem;
    }
  }
`;

// =========================================================
// ITEM DE PROMOCIÓN
// =========================================================

export const PromotionItem = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 12px;

  box-sizing: border-box;

  padding: 13px 14px;

  border: 1px solid #e8ded5;

  border-radius: 9px;

  background-color: #faf7f4;

  > div {
    display: flex;
    flex-direction: column;

    gap: 5px;
  }

  strong {
    color: #653007;

    font-size: 0.95rem;
    font-weight: 700;

    line-height: 1.3;
  }

  span {
    color: #766e68;

    font-size: 0.82rem;
    font-weight: 600;
  }

  p {
    margin: 0;

    padding: 6px 9px;

    border: 1px solid #eee4dc;

    border-radius: 6px;

    background-color: #ffffff;

    color: #665e58;

    font-size: 0.82rem;

    line-height: 1.4;

    overflow-wrap: anywhere;
  }

  @media (max-width: 600px) {
    gap: 9px;

    padding: 11px;

    strong {
      font-size: 0.88rem;
    }

    span {
      font-size: 0.76rem;
    }

    p {
      padding: 6px 8px;
      font-size: 0.78rem;
    }
  }

  @media (max-width: 400px) {
    gap: 8px;

    padding: 10px;

    strong {
      font-size: 0.84rem;
    }

    span {
      font-size: 0.72rem;
    }

    p {
      padding: 5px 7px;
      font-size: 0.74rem;
    }
  }
`;

// =========================================================
// ACCIONES
// =========================================================

export const PromotionActions = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 8px;

  padding-top: 16px;

  border-top: 1px solid #e8ded5;

  div {
    display: flex;

    gap: 8px;

    width: 100%;
  }

  @media (max-width: 600px) {
    gap: 7px;

    padding-top: 13px;

    div {
      gap: 6px;
    }
  }
`;

// =========================================================
// BOTÓN DE ACCIÓN
// =========================================================

export const ActionButton = styled.button`
  width: 100%;

  min-height: 46px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 11px 15px;

  border: 1px solid #e2d7cd;

  border-radius: 9px;

  background-color: #ffffff;

  color: #403a35;

  font-family: inherit;

  font-size: 0.88rem;
  font-weight: 600;

  text-align: left;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;

  &:hover {
    background-color: #faf7f4;

    border-color: #c29e70;

    color: #653007;

    box-shadow: 0 2px 6px rgba(101, 48, 7, 0.08);

    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.99);
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;

    transform: none;

    box-shadow: none;
  }

  @media (max-width: 600px) {
    min-height: 43px;

    padding: 10px 12px;

    font-size: 0.84rem;
  }

  @media (max-width: 400px) {
    min-height: 41px;

    padding: 9px 10px;

    font-size: 0.8rem;
  }
`;

// =========================================================
// CANCELAR
// =========================================================

export const CancelButton = styled.button`
  width: 100%;

  min-height: 43px;

  padding: 10px 16px;

  border: 1px solid #ddd5ce;

  border-radius: 8px;

  background-color: #f5f3f1;

  color: #5f5751;

  font-family: inherit;

  font-size: 0.88rem;
  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #ebe7e3;

    border-color: #cfc6be;

    color: #403a35;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;

    transform: none;
  }

  @media (max-width: 600px) {
    min-height: 41px;

    padding: 9px 12px;

    font-size: 0.84rem;
  }

  @media (max-width: 400px) {
    min-height: 40px;

    padding: 8px 10px;

    font-size: 0.8rem;
  }
`;

// =========================================================
// BOTÓN DE ESTADO
// =========================================================

export const StatusButton = styled.button`
  width: 100%;

  min-height: 46px;

  padding: 10px 16px;

  border: 1px solid transparent;

  border-radius: 9px;

  color: #ffffff;

  font-family: inherit;

  font-size: 0.88rem;
  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;

    transform: none;
  }

  &.active {
    background-color: #b42318;

    border-color: #b42318;

    &:hover {
      background-color: #9f1f15;

      border-color: #9f1f15;

      box-shadow: 0 3px 8px rgba(180, 35, 24, 0.18);
    }
  }

  &.inactive {
    background-color: #18a957;

    border-color: #18a957;

    &:hover {
      background-color: #138c48;

      border-color: #138c48;

      box-shadow: 0 3px 8px rgba(24, 169, 87, 0.18);
    }
  }

  @media (max-width: 600px) {
    min-height: 43px;

    padding: 9px 12px;

    font-size: 0.84rem;
  }

  @media (max-width: 400px) {
    min-height: 41px;

    padding: 8px 10px;

    font-size: 0.8rem;
  }
`;
