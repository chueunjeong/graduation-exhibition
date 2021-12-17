import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./js/intro/Intro";
import Main from "./js/main/Main";
import Forewords from "./js/forewords/Forewords";
import GuestBook from "./js/guestbook/GuestBook";
import ArtistList from "./js/artistlist/ArtistList";
import ArtistDetail from "./js/artistdetail/ArtistDetail";
import Navi from "./js/navi/Navi";
import Book from "./js/components/Book";

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/navi" element={<Navi />} />
          <Route path="/main" element={<Main />} />
          <Route path="/forewords" element={<Forewords />} />
          <Route path="/guestbook" element={<GuestBook />} />
          <Route path="/artistlist" element={<ArtistList />} />
          <Route path="/artistdetail" element={<ArtistDetail />} />
          <Route path="/booktest" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
