import React from "react";
import ReactDOM from "react-dom/client";
import { PlacesContextProvider } from "./Contexts/PlacesContext";
import { LogInContextProvider } from "./Contexts/LogInContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PlacesContextProvider>
    <LogInContextProvider>
      <App />
    </LogInContextProvider>
  </PlacesContextProvider>
);
