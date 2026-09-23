import styled from "styled-components";

export const ContainerPage = styled.div`
  width: 100%;
  min-height: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 22px;

  padding: 25px;

  box-sizing: border-box;

  overflow-y: auto;
  overflow-x: hidden;

  /* =========================
     TABLET
  ========================= */

  @media (max-width: 850px) {
    gap: 18px;

    padding: 20px;
  }

  /* =========================
     CELULAR
  ========================= */

  @media (max-width: 600px) {
    gap: 15px;

    padding: 15px 12px;
  }

  /* =========================
     CELULAR CHICO
  ========================= */

  @media (max-width: 400px) {
    gap: 12px;

    padding: 12px 8px;
  }
`;