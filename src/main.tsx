import GlobalStyled from "./styles/global";
import ReactDOM from "react-dom/client";
import { Providers } from "./contexts";
import { App } from "./App";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <GlobalStyled />
      <App />
    </Providers>
  </React.StrictMode>
);
