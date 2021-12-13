import React from "react";
import "../../assets/sass/modal.scss";
import Ellipse from "../../assets/images/ellipse.png";
import ModalBtn from "../../assets/images/modal-btn.png";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-contents">
        <div className="container modal-body">
          <div className="row body-title">
            <div className="col-8 text-left">질문</div>
            <div className="col-2 answer">네</div>
            <div className="col-2 answer">아니요</div>
          </div>
          <div className="row body-title-sub mb-5">
            <div className="col-8 text-left">Questions</div>
            <div className="col-2 text-16">yes</div>
            <div className="col-2 text-16">no</div>
          </div>

          <div className="row mb-2">
            <div className="col-8 text-left text-18">평면 작품을 볼까요?</div>
            <div className="col-2 question-ellipse">
              <img className="question-ellipse-img" alt="ellipse" src={Ellipse}></img>
            </div>
            <div className="col-2">
              <img className="question-ellipse-img" alt="ellipse" src={Ellipse}></img>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-8 text-left text-18">입체 작품을 볼까요?</div>
            <div className="col-2 question-ellipse">
              <img className="question-ellipse-img" alt="ellipse" src={Ellipse}></img>
            </div>
            <div className="col-2">
              <img className="question-ellipse-img" alt="ellipse" src={Ellipse}></img>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-8 text-left text-18">영상 작품을 볼까요?</div>
            <div className="col-2 question-ellipse">
              <img className="question-ellipse-img" alt="ellipse" src={Ellipse}></img>
            </div>
            <div className="col-2">
              <img className="question-ellipse-img" alt="ellipse" src={Ellipse}></img>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-8 text-left text-18">다원 작품을 볼까요?</div>
            <div className="col-2 question-ellipse">
              <img className="question-ellipse-img" alt="ellipse" src={Ellipse}></img>
            </div>
            <div className="col-2 question-ellipse">
              <img className="question-ellipse-img" alt="ellipse" src={Ellipse}></img>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-8">
              <div className="row">
                <div className="col-12 text-left text-18">대체 텍스트 있는 작품만?</div>
                <div className="col-12 text-left text-14">
                  작품의 모습을 시각적으로 설명한
                  <br />
                  '대체 텍스트'
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row h-100">
                <div className="col-6 question-ellipse">
                  <img className="question-ellipse-img" alt="ellipse" src={Ellipse}></img>
                </div>
                <div className="col-6 question-ellipse">
                  <img className="question-ellipse-img" alt="ellipse" src={Ellipse}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-8">
              <div className="row">
                <div className="col-12 text-left text-18">사운드 자막 있는 작품만?</div>
                <div className="col-12 text-left text-14">
                  작품의 소리를 언어로 번역한
                  <br />
                  '사운드 자막'
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row h-100">
                <div className="col-6 question-ellipse">
                  <img className="question-ellipse-img" alt="ellipse" src={Ellipse}></img>
                </div>
                <div className="col-6 question-ellipse">
                  <img className="question-ellipse-img" alt="ellipse" src={Ellipse}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-btn-wrap">
            <div className="btn-text text-20">보러가기</div>
            <div className="btn-img">
              <img className="modal-btn-img" alt="modal-btn-img" src={ModalBtn}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
