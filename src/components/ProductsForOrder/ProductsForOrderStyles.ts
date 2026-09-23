import styled from "styled-components";

/* =========================================================
   SECCIÓN DE PRODUCTOS
========================================================= */

export const ProductsSection = styled.section`
  width: 100%;

  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;

  gap: 12px;

  padding: 16px;

  box-sizing: border-box;

  background-color: rgba(115, 77, 44, 0.7);

  border-radius: 10px;

  overflow: hidden;

  /*
   * Esto evita que el contenido interno
   * empuje el componente hacia afuera.
   */
  > * {
    min-width: 0;
  }

  @media (max-width: 850px) {
    padding: 14px;

    gap: 10px;
  }

  @media (max-width: 700px) {
    padding: 12px;

    gap: 9px;

    border-radius: 9px;
  }

  @media (max-width: 400px) {
    padding: 10px;

    gap: 8px;
  }
`;

/* =========================================================
   HEADER
========================================================= */

export const ProductsHeader = styled.div`
  width: 100%;

  min-width: 0;

  flex-shrink: 0;

  display: flex;
  align-items: center;

  gap: 12px;

  h3 {
    margin: 0;

    color: #ffffff;

    font-size: 1.05rem;

    line-height: 1.2;

    white-space: nowrap;
  }

  @media (max-width: 700px) {
    gap: 8px;

    h3 {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;

    h3 {
      width: 100%;
    }
  }
`;

/* =========================================================
   BUSCADOR
========================================================= */

export const SearchInput = styled.input`
  width: 250px;

  max-width: 100%;

  height: 38px;

  padding: 0 12px;

  box-sizing: border-box;

  border: none;

  border-radius: 7px;

  outline: none;

  flex-shrink: 1;

  background-color: #ffffff;

  color: #222222;

  font-size: 0.85rem;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(194, 158, 112, 0.55);
  }

  @media (max-width: 700px) {
    width: 210px;

    height: 36px;

    font-size: 0.8rem;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

/* =========================================================
   CATEGORÍAS
========================================================= */

export const Categories = styled.div`
  width: 100%;

  flex-shrink: 0;

  display: flex;

  gap: 10px;

  overflow-x: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* =========================================================
   SELECT DE CATEGORÍA
========================================================= */

