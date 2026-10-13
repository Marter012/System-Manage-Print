import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0, 0, 0, 0.6);

  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: min(600px, 100%);
  max-height: 90vh;

  display: flex;
  flex-direction: column;

  background-color: #f4e9d8;

  border-radius: 14px;

  overflow: hidden;

  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  min-height: 65px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  background-color: #653007;

  color: #f4e9d8;

  h3 {
    margin: 0;

    font-size: 1.3rem;
  }
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;

  background: transparent;

  color: #f4e9d8;

  cursor: pointer;

  transition: 0.2s;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export const ModalContent = styled.div`
  padding: 25px;

  overflow-y: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;