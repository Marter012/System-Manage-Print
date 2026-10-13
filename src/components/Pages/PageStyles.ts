import styled from "styled-components";

export const ContainerPage = styled.main`
  width: 100%;
  height: 90dvh;
  margin: 11dvh 0 0;
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  &.home-page {
    height: calc(100dvh - 11dvh);
    margin-top: 11dvh;
    min-height: 0;
    padding: clamp(14px, 2.4vh, 26px) clamp(18px, 3vw, 48px);
    gap: clamp(10px, 1.8vh, 20px);
    justify-content: space-between;
    overflow: hidden;
  }

  &.home-page > * {
    flex: 0 0 auto;
  }

  &.products-page {
    height: calc(100dvh - 11dvh);
    margin-top: 11dvh;
    padding: clamp(12px, 2vh, 22px) clamp(14px, 3vw, 42px);
    gap: clamp(10px, 1.6vh, 16px);
    justify-content: flex-start;
    overflow: hidden;
  }

  &.products-page > header {
    flex-shrink: 0;
  }

  &.products-page > div {
    width: 100%;
    flex: 1 1 auto;
    min-height: 0;
  }

  @media (max-width: 850px) {
    gap: 18px;
    padding: 20px;

    &.home-page {
      padding: 14px 24px;
      gap: 12px;
    }

    &.products-page {
      padding: 12px 22px;
      gap: 10px;
    }
  }

  @media (max-width: 600px) {
    gap: 15px;
    padding: 15px 12px;

    &.home-page {
      height: calc(100dvh - 11dvh);
      margin-top: 11dvh;
      padding: 12px 16px;
      gap: 10px;
    }

    &.products-page {
      padding: 10px 14px;
      gap: 9px;
    }
  }

  @media (max-width: 400px) {
    gap: 12px;
    padding: 12px 8px;

    &.home-page {
      padding: 10px 10px;
      gap: 9px;
    }

    &.products-page {
      padding: 8px 10px;
      gap: 8px;
    }
  }
`;
