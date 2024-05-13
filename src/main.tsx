import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./pages/landing/Landing.tsx";
import "./assets/styles/general.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { PrimeReactProvider } from "primereact/api";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Landing />
    </PrimeReactProvider>
  </React.StrictMode>
);
