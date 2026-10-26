import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const root = document.getElementById("root");
const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
if (root.hasChildNodes() && root.dataset.route === currentPath)
  hydrateRoot(root, app);
else createRoot(root).render(app);
