import { Form } from "formik";
import styled from "styled-components";

/* =========================================================
   FORMULARIO PRINCIPAL
========================================================= */

export const OrderForm = styled(Form)`
  width: 100%;
  height: 100%;


  max-width: 1600px;

  display: flex;
  flex-direction: column;

  min-width: 0;
  min-height: 0;

  box-sizing: border-box;
`;

/* =========================================================
   CONTENEDOR DE NUEVA COMANDA
========================================================= */

export const ContainerNewOrder = styled.div`
  width: 100%;
  height: 100%;
  
  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  padding: 0 20px 20px;

  /*
   * En desktop dejamos que el grid
   * tenga una altura razonable.
   */
  @media (min-width: 1001px) {
    height: min(
      720px,
      calc(100vh - 220px)
    );
  }

  @media (max-width: 1000px) {
    padding: 0 15px 15px;
  }

  @media (max-width: 700px) {
    padding: 0 10px 15px;

    /*
     * En móvil dejamos que el contenido
     * sea controlado por las secciones.
     */
    height: auto;
  }

  @media (max-width: 400px) {
    padding: 0 8px 12px;
  }
`;

/* =========================================================
   SELECTOR MOBILE
========================================================= */

export const MobileOrderSelector =
  styled.div`
    display: none;

    @media (max-width: 1000px) {
      width: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;

      gap: 5px;

      padding: 5px;

      margin-bottom: 12px;

      box-sizing: border-box;

      background-color: rgba(
        115,
        77,
        44,
        0.15
      );

      border-radius: 10px;
    }

    @media (max-width: 500px) {
      margin-bottom: 10px;
    }

    @media (max-width: 400px) {
      gap: 3px;
      padding: 4px;
    }
  `;

export const MobileOrderButton =
  styled.button<{
    $active: boolean;
  }>`
    width: 100%;

    height: 42px;

    border: none;
    border-radius: 7px;

    background-color: ${({ $active }) =>
      $active
        ? "#c29e70"
        : "transparent"};

    color: #653007;

    font-size: 0.92rem;
    font-weight: ${({ $active }) =>
      $active ? 600 : 500};

    cursor: pointer;

    transition:
      background-color 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background-color: ${({ $active }) =>
        $active
          ? "#c29e70"
          : "rgba(194, 158, 112, 0.5)"};
    }

    &:active {
      transform: scale(0.98);
    }

    @media (max-width: 700px) {
      height: 40px;
      font-size: 0.86rem;
    }

    @media (max-width: 500px) {
      height: 38px;
      font-size: 0.82rem;
    }

    @media (max-width: 400px) {
      height: 36px;
      font-size: 0.76rem;
    }
  `;

/* =========================================================
   GRID PRINCIPAL
========================================================= */

export const MainOrder = styled.div`
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  display: grid;

  grid-template-columns:
    minmax(0, 1.65fr)
    minmax(320px, 1fr);

  gap: 18px;

  box-sizing: border-box;

  /*
   * Importante:
   * los hijos pueden reducirse dentro del grid.
   */
  > * {
    min-width: 0;
    min-height: 0;
  }

  /*
   * En desktop ambos paneles
   * permanecen visibles.
   */
  @media (max-width: 1100px) {
    grid-template-columns:
      minmax(0, 1.45fr)
      minmax(290px, 1fr);

    gap: 15px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;

    /*
     * En tablet/celular solamente
     * mostramos la sección seleccionada.
     */
    grid-template-rows: 1fr;

    gap: 0;

    /*
     * Permitimos que el panel activo
     * ocupe todo el espacio disponible.
     */
    > .mobile-hidden {
      display: none;
    }

    > .mobile-active {
      display: block;

      width: 100%;
      min-width: 0;
      min-height: 0;
    }
  }

  /*
   * =======================================================
   * CELULAR
   * =======================================================
   */

  @media (max-width: 700px) {
    grid-template-columns: 1fr;

    gap: 0;

    /*
     * Ya no necesitamos tener
     * dos filas simultáneamente.
     */
    grid-template-rows: 1fr;

    overflow: visible;

    padding-bottom: 5px;
  }

  @media (max-width: 500px) {
    gap: 0;
  }

  @media (max-width: 400px) {
    gap: 0;
  }
`;