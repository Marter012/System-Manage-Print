import styled from "styled-components";


export const Welcome = styled.section`
  width: 85%;

  padding: 30px;

  box-sizing: border-box;

  border-radius: 12px;

  background-color: rgb(115, 77, 44, 0.7);

  color: #f4e9d8;

  h1 {
    margin: 0 0 10px;

    font-size: 2rem;

    line-height: 1.2;
  }

  p {
    margin: 0;

    font-size: 1rem;

    line-height: 1.5;

    opacity: 0.8;
  }

  /* =========================
     TABLET
  ========================= */

  @media (max-width: 850px) {
    width: 90%;

    padding: 25px;

    h1 {
      font-size: 1.7rem;
    }
  }

  /* =========================
     CELULAR
  ========================= */

  @media (max-width: 600px) {
    width: calc(100% - 24px);

    padding: 20px;

    border-radius: 10px;

    h1 {
      margin-bottom: 8px;

      font-size: 1.45rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  /* =========================
     CELULAR CHICO
  ========================= */

  @media (max-width: 400px) {
    width: calc(100% - 16px);

    padding: 17px;

    h1 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

export const Tutorial = styled.section`
  width: 85%;

  h2 {
    margin: 0;

    font-size: 1.5rem;
  }

  .description {
    margin: 6px 0 20px;

    opacity: 0.65;
  }

  .cards {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 15px;
  }

  /* =========================
     NOTEBOOK / TABLET
  ========================= */

  @media (max-width: 1200px) {
    width: 90%;

    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* =========================
     TABLET
  ========================= */

  @media (max-width: 850px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);

      gap: 12px;
    }

    h2 {
      font-size: 1.35rem;
    }

    .description {
      margin-bottom: 16px;
    }
  }

  /* =========================
     CELULAR
  ========================= */

  @media (max-width: 600px) {
    width: calc(100% - 24px);

    .cards {
      grid-template-columns: 1fr;

      gap: 12px;
    }

    h2 {
      font-size: 1.25rem;
    }

    .description {
      margin: 5px 0 15px;

      font-size: 0.9rem;
    }
  }

  /* =========================
     CELULAR CHICO
  ========================= */

  @media (max-width: 400px) {
    width: calc(100% - 16px);

    h2 {
      font-size: 1.15rem;
    }

    .description {
      font-size: 0.85rem;
    }
  }
`;

export const TutorialCard = styled.article`
  position: relative;

  min-height: 190px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 10px;

  padding: 22px;

  box-sizing: border-box;

  background-color: rgb(115, 77, 44, 0.7);

  border-radius: 10px;

  color: #f4e9d8;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  > svg {
    width: 28px;
    height: 28px;

    flex-shrink: 0;

    color: #c29e70;
  }

  h3 {
    margin: 0;

    font-size: 1.05rem;

    line-height: 1.3;
  }

  p {
    margin: 0;

    font-size: 0.85rem;

    line-height: 1.5;

    opacity: 0.7;
  }

  /* =========================
     TABLET
  ========================= */

  @media (max-width: 850px) {
    min-height: 175px;

    padding: 20px;

    gap: 9px;
  }

  /* =========================
     CELULAR
  ========================= */

  @media (max-width: 600px) {
    min-height: auto;

    padding: 18px;

    gap: 8px;

    > svg {
      width: 25px;
      height: 25px;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 400px) {
    padding: 16px;

    h3 {
      font-size: 0.95rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const StepNumber = styled.span`
  position: absolute;

  top: 15px;
  right: 15px;

  width: 27px;
  height: 27px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: #c29e70;

  color: #653007;

  font-size: 0.8rem;
  font-weight: 700;

  @media (max-width: 600px) {
    top: 12px;
    right: 12px;

    width: 25px;
    height: 25px;

    font-size: 0.75rem;
  }
`;

export const Workflow = styled.section`
  width: 85%;

  padding: 25px;

  box-sizing: border-box;

  background-color: rgba(194, 158, 112, 0.2);

  border-radius: 10px;

  h2 {
    margin: 0 0 20px;

    font-size: 1.3rem;
  }

  .flow {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 20px;
  }

  /* =========================
     TABLET
  ========================= */

  @media (max-width: 850px) {
    width: 90%;

    padding: 22px;

    .flow {
      gap: 12px;
    }
  }

  /* =========================
     CELULAR
  ========================= */

  @media (max-width: 600px) {
    width: calc(100% - 24px);

    padding: 18px;

    h2 {
      margin-bottom: 16px;

      font-size: 1.15rem;
    }

    .flow {
      flex-direction: column;

      gap: 10px;
    }
  }

  @media (max-width: 400px) {
    width: calc(100% - 16px);

    padding: 16px;

    h2 {
      font-size: 1.05rem;
    }
  }
`;

export const WorkflowStep = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;

  font-weight: 600;

  text-align: center;

  svg {
    flex-shrink: 0;

    color: #734d2c;
  }

  @media (max-width: 600px) {
    gap: 7px;

    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    font-size: 0.85rem;
  }
`;

export const WorkflowArrow = styled.span`
  display: flex;
  align-items: center;

  opacity: 0.5;

  @media (max-width: 600px) {
    transform: rotate(90deg);
  }
`;

export const Tip = styled.div`
  width: 85%;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 15px 20px;

  box-sizing: border-box;

  border-left: 4px solid #c29e70;

  border-radius: 6px;

  background-color: rgba(194, 158, 112, 0.15);

  strong {
    color: #734d2c;
  }

  span {
    font-size: 0.9rem;

    opacity: 0.75;

    line-height: 1.4;
  }

  /* =========================
     TABLET
  ========================= */

  @media (max-width: 850px) {
    width: 90%;

    padding: 14px 18px;
  }

  /* =========================
     CELULAR
  ========================= */

  @media (max-width: 600px) {
    width: calc(100% - 24px);

    align-items: flex-start;

    gap: 8px;

    padding: 13px 15px;

    span {
      font-size: 0.82rem;
    }
  }

  @media (max-width: 400px) {
    width: calc(100% - 16px);

    padding: 12px;

    span {
      font-size: 0.78rem;
    }
  }
`;
