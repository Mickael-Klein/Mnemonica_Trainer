import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import NotFound from "./Page/NotFound/NotFound";
import GuessByCard from "./Page/GuessByCard/GuessByCard";
import GuessByNumber from "./Page/GuessByNumber/GuessByNumber";
import "../src/Utils/Style/normalize.css";
// import Mnemonica from "./Assets/Mnemonica.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<GuessByCard />} />
      <Route path="/Guess-By-Number" element={<GuessByNumber />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
