import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import TemporaryDrawer from "./src/components/drawer";
import BasicModal from "./src/components/modal";
import { Router } from "./src/router";

ReactDOM.hydrateRoot(
  document.getElementById("app") as unknown as HTMLElement,
  <BrowserRouter>
  <TemporaryDrawer/>
  <Router/>
 
  </BrowserRouter>
);
