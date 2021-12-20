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
      {/* <div>
        <div
          style={{
            height: "73vh",
            backgroundColor: "pink",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div style={{ border: "1px solid black", width: "100%", marginBottom: 20, display: "flex" }}>
            {data.map((item, i) => (
              <div
                key={i}
                style={{
                  width: 216,
                  height: 284,
                  border: "1px solid red",
                  marginRight: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={item.titleImage} style={{ width: 216, height: 284 }} />
                <img className="imglist-ellipse" src={Ellipse} alt="ellipse" />
              </div>
            ))}
          </div>

          <div style={{ border: "1px solid black", width: "100%", display: "flex" }}>
            <div
              style={{
                width: 216,
                height: 284,
                border: "1px solid red",
                marginRight: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <img className="imglist-ellipse" src={Ellipse} alt="ellipse" />
            </div>
            <div
              style={{
                width: 216,
                height: 284,
                border: "1px solid red",
                marginRight: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <img className="imglist-ellipse" src={Ellipse} alt="ellipse" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="container">
        <CommonFooter />
      </div>
    </>
  );
};

export default Main;
