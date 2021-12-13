import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./js/intro/Intro";
import Main from "./js/main/Main";
import Forewords from "./js/forewords/Forewords";
import GuestBook from "./js/guestbook/GuestBook";
import ArtistList from "./js/artistlist/ArtistList";
import ArtistDetail from "./js/artistdetail/ArtistDetail";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/main" element={<Main />} />
      <Route path="/forewords" element={<Forewords />} />
      <Route path="/guestbook" element={<GuestBook />} />
      <Route path="/artistlist" element={<ArtistList />} />
      <Route path="/artistdetail" element={<ArtistDetail />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
