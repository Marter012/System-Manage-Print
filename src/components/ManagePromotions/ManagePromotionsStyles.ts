import styled from "styled-components";

// =========================================================
// CONTENEDOR PRINCIPAL
// =========================================================

export const ContainerManagePromotions = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;

  box-sizing: border-box;

  flex-shrink: 0;

  /*
    =========================================================
    ESTADOS GENERALES
    =========================================================
  */

  .active {
    background-color: green;
    color: white;
  }

  .inactive {
    background-color: red;
    color: white;
  }

  /*
    =========================================================
    TABLA DE PROMOCIONES
    =========================================================

    NOTEBOOK / DESKTOP

    Nombre | Descripción | Precio | Composición | Acciones

    Se mantienen las 5 columnas.

    =========================================================
    TABLET / CELULAR

    Nombre | Precio | Acciones

    Se ocultan:
    - Descripción
    - Composición

    Los botones muestran solamente el ícono.
    =========================================================
  */

  .promotions-table {
    width: 100%;

    height: 100%;
    max-height: 90%;

    min-height: 0;

    /*
      =======================================================
      TABLET / DISPOSITIVOS PEQUEÑOS
      =======================================================
    */

    @media (max-width: 900px) {
      /*
        =====================================================
        CABECERA

        Original:
        Nombre | Descripción | Precio | Composición | Acciones

        Nueva:
        Nombre | Precio | Acciones
        =====================================================
      */

      .table-header {
        grid-template-columns:
          minmax(0, 1fr)
          80px
          120px;

        gap: 10px;
      }

      /*
        Ocultar exactamente los headers:

        0 = Nombre
        1 = Descripción  ← ocultar
        2 = Precio
        3 = Composición  ← ocultar
        4 = Acciones
      */

      .table-header-1,
      .table-header-3 {
        display: none;
      }

      /*
        =====================================================
        FILAS

        Deben tener exactamente las mismas 3 columnas
        que la cabecera.
        =====================================================
      */

      .promotions-table-row {
        grid-template-columns:
          minmax(0, 1fr)
          80px
          120px;

        gap: 10px;
      }

      /*
        Ocultar las columnas correspondientes
      */

      .promotions-table-row
        .promotion-description,
      .promotions-table-row
        .promotion-composition {
        display: none;
      }

      /*
        =====================================================
        NOMBRE
        =====================================================
      */

      .promotions-table-row
        .promotion-name {
        min-width: 0;
      }

      .promotions-table-row
        .promotion-name
        strong {
        display: block;

        min-width: 0;

        overflow: hidden;

        text-overflow: ellipsis;

        white-space: nowrap;
      }

      /*
        =====================================================
        PRECIO
        =====================================================
      */

      .promotions-table-row
        .price {
        text-align: center;

        font-weight: 600;

        white-space: nowrap;
      }

      /*
        =====================================================
        ACCIONES
        =====================================================
      */

      .promotions-table-row
        .actions {
        display: flex;

        align-items: center;

        justify-content: center;

        gap: 0;
      }

      /*
        Ocultar "Activa / Inactiva"
      */

      .promotions-table-row
        .actions
        .status-text {
        display: none;
      }

      /*
        =====================================================
        BOTÓN DE ACCIONES

        Solamente ícono.
        =====================================================
      */

      .promotions-table-row
        .actions
        button {
        width: 32px;

        min-width: 32px;

        height: 32px;

        padding: 6px;

        display: inline-flex;

        align-items: center;

        justify-content: center;

        gap: 0;

        flex-shrink: 0;
      }

      .promotions-table-row
        .actions
        button
        svg {
        width: 15px;

        height: 15px;

        flex-shrink: 0;
      }
    }

    /*
      =======================================================
      CELULAR
      =======================================================
    */

    @media (max-width: 600px) {
      /*
        =====================================================
        CABECERA
        =====================================================
      */

      .table-header {
        grid-template-columns:
          minmax(0, 1fr)
          55px
          80px;

        gap: 6px;

        padding: 9px 8px;
      }

      /*
        Los headers 1 y 3 siguen ocultos.
        Se vuelven a declarar para que quede explícito
        dentro del breakpoint.
      */

      .table-header-1,
      .table-header-3 {
        display: none;
      }

      /*
        =====================================================
        FILAS
        =====================================================
      */

      .promotions-table-row {
        grid-template-columns:
          minmax(0, 1fr)
          55px
          80px;

        gap: 6px;

        padding: 10px 8px;
      }

      /*
        =====================================================
        TEXTO DEL HEADER
        =====================================================
      */

      .table-header h4 {
        font-size: 9px;
      }

      /*
        =====================================================
        TEXTO DE LAS FILAS
        =====================================================
      */

      .promotions-table-row {
        font-size: 11px;
      }

      /*
        =====================================================
        ACCIONES
        =====================================================
      */

      .promotions-table-row
        .actions {
        gap: 4px;
      }

      .promotions-table-row
        .actions
        button {
        width: 30px;

        min-width: 30px;

        height: 30px;

        padding: 6px;
      }

      .promotions-table-row
        .actions
        button
        svg {
        width: 14px;

        height: 14px;
      }
    }

    /*
      =======================================================
      CELULAR PEQUEÑO
      =======================================================
    */

    @media (max-width: 400px) {
      /*
        =====================================================
        CABECERA
        =====================================================
      */

      .table-header {
        grid-template-columns:
          minmax(0, 1fr)
          48px
          72px;

        gap: 4px;

        padding: 8px 6px;
      }

      .table-header-1,
      .table-header-3 {
        display: none;
      }

      /*
        =====================================================
        FILAS
        =====================================================
      */

      .promotions-table-row {
        grid-template-columns:
          minmax(0, 1fr)
          48px
          72px;

        gap: 4px;

        padding: 9px 6px;
      }

      /*
        =====================================================
        HEADER
        =====================================================
      */

      .table-header h4 {
        font-size: 8px;
      }

      /*
        =====================================================
        FILAS
        =====================================================
      */

      .promotions-table-row {
        font-size: 10px;
      }

      /*
        =====================================================
        ACCIONES
        =====================================================
      */

      .promotions-table-row
        .actions {
        gap: 3px;
      }

      .promotions-table-row
        .actions
        button {
        width: 28px;

        min-width: 28px;

        height: 28px;

        padding: 5px;
      }

      .promotions-table-row
        .actions
        button
        svg {
        width: 13px;

        height: 13px;
      }
    }
  }

  /*
    =========================================================
    ESPACIADO RESPONSIVE
    =========================================================
  */

  @media (max-width: 850px) {
    gap: 16px;
  }

  @media (max-width: 600px) {
    gap: 14px;
  }

  @media (max-width: 400px) {
    gap: 12px;
  }
