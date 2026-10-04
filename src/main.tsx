import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Layout from "./components/Layout/Layout.tsx";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./components/Utils/GlobalStyles.ts";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout />
        <GlobalStyles />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);