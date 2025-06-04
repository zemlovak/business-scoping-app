import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/index.css";
import "./assets/fonts/72BrandVariable-Th-Blk.woff";
import "./reset.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
