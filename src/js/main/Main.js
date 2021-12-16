import React from "react";

import CommonHeader from "../components/CommonHeader";

import ImageList from "./ImageList";

import CommonFooter from "../components/CommonFooter";

import "../../assets/sass/main.scss";

const Main = () => {
  return (
    <div className="container">
      <CommonHeader />
      <div className="row main-body">
        <div className="col-12 p-0">
          <ImageList />
        </div>

        <div className="col-12 p-0">
          <ImageList />
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default Main;
