import { Form } from "formik";
import styled from "styled-components";

/* =========================================================
   FORMULARIO PRINCIPAL
========================================================= */

export const OrderForm = styled(Form)`
  width: 100%;

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

  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  padding: 0 20px 20px;

  /*
   * En desktop dejamos que el grid tenga una altura razonable.
   */
  @media (min-width: 1001px) {
    height: min(720px, calc(100vh - 220px));
  }

  @media (max-width: 1000px) {
    padding: 0 15px 15px;
  }

  @media (max-width: 700px) {
    padding: 0 10px 15px;

    /*
     * En móvil dejamos que el contenido crezca.
     */
    height: auto;
  }

  @media (max-width: 400px) {
    padding: 0 8px 12px;
  }
`;

/* =========================================================
   GRID PRINCIPAL
========================================================= */

export const MainOrder = styled.div`
  width: 100%;

  min-width: 0;
  min-height: 0;

  display: grid;

  grid-template-columns:
    minmax(0, 1.65fr)
    minmax(320px, 1fr);

  gap: 18px;

  box-sizing: border-box;

  /*
   * Importantísimo:
   * los hijos pueden reducirse dentro del grid.
   */
  > * {
    min-width: 0;
    min-height: 0;
  }

  @media (max-width: 1100px) {
    grid-template-columns:
      minmax(0, 1.45fr)
      minmax(290px, 1fr);

    gap: 15px;
  }

  @media (max-width: 850px) {
    grid-template-columns:
      minmax(0, 1.2fr)
      minmax(270px, 1fr);

    gap: 12px;
  }

  /*
   * =======================================================
   * CELULAR
   * =======================================================
   */

  @media (max-width: 700px) {
    grid-template-columns: 1fr;

    /*
     * Cada panel tiene una altura controlada.
     * Así ninguno intenta ocupar toda la pantalla.
     */
    grid-template-rows: 430px 500px;

    gap: 12px;

    /*
     * El grid completo puede desplazarse.
     */
    overflow-y: auto;
    overflow-x: hidden;

    padding-bottom: 5px;

    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 500px) {
    grid-template-rows: 400px 470px;

    gap: 10px;
  }

  @media (max-width: 400px) {
    grid-template-rows: 380px 450px;

    gap: 10px;
  }
`;