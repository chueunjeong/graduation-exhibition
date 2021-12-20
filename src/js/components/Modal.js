import React, { useState, useEffect } from "react";
import "../../assets/sass/modal.scss";

import { useLocation, useNavigate } from "react-router-dom";
import ModalBtn from "../../assets/images/modal-btn.png";
import ModalOption from "./ModalOption";

// import SearchOption6 from "../../assets/images/searchOption6.png";

// const data = [
//   {
//     q: "평면 작품을 볼까요?",
//     answer: false,
//     imgLeft: SearchOption6,
//     imgRight: SearchOption6,
//   },
//   {
//     q: "평면 작품을 볼까요?",
//     answer: false,
//     imgLeft: SearchOption6,
//     imgRight: SearchOption6,
//   },
// ]

const Modal = ({ showModal, closeModal }) => {
  const [count, setCount] = useState(0);
  const [bodyShow, setBodyShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // 모달 질문 항목
  const [searchOption, setSearchOption] = useState({
    flatWorks: false, //평면 작품
    threeDWorks: false, //입체 작품
    videoWorks: false, //영상 작품
    multifacetedWorks: false, //다원 작품
    altText: false, //대체 텍스트
    soundSubtitles: false, //음성자막
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
    // console.log("searchOption 값이 설정됨");
    // console.log(searchOption);
    // console.log(searchOptionView);
    return () => {
      // console.log("searchOption 가 바뀌기 전..");
      // console.log(searchOption);
      // console.log(searchOptionView);
    };
  }, [searchOption, searchOptionView]);

  useEffect(() => {
    console.log("열림");
    return () => {
      console.log("닫힘");
      setBodyShow(false);
    };
  }, [showModal]);

  useEffect(() => {
    if (count > 10) setBodyShow(true);

    const countdown = setInterval(() => {
      setCount(count + 1);
    }, 100);
    return () => clearInterval(countdown);
  }, [count]);

  const handleSubmit = () => {
    // alert(JSON.stringify(searchOption))
    // console.log(searchOption);
    closeModal();
    navigate("/artistlist", { state: { filter: searchOption } });
  };

  return (
    // <div className="container">
    <div className="modal-container">
      <div className="modal-contents">
        <div className="paper-left" style={{ display: !bodyShow ? "block" : "none" }}></div>
        <div className="paper-right" style={{ display: !bodyShow ? "block" : "none" }}></div>
        <div className="modal-body" style={{ display: bodyShow ? "block" : "none" }}>
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
            <div onClick={handleSubmit} className="modal-btn-wrap">
              {/* <a href="/artistlist"> */}
              <div className="btn-text text-sz20">보러가기</div>
              <div className="btn-img">
                <img className="modal-btn-img" alt="modal-btn-img" src={ModalBtn}></img>
              </div>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Modal;
