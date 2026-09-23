import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-color: #f0dcbc;

  display: flex;
  justify-content: center;
  align-items: center;

  display: flex;
  flex-direction: column;

  position: relative;
  > :nth-child(1) {
    height: 10%;
  }
  > :nth-child(2) {
    height: 90%;
  }
`;
