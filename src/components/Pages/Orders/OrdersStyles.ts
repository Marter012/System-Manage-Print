import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ContainerPage } from "../PageStyles.ts";

/* =========================================================
   CONTENEDOR PRINCIPAL DE COMANDAS
========================================================= */

export const ContainerOrder = styled.div`
  width: 100%;
  max-width: 1600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;

  box-sizing: border-box;

  /*
   * No usamos height: 90%.
   * El contenido interno controla su propio tamaño.
   */
  min-height: 0;

  @media (max-width: 1000px) {
    margin-top: 15px;
  }

  @media (max-width: 700px) {
    margin-top: 10px;
  }
`;

/* =========================================================
   CAJA VACÍA
========================================================= */

export const EmptyCashContainer = styled(ContainerPage)`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 420px;

  padding: 40px;

  box-sizing: border-box;

  @media (max-width: 700px) {
    min-height: 350px;
    padding: 25px 15px;
  }

  @media (max-width: 400px) {
    min-height: 300px;
    padding: 20px 10px;
  }
`;

/* =========================================================
   MENSAJE DE CAJA
========================================================= */

export const CashMessage = styled.div`
  width: min(560px, 100%);

  padding: 42px 48px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  box-sizing: border-box;

  background: #ffffff;

  border: 1px solid #e4ddd7;
  border-radius: 18px;

  box-shadow: 0 8px 24px rgba(101, 48, 7, 0.07);

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: rgba(194, 158, 112, 0.7);

    box-shadow: 0 10px 28px rgba(101, 48, 7, 0.1);

    transform: translateY(-2px);
  }

  svg {
    width: 58px;
    height: 58px;

    padding: 15px;

    margin-bottom: 22px;

    box-sizing: border-box;

    color: #653007;

    background: rgba(194, 158, 112, 0.16);

    border-radius: 50%;
  }

  h2 {
    margin: 0 0 10px;

    color: #653007;

    font-size: 22px;
    font-weight: 700;

    line-height: 1.3;
  }

  p {
    max-width: 420px;

    margin: 0 0 8px;

    color: #5f5751;

    font-size: 15px;
    font-weight: 500;

    line-height: 1.5;
  }

  span {
    color: #8a7c70;

    font-size: 13px;

    line-height: 1.5;
  }

  @media (max-width: 600px) {
    padding: 30px 25px;

    border-radius: 14px;

    svg {
      width: 50px;
      height: 50px;

      padding: 13px;

      margin-bottom: 18px;
    }

    h2 {
      font-size: 19px;
    }

    p {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }
  }

  @media (max-width: 400px) {
    padding: 25px 18px;

    svg {
      width: 45px;
      height: 45px;

      padding: 11px;
    }

    h2 {
      font-size: 17px;
    }

    p {
      font-size: 13px;
    }
  }
`;

/* =========================================================
   LINK DEL MENSAJE
========================================================= */

export const CashMessageLink = styled(NavLink)`
  width: min(560px, 100%);

  display: flex;
  justify-content: center;

  color: inherit;

  text-decoration: none;

  &:focus-visible {
    outline: 3px solid rgba(194, 158, 112, 0.45);

    outline-offset: 5px;

    border-radius: 20px;
  }
`;