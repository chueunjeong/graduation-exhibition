import React from "react";
import "../../assets/sass/commonFooter.scss";
import FooterIcon1 from "../../assets/images/footer-icon1.png";
import FooterIcon2 from "../../assets/images/footer-icon2.png";
import FooterIcon3 from "../../assets/images/footer-icon3.png";

const CommonFooter = () => {
  return (
    <div className="row main-footer">
      <div className="col-3 footer-text1">
        <div className="text-left">
          kartsfinearts2021.com
          <br />
          betannyeong.online@gmail.com
        </div>
      </div>
      <div className="col-6 text-center footer-text2">
        <div>
          한국예술종합학교 조형예술과 22회 졸업전시 &lt;안녕을 위한 베타 테스트&gt;
          <br />© 2021 Korea National University of Arts, Fine Arts Dept. Students All Rights Reserved
        </div>
      </div>
      <div className="col-3 align-self-end">
        <div className="row justify-content-end">
          <div className="col-1 footer-icon">
            <a href="https://www.youtube.com/c/KartsTV">
              <img className="footer-icon1" alt="유투브 보러가기" src={FooterIcon1}></img>
            </a>
          </div>
          <div className="col-1 footer-icon">
            <a href="https://www.instagram.com/2021_knuart/">
              <img className="footer-icon2" alt="인스타그램 보러가기" src={FooterIcon2}></img>
            </a>
          </div>
          <div className="col-2 footer-icon">
            <a href="http://www.karts.ac.kr/">
              <img className="footer-icon3" alt="한예종 홈페이지 방문하기" src={FooterIcon3}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonFooter;
