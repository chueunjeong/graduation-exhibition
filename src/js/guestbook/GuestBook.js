import React, { useState } from "react";
import CommonHeader from "../components/CommonHeader";
import CommonFooter from "../components/CommonFooter";
import Ellipse from "../../assets/images/ellipse.png";
import FilledEllipse from "../../assets/images/filled_ellipse.png";

import VisitorsNameItems from "./VisitorsNameItems";
import GreetingsItems from "./GreetingsItems";

import "../../assets/sass/guestBook.scss";

const GuestBook = () => {
  const [leftTitleItems, setLeftTitleItems] = useState({
    ellipseImg: Ellipse,
    active: false,
  });

  const [rightTitleItems, setRightTitleItems] = useState({
    ellipseImg: Ellipse,
    active: false,
  });

  const onToggleLeft = () => {
    setLeftTitleItems({
      ellipseImg: leftTitleItems.ellipseImg === Ellipse ? FilledEllipse : Ellipse,
      active: !leftTitleItems.active,
    });
  };

  const onToggleRight = () => {
    setRightTitleItems({
      ellipseImg: rightTitleItems.ellipseImg === Ellipse ? FilledEllipse : Ellipse,
      active: !rightTitleItems.active,
    });
  };

  return (
    <div className="container">
      <CommonHeader />
      <div className="row guestbook-body">
        <div className="col-lg-6 title-container mb-5">
          <div
            className="row justify-content-center leave-name"
            onClick={onToggleLeft}
            onKeyPress={onToggleLeft}
            alt="이름만 남기기 버튼"
            tabIndex="0"
          >
            <div className="col-6">
              <div className="row" tabindex="0">
                <div className="col-2 ellipse1">
                  <img className="ellipse-img" src={leftTitleItems.ellipseImg}></img>
                </div>

                <div className="col-10 text1 guestbook-subtitle-text">이름만 남기기</div>
                <div className="col-2 ellipse"></div>
                <div className="col-10 text1-sub"> Leave Name</div>
              </div>
            </div>
          </div>

          {leftTitleItems.active && <VisitorsNameItems />}
        </div>

        <div className="col-lg-6 title-container  mb-5">
          <div
            className="row justify-content-center say-hello"
            onClick={onToggleRight}
            onKeyPress={onToggleRight}
            alt="인사말 남기기 버튼"
            tabIndex="0"
          >
            <div className="col-6">
              <div className="row" tabindex="0">
                <div className="col-2 ellipse1">
                  <img className="ellipse-img" src={rightTitleItems.ellipseImg}></img>
                </div>
                <div className="col-10 text1 guestbook-subtitle-text">인사말 남기기</div>
                <div className="col-2 ellipse"></div>
                <div className="col-10 text1-sub">Say Hello</div>
              </div>
            </div>
          </div>
          {rightTitleItems.active && <GreetingsItems />}
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default GuestBook;
