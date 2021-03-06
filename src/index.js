import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { FontProvider } from "./contexts/FontContext";
import { ColorProvider } from "./contexts/ColorContext";

ReactDOM.render(
  <React.StrictMode>
    <FontProvider>
      <ColorProvider>
        <App />
      </ColorProvider>
    </FontProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
