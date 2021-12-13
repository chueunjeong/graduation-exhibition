import React from "react";
import { useLocation } from "react-router-dom";
import CommonFooter from "../components/CommonFooter";
import CommonHeader from "../components/CommonHeader";

import Ellipse from "../../assets/images/ellipse.png";

import ArtistDetailArtworkImg from "../../assets/images/artistdetail-artwork-img.png";

import "../../assets/sass/artistDetail.scss";

const ArtistDetail = () => {
  const location = useLocation();
  const artistInfo = location.state.artistInfo;

  return (
    <div className="container">
      <CommonHeader />
      <div className="row ">
        <div className="container">
          <div className="row justify-content-center artistdetail-title">
            <div className="col-9">
              <div className="row">
                <div className="col-6 artistdetail-title-wrap artistdetail-title-item">
                  <img className="artistdetail-title-img" alt="artistdetail-title-img" src={artistInfo.artistImg}></img>{" "}
                </div>
                <div className="col-6 artistdetail-title-item">
                  <div className="row">
                    <div className="col-12 artistdetail-korean-name text-left">{artistInfo.koreanName}</div>
                    <div className="col-12 artistdetail-englist-name text-left">{artistInfo.englishName}</div>
                  </div>
                  <div className="row" id="artwork1">
                    <div className="col-2 artistdetail-ellipse-img-wrap">
                      <img className="artistdetail-ellipse-img" alt="artistdetail-ellipse-img" src={Ellipse}></img>
                    </div>
                    <div className="col-10 artwork-title-text">작품명1, 2021, 싱글 채널 비디오</div>
                  </div>
                  <div className="row" id="artwork2">
                    <div className="col-2 artistdetail-ellipse-img-wrap">
                      <img className="artistdetail-ellipse-img" alt="artistdetail-ellipse-img" src={Ellipse}></img>
                    </div>
                    <div className="col-10 artwork-title-text">작품명2, 2021, 캔버스에 유화</div>
                  </div>
                  <div className="row" id="artwork3">
                    <div className="col-2 artistdetail-ellipse-img-wrap">
                      <img className="artistdetail-ellipse-img" alt="artistdetail-ellipse-img" src={Ellipse}></img>
                    </div>
                    <div className="col-10 artwork-title-text">작품명3, 2021, 도자 오브제</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <img className="artwork-img" alt="artwork-img" src={ArtistDetailArtworkImg}></img>
            </div>
            <div className="col-12 artwork-detail-title-text text-center">작품명1, 2021, 싱글 채널 비디오</div>
          </div>
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default ArtistDetail;
