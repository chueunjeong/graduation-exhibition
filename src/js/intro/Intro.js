import React from "react";
import "../../assets/sass/intro.scss";

const Intro = () => {
  return (
    <div className="container">
      <div className="row align-items-center d-flex justify-content-center intro">
        <div className="col-5 title">
          <a className="intro-title-a" href="/main">
            <div className="row fade-in-box">
              <div className="col-2 intro-ellipse-wrap">
                <div className="intro-ellipse"></div>
                {/* <img className="intro-ellipse" alt="intro-ellipse" src={Ellipse}></img> */}
              </div>
              <div className="col-10 text-center intro-title-text hidden-hover">안녕하세요?</div>
              <div className="col-10 text-left intro-title-text show-hover">An e ... g※</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
