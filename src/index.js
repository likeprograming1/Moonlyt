import React from "react";
import ReactDOM from "react-dom/client";
import Roots from "./App";
import { BrowserRouter } from "react-router-dom";
import { Global } from "./styles/globalstyle";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Roots />
        <Global />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
