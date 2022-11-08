import React from "react";
import ReactDOM from "react-dom/client";
import ShowListName from "./components/baitapvenha/ShowListName";
import ContactForm from "./components/form/ContactForm";
import EmailForm from "./components/form/EmailForm";
import QuanLySach from "./components/form/QuanLySach";
import ToKhaiYTe from "./components/form/ToKhaiYTe";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShowListName></ShowListName>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
