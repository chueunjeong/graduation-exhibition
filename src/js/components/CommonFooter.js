import React from "react";
import "../../assets/sass/commonFooter.scss";
import FooterIcon1 from "../../assets/images/footer-icon1.png";
import FooterIcon2 from "../../assets/images/footer-icon2.png";
import FooterIcon3 from "../../assets/images/footer-icon3.png";

const CommonFooter = () => {
  return (
    <div className="row main-footer">
      <div className="col-3 text-left">
        betannyeong.com
        <br />
        betannyeong.online@gmail.com
      </div>
      <div className="col-6 text-center">
        한국예술종합학교 조형예술과 22회 졸업전시 &lt;안녕을 위한 베타 테스트&gt;
        <br />© 2021 Korea National University of Arts, Fine Arts Dept. Students All Rights Reserved
      </div>
      <div className="col-3 align-self-end">
        <div className="row justify-content-end">
          <div className="col-2.5 offset-md-1 footer-icon">
            <a href="https://www.youtube.com/c/KartsTV">
              <img className="footer-icon1" alt="footer-icon1" src={FooterIcon1}></img>
            </a>
          </div>
          <div className="col-2.5 offset-md-1 footer-icon">
            <a href="https://www.instagram.com/karts.global/">
              <img className="footer-icon2" alt="footer-icon2" src={FooterIcon2}></img>
            </a>
          </div>
          <div className="col-2.5 offset-md-1 footer-icon">
            <a href="http://www.karts.ac.kr/">
              <img className="footer-icon3" alt="footer-icon3" src={FooterIcon3}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonFooter;
