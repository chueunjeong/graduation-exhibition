import React, { useState } from "react";
import "../../assets/sass/book.scss";

export default function Book() {
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <div className="container book-container">
      <div class="book">
        <div className={`${bookOpen ? "text text-view" : "text"}`}>글씨맨 어떻게 나오나 확인중입니다 어디입니까?</div>
        <div class="back"></div>
        <div class={`${bookOpen ? "front book-open" : "front"}`}></div>
      </div>
      <div className="book-btn" onClick={() => setBookOpen(true)}>
        클릭!
      </div>
    </div>
  );
}
