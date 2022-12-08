import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoComponent from "./components/DemoComponent";
import { Provider } from "react-redux";
import store from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <DemoComponent />
  </Provider>
);
