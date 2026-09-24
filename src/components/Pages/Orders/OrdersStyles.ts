import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerOrder = styled.div`
  width: 100%;
  max-width: 1600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;

  box-sizing: border-box;

  min-height: 0;
  height: 77%;

  @media (max-width: 1000px) {
    margin-top: 15px;
  }

  @media (max-width: 700px) {
    margin-top: 10px;
  }
`;

/* =========================================================
   CONTENEDOR CUANDO NO HAY CAJA
========================================================= */

export const EmptyCashContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  box-sizing: border-box;

  padding: 30px 20px 20px;

  @media (max-width: 700px) {
    padding: 20px 12px;
  }

  @media (max-width: 400px) {
    padding: 15px 8px;
  }
`;

/* =========================================================
   MENSAJE DE CAJA
========================================================= */

export const CashMessage = styled.div`
  width: min(560px, 100%);

  padding: 35px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  text-align: center;

  background: #ffffff;

  border: 1px solid #e4ddd7;
  border-radius: 16px;

  box-shadow: 0 6px 20px rgba(101, 48, 7, 0.06);

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: rgba(194, 158, 112, 0.7);

    box-shadow: 0 8px 24px rgba(101, 48, 7, 0.09);

    transform: translateY(-1px);
  }

  svg {
    width: 52px;
    height: 52px;

    padding: 13px;

    margin-bottom: 18px;

    box-sizing: border-box;

    color: #653007;

    background: rgba(194, 158, 112, 0.16);

    border-radius: 50%;
  }

  h2 {
    margin: 0 0 9px;

    color: #653007;

    font-size: 21px;
    font-weight: 700;

    line-height: 1.3;
  }

  p {
    max-width: 420px;

    margin: 0 0 7px;

    color: #5f5751;

    font-size: 14px;
    font-weight: 500;

    line-height: 1.5;

    strong {
      color: #653007;
    }
  }

  span {
    color: #8a7c70;

    font-size: 12.5px;

    line-height: 1.5;
  }

  @media (max-width: 600px) {
    padding: 28px 22px;

    border-radius: 14px;

    svg {
      width: 48px;
      height: 48px;

      padding: 12px;

      margin-bottom: 16px;
    }

    h2 {
      font-size: 19px;
    }

    p {
      font-size: 13.5px;
    }

    span {
      font-size: 12px;
    }
  }

  @media (max-width: 400px) {
    padding: 24px 17px;

    svg {
      width: 44px;
      height: 44px;

      padding: 11px;
    }

    h2 {
      font-size: 17px;
    }

    p {
      font-size: 13px;
    }

    span {
      font-size: 11.5px;
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

    border-radius: 18px;
  }
`;