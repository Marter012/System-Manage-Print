import styled from "styled-components";

export const NavBarContainer = styled.header`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
  padding: 0 30px;

  box-sizing: border-box;

  background-color: #653007;

  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 100;

  /* resto de tus estilos... */
`;