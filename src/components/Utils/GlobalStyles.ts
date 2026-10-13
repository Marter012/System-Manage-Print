import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
body,
#root {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
  
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.45;
    color: #26231f;
  }

  button, input, select, textarea { font: inherit; }
  button { cursor: pointer; }
  button:disabled { cursor: not-allowed; }

  @media (max-width: 640px) {
    html, body, #root { min-width: 320px; }
    table { display: block; max-width: 100%; overflow-x: auto; }
  }
`;
