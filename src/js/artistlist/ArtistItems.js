import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ellipse from "../../assets/images/ellipse.png";
import AltTextIcon from "../../assets/images/alt-text-icon.png";
import SoundSubtitle from "../../assets/images/sound-subtitle-icon.png";
import "../../assets/sass/artistItems.scss";
import AlttextWorks from "../../assets/images/alttext-works.png";
import SoundsubWorks from "../../assets/images/soundsub-works.png";

const ArtistItems = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const artistInfo = props.artistInfo;

  let altTextCheck = false;
  let soundSubtitleCheck = false;

  const onChangePage = () => {
    navigate("/artistdetail", { state: { artistInfo: artistInfo } });
  };

  return (
    <div
      onClick={onChangePage}
      onKeyPress={onChangePage}
      className="col-lg-4 pointer"
      style={{ padding: "0 4rem 143px 4rem" }}
      tabindex="0"
      alt={artistInfo.name + "작품 보러가기"}
    >
      <div className="artist-img-item">
        <img className="artist-img" alt={artistInfo.name + "작품 이미지"} src={artistInfo.titleImage} />
      </div>

      <div className="flex-row" style={{ marginTop: 38 }}>
        <div className="col-6 pl-0 pr-0">
          <div className="row justify-content-start">
            <div className="col-12 korean-name" tabindex="0">
              {artistInfo.name}
            </div>
            <div className="col-12 englist-name" tabindex="0">
              {artistInfo.engName}
            </div>
          </div>
        </div>
        {/* left box */}

        <div className="col-6 pl-0 pr-0">
          <div className="row artist-title-option">
            <div className="col-1 ellipse-item">
              <div className="ellipse-img-wrap">
                {artistInfo.altTextCheck ? (
                  <img className="alt-text-img" alt="대체 텍스트 가능" src={AlttextWorks} tabindex="0"></img>
                ) : (
                  <img className="ellipse-img" alt="대체 텍스트 불가" src={Ellipse} tabindex="0"></img>
                )}
              </div>
            </div>
            <div className="col-6 artist-option" tabindex="0">
              대체 텍스트
            </div>
            <div className="w-100"></div>
            <div className="col-1 ellipse-item">
              <div className="ellipse-img-wrap">
                {artistInfo.soundSubtitleCheck ? (
                  <img className="sound-subtitle-img" alt="사운드 자막 가능" src={SoundsubWorks} tabindex="0"></img>
                ) : (
                  <img className="ellipse-img" alt="사운드 자막 불가" src={Ellipse} tabindex="0"></img>
                )}
              </div>
            </div>
            <div className="col-6 artist-option" tabindex="0">
              사운드 자막
            </div>
          </div>
        </div>
        {/* right box */}
      </div>
    </div>
  );
};

export default ArtistItems;
