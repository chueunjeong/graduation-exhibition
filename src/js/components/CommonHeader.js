import React, { useState } from "react";
import HeaderLogo from "../../assets/images/header-logo.png";
import HeaderIcon1 from "../../assets/images/header-icon1.png";
import HeaderIcon2 from "../../assets/images/header-icon2.png";
import HeaderIcon3 from "../../assets/images/header-icon3.png";
import HeaderIcon3Close from "../../assets/images/header-icon3-close.png";
import { useLocation } from "react-router-dom";

import Modal from "../../js/components/Modal.js";

import "../../assets/sass/commonHeader.scss";

const CommonHeader = () => {
  const [showModal, setShowModal] = useState(false);

  // const cl = () => {
  //   setShowModal((prev) => !prev);
  // }

  return (
    <div className="row main-header">
      <div className="col-md-8 ">
        <a href="/main">
          <img className="header-logo pointer" alt="메인 화면으로 가기" src={HeaderLogo}></img>
        </a>
      </div>
      <div className="col-md-4 align-center justify-content-end">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3">
            <a href="/forewords">
              <img className="header-icon icon-rotate" alt="서문" src={HeaderIcon1}></img>
            </a>
          </div>
          <div className="col-3">
            <a href="/guestbook">
              <img className="header-icon icon-rotate" alt="방명록" src={HeaderIcon2}></img>
            </a>
          </div>
          <div className="col-3">
            <img
              className="header-icon modal-icon"
              tabindex="0"
              alt="작품 보러가기"
              src={`${showModal ? HeaderIcon3Close : HeaderIcon3}`}
              onClick={() =>
                setShowModal((prev) => {
                  // console.log("닫힘 혹은 열림");
                  return !prev;
                })
              }
              onKeyPress={() =>
                setShowModal((prev) => {
                  // console.log("닫힘 혹은 열림");
                  return !prev;
                })
              }
            ></img>
          </div>
        </div>
      </div>
      {showModal && <Modal showModal={showModal} closeModal={() => setShowModal(false)}></Modal>}
    </div>
  );
};

export default CommonHeader;