`;

// =========================================================
// BOTÓN NUEVA PROMOCIÓN
// =========================================================

export const AddPromotionButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 12px 18px;

  border: none;

  border-radius: 8px;

  background-color: #653007;

  color: white;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: #8a4f27;
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    width: 15px;

    height: 15px;
  }

  @media (max-width: 600px) {
    width: 100%;

    padding: 11px 15px;

    font-size: 13px;
  }

  @media (max-width: 400px) {
    padding: 10px 12px;

    font-size: 12px;
  }
`;

// =========================================================
// FILTROS
// =========================================================

export const Filter = styled.div`
  width: 80%;

  display: flex;

  align-items: center;

  gap: 8px;

  padding: 5px;

  box-sizing: border-box;

  background-color: #eee8df;

  border-radius: 10px;

  button,
  select {
    flex: 1;

    min-width: 0;

    height: 38px;

    border: none;

    border-radius: 7px;

    padding: 0 12px;

    font-size: 13px;

    font-weight: 600;

    cursor: pointer;

    box-sizing: border-box;
  }

  button {
    background-color: transparent;

    color: #6d6258;

    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover {
      color: #734d2c;
    }

    &.active {
      background-color: #c29e70;

      color: white;
    }
  }

  select {
    background-color: white;

    color: #6d6258;

    border: 1px solid #ddd5cb;

    outline: none;

    cursor: pointer;

    &:focus {
      border-color: #c29e70;
    }
  }

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;

    button {
      flex: 1 1 calc(50% - 4px);
    }

    select {
      flex: 1 1 100%;
    }
  }

  @media (max-width: 400px) {
    gap: 5px;

    padding: 4px;

    button,
    select {
      height: 36px;

      padding: 0 8px;

      font-size: 12px;
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

  box-sizing: border-box;

  @media (max-width: 600px) {
    gap: 15px;
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

  box-sizing: border-box;

  h3 {
    margin: 0 0 5px;

    color: #653007;

    font-size: 20px;

    font-weight: 700;
  }

  p {
    margin: 0;

    color: #6d6258;

    font-size: 14px;

    line-height: 1.5;
  }

  > div {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 15px;

    padding: 10px 12px;

    background-color: #f7f3ee;

    border-radius: 7px;

    span {
      color: #6d6258;

      font-size: 13px;
    }

    strong {
      color: #653007;

      font-size: 14px;

      text-align: right;
    }
  }

  > strong {
    color: #653007;

    font-size: 15px;
  }

  @media (max-width: 500px) {
    gap: 8px;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }

    > div {
      padding: 9px 10px;

      span,
      strong {
        font-size: 12px;
      }
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

  gap: 10px;

  box-sizing: border-box;

  > div {
    display: flex;

    gap: 8px;

    width: 100%;
  }

  button {
    flex: 1;
  }

  @media (max-width: 500px) {
    > div {
      flex-direction: column;
    }
  }
`;

// =========================================================
// BOTÓN DE ACCIÓN
// =========================================================

export const ActionButton = styled.button`
  min-height: 40px;

  padding: 10px 15px;

  border: none;

  border-radius: 7px;

  background-color: #653007;

  color: white;

  font-size: 13px;

  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: #8a4f27;
  }

  &:active {
    transform: scale(0.98);
  }
`;

// =========================================================
// BOTÓN CANCELAR
// =========================================================

export const CancelButton = styled.button`
  min-height: 40px;

  padding: 10px 15px;

  border: 1px solid #d6cec4;

  border-radius: 7px;

  background-color: #f7f3ee;

  color: #6d6258;

  font-size: 13px;

  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background-color: #eee8df;

    border-color: #c9bfb4;
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`;

// =========================================================
// BOTÓN DE ESTADO
// =========================================================

export const StatusButton = styled.button`
  min-height: 40px;

  padding: 10px 15px;

  border: none;

  border-radius: 7px;

  font-size: 13px;

  font-weight: 600;

  color: white;

  cursor: pointer;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  &.active {
    background-color: green;
  }

  &.inactive {
    background-color: red;
  }

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;

    transform: none;
  }
`;