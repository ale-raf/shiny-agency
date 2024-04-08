/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Survey } from "./pages/Survey.jsx";
import { Header } from "./components/Header.jsx";
import { Error } from "./components/Error.jsx";
import { Freelances } from "./pages/Freelances.jsx";
import { Results } from "./pages/Results.jsx";
import { createGlobalStyle } from "styled-components";
// import { ClientForm } from "./components/ClientForm.jsx";
// import { FreelanceForm } from "./components/FreelanceForm.jsx";
import "./index.css";

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionId" element={<Survey />}>
          {/* <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} /> */}
        </Route>
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
