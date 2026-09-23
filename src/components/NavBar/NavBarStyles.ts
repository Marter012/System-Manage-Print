import styled from "styled-components";

export const NavBarContainer = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  padding: 0 30px;

  box-sizing: border-box;

  background-color: #653007;

  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);

  /* =========================
     DESKTOP GRANDE
  ========================= */

  @media (max-width: 1200px) {
    gap: 15px;

    padding: 0 25px;
  }

  /* =========================
     DESKTOP / NOTEBOOK
  ========================= */

  @media (max-width: 1000px) {
    gap: 10px;

    padding: 0 20px;
  }

  /* =========================
     TABLET
  ========================= */

  @media (max-width: 850px) {
    gap: 8px;

    padding: 0 15px;
  }

  /* =========================
     CELULAR
  ========================= */

  @media (max-width: 700px) {
    flex-wrap: wrap;

    justify-content: space-between;

    gap: 0;

    padding: 8px 12px;
  }

  /* =========================
     CELULAR
  ========================= */

  @media (max-width: 600px) {
    padding: 7px 10px;

    row-gap: 5px;
  }

  /* =========================
     CELULAR CHICO
  ========================= */

  @media (max-width: 400px) {
    padding: 6px 8px;

    row-gap: 4px;
  }
`;