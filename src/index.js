import React from "react";
import ReactDOM from "react-dom/client";
import { FilterProvider } from "./contexts/filter-context";
import { App } from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>
);
