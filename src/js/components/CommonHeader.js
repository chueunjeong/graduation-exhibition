import React, { useState } from "react";
import HeaderLogo from "../../assets/images/header-logo.png";
import HeaderIcon1 from "../../assets/images/header-icon1.png";
import HeaderIcon2 from "../../assets/images/header-icon2.png";
import HeaderIcon3 from "../../assets/images/header-icon3.png";

import Modal from "../../js/components/Modal.js";

import "../../assets/sass/commonHeader.scss";

const CommonHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="row main-header">
      <div className="col-8">
        <img className="header-logo" alt="header-logo" src={HeaderLogo}></img>
      </div>
      <div className="col-4">
        <div className="row justify-content-end">
          <div className="col-2">
            <img className="header-icon icon-rotate" alt="header-icon1" src={HeaderIcon1}></img>
          </div>
          <div className="col-2">
            <img className="header-icon icon-rotate" alt="header-icon2" src={HeaderIcon2}></img>
          </div>
          <div className="col-2 ">
            <img className="header-icon modal-icon" alt="header-icon3" src={HeaderIcon3} onClick={openModal}></img>
          </div>
        </div>
      </div>
      {showModal && <Modal closeModal={closeModal}></Modal>}
    </div>
  );
};

export default CommonHeader;
