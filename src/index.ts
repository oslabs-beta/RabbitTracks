import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import styles from "./assets/stylesheets/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (!root) throw new Error('Failed to find the root element');

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
