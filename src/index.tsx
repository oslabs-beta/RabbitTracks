import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/stylesheets/global.scss";

// The index.tsx file designates the root from the HTML skeleton and renders the application, utilizing BrowserRouter from
//  the React Router library
const root = ReactDOM.createRoot(document.getElementById("root"));
if (!root) throw new Error('Failed to find the root element');

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
