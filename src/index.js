import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import GlobalStyle from "./Assets/CSS/GlobalStyle.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