export const CategorySelect = styled.select`
  width: 210px;

  max-width: 100%;

  height: 38px;

  padding: 0 38px 0 12px;

  box-sizing: border-box;

  flex-shrink: 0;

  border: 1px solid rgba(194, 158, 112, 0.45);

  border-radius: 8px;

  background-color: #f8f4ee;

  color: #3b3027;

  font-size: 0.85rem;

  font-weight: 600;

  outline: none;

  cursor: pointer;

  appearance: none;

  background-image:
    linear-gradient(
      45deg,
      transparent 50%,
      #8d6b49 50%
    ),
    linear-gradient(
      135deg,
      #8d6b49 50%,
      transparent 50%
    );

  background-position:
    calc(100% - 15px) 16px,
    calc(100% - 10px) 16px;

  background-size:
    5px 5px,
    5px 5px;

  background-repeat: no-repeat;

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: #c29e70;

    background-color: #fffaf4;
  }

  &:focus {
    border-color: #c29e70;

    box-shadow:
      0 0 0 3px
      rgba(194, 158, 112, 0.18);
  }

  option {
    background-color: #f8f4ee;

    color: #3b3027;

    font-size: 0.85rem;
  }

  @media (max-width: 700px) {
    width: 180px;

    height: 36px;

    font-size: 0.8rem;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

/* =========================================================
   LISTA DE PRODUCTOS
========================================================= */

export const ProductGrid = styled.div`
  width: 100%;

  flex: 1;

  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;

  gap: 8px;

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
`;

/* =========================================================
   TARJETA DE PRODUCTO
========================================================= */

export const ProductCard = styled.div`
  width: 100%;

  min-width: 0;

  min-height: 62px;

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 10px;

  padding: 9px 11px;

  box-sizing: border-box;

  background-color: aliceblue;

  border-radius: 8px;

  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);

    box-shadow:
      0 3px 8px
      rgba(0, 0, 0, 0.1);
  }

  /*
   * =======================================================
   * INFORMACIÓN
   * =======================================================
   */

  .product-info {
    flex: 1;

    min-width: 0;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 12px;
  }

  .product-name {
    min-width: 0;

    flex: 1;

    h4 {
      margin: 0 0 2px;

      color: #333333;

      font-size: 0.88rem;

      font-weight: 600;

      line-height: 1.25;

      overflow: hidden;

      text-overflow: ellipsis;

      white-space: nowrap;
    }

    small {
      display: block;

      color: #777777;

      font-size: 0.72rem;

      line-height: 1.2;

      overflow: hidden;

      text-overflow: ellipsis;

      white-space: nowrap;
    }
  }

  .product-price {
    flex-shrink: 0;

    color: #653007;

    font-size: 0.85rem;

    font-weight: 700;

    white-space: nowrap;
  }

  /*
   * =======================================================
   * BOTÓN AGREGAR
   * =======================================================
   */

  > button {
    flex-shrink: 0;

    min-width: 105px;

    padding: 8px 12px;

    border: none;

    border-radius: 6px;

    background-color: #c29e70;

    color: #191919;

    cursor: pointer;

    font-size: 0.78rem;

    font-weight: 700;

    white-space: nowrap;

    transition:
      background-color 0.2s ease,
      transform 0.15s ease;

    &:hover {
      background-color: #b38d5f;
    }

    &:active {
      transform: scale(0.96);
    }

    &:disabled {
      background-color: #b5b5b5;

      color: #777777;

      cursor: not-allowed;

      opacity: 0.7;
    }
  }

  @media (max-width: 700px) {
    min-height: 58px;

    padding: 8px 9px;

    gap: 7px;

    .product-info {
      gap: 8px;
    }

    .product-name {
      h4 {
        font-size: 0.82rem;
      }

      small {
        font-size: 0.67rem;
      }
    }

    .product-price {
      font-size: 0.78rem;
    }

    > button {
      min-width: 92px;

      padding: 7px 8px;

      font-size: 0.7rem;
    }
  }

  @media (max-width: 500px) {
    min-height: 56px;

    .product-info {
      flex-direction: column;

      align-items: flex-start;

      justify-content: center;

      gap: 2px;
    }

    .product-price {
      font-size: 0.75rem;
    }

    > button {
      min-width: 85px;

      padding: 7px 6px;

      font-size: 0.67rem;
    }
  }

  @media (max-width: 400px) {
    min-height: 53px;

    padding: 7px 8px;

    .product-name h4 {
      font-size: 0.78rem;
    }

    .product-name small {
      font-size: 0.63rem;
    }

    .product-price {
      font-size: 0.72rem;
    }

    > button {
      min-width: 78px;

      font-size: 0.62rem;
    }
  }
`;

/* =========================================================
   MODAL
========================================================= */

export const ModalOverlay = styled.div`
  position: fixed;

  inset: 0;

  z-index: 9999;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 15px;

  box-sizing: border-box;

  background: rgba(0, 0, 0, 0.55);

  overflow-y: auto;
`;

/* =========================================================
   MODAL PROMOCIÓN
========================================================= */

export const PromotionModal = styled.div`
  width: min(450px, 100%);

  max-height: calc(100vh - 30px);

  overflow-y: auto;

  padding: 24px;

  box-sizing: border-box;

  background: aliceblue;

  border-radius: 14px;

  box-shadow:
    0 10px 35px
    rgba(0, 0, 0, 0.3);

  text-align: center;

  h3 {
    margin: 0 0 10px;

    color: #333333;

    font-size: 1.15rem;

    line-height: 1.3;
  }

  p {
    margin: 0 0 18px;

    color: #555555;

    font-size: 0.85rem;

    line-height: 1.5;
  }

  button {
    width: 100%;

    min-height: 40px;

    padding: 10px 16px;

    border: none;

    border-radius: 7px;

    background-color: #c29e70;

    color: #191919;

    cursor: pointer;

    font-weight: 600;

    transition:
      background-color 0.2s ease,
      transform 0.15s ease;

    &:hover {
      background-color: #b38d5f;
    }

    &:active {
      transform: scale(0.97);
    }
  }

  @media (max-width: 500px) {
    padding: 20px;

    h3 {
      font-size: 1.05rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 400px) {
    padding: 17px;

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.78rem;
    }
  }
`;