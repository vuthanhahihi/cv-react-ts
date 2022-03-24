import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Intro from "./components/pages/Intro";
import Portfolio from "./components/pages/Portfolio";
import NotFound from "./components/pages/NotFound";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route path="" element={<Intro/>}/>
      <Route path="about" element={<Portfolio/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
