import React from "react";

import CommonHeader from "../components/CommonHeader";

import ImageList from "./ImageList";
import ImageList2 from "./ImageList2";

import CommonFooter from "../components/CommonFooter";

import "../../assets/sass/main.scss";

const Main = () => {
  return (
    <>
      <div className="container">
        <CommonHeader />
      </div>
      <div className="container image-belt">
        <ImageList />
        <ImageList2 />
      </div>

      <div className="container">
        <CommonFooter />
      </div>
    </>
  );
};

export default Main;
