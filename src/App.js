import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>연결링크</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/intro">intro</Link> |<Link to="/main">main</Link> |<Link to="/forewords">forewords</Link> |
        <Link to="/guestbook">guestbook</Link> |<Link to="/artistlist">artistlist</Link> |
        <Link to="/artistdetail">artistdetail</Link>
      </nav>
    </div>
  );
}
