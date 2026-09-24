import styled from "styled-components";

export const PageHeaderContainer = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  box-sizing: border-box;

  flex-shrink: 0;

  @media (max-width: 1000px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    gap: 12px;
  }
`;

export const TitleContainer = styled.div`
  flex: 1;
  min-width: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;

  h2 {
    margin: 0;

    font-size: 1.8rem;
    line-height: 1.2;
  }

  p {
    margin: 5px 0 0;

    font-size: 0.95rem;
    line-height: 1.4;

    opacity: 0.6;
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

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
  flex: 0 1 50%;
  min-width: 320px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  padding: 5px;

  box-sizing: border-box;

  background: #eee8df;

  border-radius: 10px;

  button {
    flex: 1;
    min-width: 0;
  }

  @media (max-width: 1000px) {
    min-width: 280px;

    gap: 8px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;

    flex: none;

    flex-wrap: wrap;

    button {
      flex: 1;
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
  flex: 1;

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

  @media (max-width: 500px) {
    padding: 9px 10px;
    font-size: 0.85rem;
  }

  @media (max-width: 400px) {
    padding: 8px 7px;
    font-size: 0.8rem;
  }
`;