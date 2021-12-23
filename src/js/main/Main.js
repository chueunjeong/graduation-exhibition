import React from "react";

import CommonHeader from "../components/CommonHeader";

import ImageList from "./ImageList";
import ImageList2 from "./ImageList2";

import CommonFooter from "../components/CommonFooter";
import Ellipse from "../../assets/images/ellipse.png";
import { data } from "../../common/store";

import "../../assets/sass/main.scss";

const Main = () => {
  return (
    <>
      <div className="container">
        <CommonHeader />
      </div>

      <div className="image-belt">
        <div style={{ marginTop: -150 }} className="belt-mobile-1">
          <ImageList />
        </div>
        <div style={{ paddingTop: 300 }} className="belt-mobile-2">
          <ImageList2 />
        </div>
      </div>
      <div className="container">
        <CommonFooter />
      </div>
    </>
  );
};

export default Main;
