import React, { useState, useEffect } from "react";
import "../../assets/sass/modal.scss";

import ModalBtn from "../../assets/images/modal-btn.png";
import ModalOption from "./ModalOption";

const Modal = ({ showModal, closeModal }) => {
  const [searchOption, setSearchOption] = useState({
    flatWorks: false,
    threeDWorks: false,
    videoWorks: false,
    multifacetedWorks: false,
    altText: false,
    soundSubtitles: false,
  });

  const [searchOptionView, setSearchOptionView] = useState({
    flatWorksViewY: false,
    flatWorksViewN: false,
    threeDWorksViewY: false,
    threeDWorksViewN: false,
    videoWorksViewY: false,
    videoWorksViewN: false,
    multifacetedWorksViewY: false,
    multifacetedWorksViewN: false,
    altTextViewY: false,
    altTextViewN: false,
    soundSubtitlesViewY: false,
    soundSubtitlesViewN: false,
  });

  useEffect(() => {
    console.log("searchOption 값이 설정됨");
    console.log(searchOption);
    console.log(searchOptionView);
    return () => {
      console.log("searchOption 가 바뀌기 전..");
      console.log(searchOption);
      console.log(searchOptionView);
    };
  });

  return (
    <div className="container">
      <div className="modal-container">
        <div className="modal-contents">
          <div className="paper-left"></div>
          <div className="paper-right"></div>
          <div className="container modal-body">
            <div className="row body-title">
              <div className="col-8 text-left">질문</div>
              <div className="col-2 answer">네</div>
              <div className="col-2 answer">아니요</div>
            </div>
            <div className="row body-title-sub mb-5">
              <div className="col-8 text-left">Questions</div>
              <div className="col-2 text-sz16">yes</div>
              <div className="col-2 text-sz16">no</div>
            </div>

            <ModalOption
              searchOption={searchOption}
              setSearchOption={setSearchOption}
              viewY={searchOptionView.flatWorksViewY}
              viewN={searchOptionView.flatWorksViewN}
              searchOptionView={searchOptionView}
              setSearchOptionView={setSearchOptionView}
              option="flatWorks"
            />
            <ModalOption
              searchOption={searchOption}
              setSearchOption={setSearchOption}
              viewY={searchOptionView.threeDWorksViewY}
              viewN={searchOptionView.threeDWorksViewN}
              searchOptionView={searchOptionView}
              setSearchOptionView={setSearchOptionView}
              option="threeDWorks"
            />
            <ModalOption
              searchOption={searchOption}
              setSearchOption={setSearchOption}
              viewY={searchOptionView.videoWorksViewY}
              viewN={searchOptionView.videoWorksViewN}
              searchOptionView={searchOptionView}
              setSearchOptionView={setSearchOptionView}
              option="videoWorks"
            />
            <ModalOption
              searchOption={searchOption}
              setSearchOption={setSearchOption}
              viewY={searchOptionView.multifacetedWorksViewY}
              viewN={searchOptionView.multifacetedWorksViewN}
              searchOptionView={searchOptionView}
              setSearchOptionView={setSearchOptionView}
              option="multifacetedWorks"
            />

            <div className="row my-4"></div>

            <ModalOption
              searchOption={searchOption}
              setSearchOption={setSearchOption}
              viewY={searchOptionView.altTextViewY}
              viewN={searchOptionView.altTextViewN}
              searchOptionView={searchOptionView}
              setSearchOptionView={setSearchOptionView}
              option="altText"
            />

            <ModalOption
              searchOption={searchOption}
              setSearchOption={setSearchOption}
              viewY={searchOptionView.soundSubtitlesViewY}
              viewN={searchOptionView.soundSubtitlesViewN}
              searchOptionView={searchOptionView}
              setSearchOptionView={setSearchOptionView}
              option="soundSubtitles"
            />
            <div className="row modal-btn-loc">
              <div className="modal-btn-wrap">
                <a href="/artistlist">
                  <div className="btn-text text-sz20">보러가기</div>
                  <div className="btn-img">
                    <img className="modal-btn-img" alt="modal-btn-img" src={ModalBtn}></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
