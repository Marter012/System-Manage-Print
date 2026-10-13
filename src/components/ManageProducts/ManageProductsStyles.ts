import styled from "styled-components";

// =========================================================
// CONTENEDOR PRINCIPAL
// =========================================================

export const ContainerManageProducts = styled.div`
  width: 100%;
  height: auto;
  min-height: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

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

  .buttonstock {
    background-color: #653007;
    color: white;
  }

  /*
    =========================================================
    TABLA DE PRODUCTOS
    =========================================================
  */

  .products-table {
    width: 100%;
    /*
      Altura fija de la tabla.

      Las filas van a hacer scroll internamente,
      evitando que la tabla crezca indefinidamente.
    */
    height: auto;
    max-height: none;
    min-height: 0;
    flex: 1 1 auto;
    /*
      =======================================================
      TABLET / DISPOSITIVOS PEQUEÑOS
      Nombre | Stock | Acciones
      =======================================================
    */

    @media (max-width: 900px) {
      
      .table-header {
        grid-template-columns:
          minmax(0, 1fr)
          80px
          120px;

        gap: 10px;
      }

      /*
        Ocultar Precio y Categoría
      */

      .table-header-2,
      .table-header-3 {
        display: none;
      }

      /*
        FILAS
      */

      .products-table-row {
        text-align: start;
        grid-template-columns:
          minmax(0, 1fr)
          80px
          120px;

        gap: 10px;
      }

      /*
        Ocultar Precio y Categoría
      */

      .products-table-row .price,
      .products-table-row .category {
        display: none;
      }

      /*
        ALINEACIÓN
      */

      .products-table-row .stock {
        text-align: center;
      }

      .products-table-row .actions {
        justify-content: center;
      }

      /*
        =====================================================
        ACCIONES: SOLO ICONOS
        =====================================================
      */

      .products-table-row .actions .button-text,
      .products-table-row .actions .status-text {
        display: none;
      }

      .products-table-row .actions button {
        width: 32px;
        min-width: 32px;
        height: 32px;

        padding: 6px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        gap: 0;
      }

      .products-table-row .actions button svg {
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
      .table-header {
        grid-template-columns:
          minmax(0, 1fr)
          55px
          80px;

        gap: 6px;

        padding: 9px 8px;
      }

      .products-table-row {
        grid-template-columns:
          minmax(0, 1fr)
          55px
          80px;

        gap: 6px;

        padding: 10px 8px;
      }

      .table-header h4 {
        font-size: 9px;
      }

      .products-table-row {
        font-size: 11px;
      }

      .products-table-row .actions {
        gap: 4px;
      }

      .products-table-row .actions button {
        width: 30px;
        min-width: 30px;
        height: 30px;

        padding: 6px;
      }

      .products-table-row .actions button svg {
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
      .table-header {
        grid-template-columns:
          minmax(0, 1fr)
          48px
          72px;

        gap: 4px;

        padding: 8px 6px;
      }

      .products-table-row {
        grid-template-columns:
          minmax(0, 1fr)
          48px
          72px;

        gap: 4px;

        padding: 9px 6px;
      }

      .table-header h4 {
        font-size: 8px;
      }

      .products-table-row {
        font-size: 10px;
      }

      .products-table-row .actions {
        gap: 3px;
      }

      .products-table-row .actions button {
        width: 28px;
        min-width: 28px;
        height: 28px;

        padding: 5px;
      }

      .products-table-row .actions button svg {
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
// BOTÓN NUEVO PRODUCTO
// =========================================================

export const AddProductButton = styled.button`
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
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 9px;
  padding: 0;

  box-sizing: border-box;

  select {
    min-width: 0;
    height: 42px;
    box-sizing: border-box;
    border: 1px solid #e4d6c7;
    border-radius: 10px;
    padding: 0 12px;
    background: #fffdfb;
    color: #593719;
    font-family: inherit;
    font-size: 0.86rem;
    font-weight: 600;
  }

  button {
    min-height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 0 15px;
    border: 1px solid #e4d6c7;
    border-radius: 10px;
    background: #fffdfb;
    color: #6d6258;
    font-family: inherit;
    font-size: 0.84rem;
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;
    transition: background 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms ease;

    &:hover { border-color: #c29e70; color: #653007; }
    &:active { transform: scale(0.98); }

    &.active { border-color: #653007; background: #653007; color: #fff; }
    &.bulk-stock { margin-left: auto; border-color: #653007; background: #fff8ec; color: #653007; }
    &.bulk-stock:hover { background: #f6e7d2; }
  }

  select {
    flex: 0 1 210px;
    cursor: pointer;
    outline: none;
    &:focus { border-color: #a97745; box-shadow: 0 0 0 3px #c29e7026; }
  }

  .product-search {
    min-width: 180px;
    min-height: 42px;
    flex: 1 1 260px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 12px;
    border: 1px solid #e4d6c7;
    border-radius: 10px;
    background: #fffdfb;
    color: #a07850;
    box-sizing: border-box;
    transition: border-color 160ms ease, box-shadow 160ms ease;

    &:focus-within { border-color: #a97745; box-shadow: 0 0 0 3px #c29e7026; }
    > svg { flex: 0 0 auto; font-size: 0.9rem; }
    input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; color: #3f2a1d; font-family: inherit; font-size: 0.86rem; font-weight: 500; }
    input::placeholder { color: #a59a91; }
    input::-webkit-search-cancel-button { display: none; }
    button.clear-search { min-width: 28px; width: 28px; height: 28px; min-height: 28px; padding: 0; border: 0; background: transparent; color: #806d5e; }
    button.clear-search:hover { background: #f4eadf; }
  }

  @media (max-width: 600px) {
    gap: 7px;
    > button:not(.bulk-stock) { flex: 1 1 calc(50% - 4px); }
    select { flex: 1 1 calc(42% - 4px); }
    .product-search { flex: 1 1 calc(58% - 4px); min-width: 150px; }
    button.bulk-stock { flex: 1 1 100%; margin-left: 0; }
  }
`;

// =========================================================
// OPCIONES DEL PRODUCTO
// =========================================================

export const ProductOptions = styled.div`
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
// INFORMACIÓN DEL PRODUCTO
// =========================================================

export const ProductInfo = styled.div`
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
// ACCIONES DEL PRODUCTO
// =========================================================

export const ProductActions = styled.div`
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
