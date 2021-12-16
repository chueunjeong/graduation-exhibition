import React from "react";
import "../../assets/sass/book.scss";

export default function Book() {
  return (
    <div className="container book-container">
      <div class="book">
        <div class="back"></div>
        <div class="front"></div>
        <div className="all-page"></div>
      </div>
    </div>
  );
}
