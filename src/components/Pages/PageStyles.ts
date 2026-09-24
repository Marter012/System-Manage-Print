import styled from "styled-components";

export const ContainerPage = styled.main`
  width: 100%;
  height: calc(100dvh - 70px);
  margin: 70px 0 0;
  padding: 25px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  overflow-x: hidden;
  overflow-y: auto;

  scrollbar-width: none;

  /* =========================
     HOME
  ========================= */

  &.home-page {
    overflow-y: hidden;
    justify-content: flex-start;

    gap: 16px;

    padding: 20px 25px;
  }

  &.home-page > section {
    flex-shrink: 1;
  }

  @media (max-width: 850px) {
    gap: 18px;
    padding: 20px;

    &.home-page {
      gap: 14px;
      padding: 18px 20px;
    }
  }

  @media (max-width: 600px) {
    gap: 15px;
    padding: 15px 12px;

    &.home-page {
      overflow-y: auto;
      gap: 12px;
      padding: 15px 12px;
    }
  }

  @media (max-width: 400px) {
    gap: 12px;
    padding: 12px 8px;

    &.home-page {
      gap: 10px;
      padding: 12px 8px;
    }
  }
`;