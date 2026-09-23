import styled from "styled-components";

export const PageHeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  box-sizing: border-box;

  @media (max-width: 1000px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    gap: 15px;
  }
`;

export const TitleContainer = styled.div`
  min-width: 50%;
  height: 60px;

  padding-left: 150px;

  box-sizing: border-box;

  h2 {
    margin: 0;

    font-size: 1.8rem;
    line-height: 1.2;
  }

  p {
    margin: 5px 0 0;

    opacity: 0.6;

    line-height: 1.4;
  }

  @media (max-width: 1100px) {
    padding-left: 80px;
  }

  @media (max-width: 900px) {
    padding-left: 30px;

    h2 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;

    height: auto;

    padding-left: 0;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 1.35rem;
    }

    p {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const Actions = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 10px;

  min-width: 50%;
  height: 100%;

  padding: 5px;

  box-sizing: border-box;

  background: #eee8df;

  border-radius: 10px;

  button {
    width: 45%;
  }

  @media (max-width: 1000px) {
    min-width: 45%;

    gap: 8px;

    button {
      width: 48%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;

    height: auto;

    flex-wrap: wrap;

    button {
      flex: 1;
      width: auto;
      min-width: 0;
    }
  }

  @media (max-width: 500px) {
    gap: 6px;

    button {
      padding: 9px 10px;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 400px) {
    button {
      padding: 8px 7px;
      font-size: 0.8rem;
    }
  }
`;

export const Tab = styled.button`
  width: 45%;

  border: none;

  padding: 10px 20px;

  border-radius: 7px;

  background: transparent;

  color: #6d6258;

  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    color: #734d2c;
  }

  &.active {
    background: #c29e70;
    color: white;
  }

  @media (max-width: 768px) {
    width: auto;
    flex: 1;
  }
`;