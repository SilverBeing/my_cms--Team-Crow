import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "grapesjs/dist/css/grapes.min.css";
import "grapick/dist/grapick.min.css";

import "bootstrap";
import "./Styles/main.css";
import { InfoContextProvider } from "./Context/InfoContext";
import { AuthContextProvider } from "./Context/AuthContextProvider";
import UserContextProvider from "./Context/UserContextProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <InfoContextProvider>
        <AuthContextProvider>
          <UserContextProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </UserContextProvider>
        </AuthContextProvider>
      </InfoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
