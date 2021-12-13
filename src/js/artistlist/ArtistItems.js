import React from "react";
import { useNavigate } from "react-router-dom";
import Ellipse from "../../assets/images/ellipse.png";
import AltTextIcon from "../../assets/images/alt-text-icon.png";
import SoundSubtitle from "../../assets/images/sound-subtitle-icon.png";
import "../../assets/sass/artistItems.scss";

const ArtistItems = (props) => {
  const navigate = useNavigate();
  const artistInfo = props.artistInfo;

  const onChangePage = () => {
    navigate("/artistdetail", { state: { artistInfo: artistInfo } });
  };

  return (
    <div className="col-4">
      <div className="row">
        <div className="col-12 artist-img-item">
          <img className="artist-img" alt="artist-img" src={artistInfo.artistImg} onClick={onChangePage}></img>
        </div>
        <div className="col-6">
          <div className="row justify-content-start">
            <div className="col-12 korean-name">{artistInfo.koreanName}</div>
            <div className="col-12 englist-name">{artistInfo.englishName}</div>
          </div>
        </div>
        <div className="col-6">
          <div className="row justify-content-end align-items-center">
            <div className="col-2 ellipse-item">
              <div className="ellipse-img-wrap">
                <img className="ellipse-img" alt="ellipse-img" src={Ellipse}></img>
              </div>
              {artistInfo.includeAltText && (
                <div className="ellipse-img-overlay">
                  <img className="alt-text-img" alt="대체 텍스트 가능" src={AltTextIcon}></img>
                </div>
              )}
            </div>
            <div className="col-8 artist-option text-left">대체 텍스트</div>
            <div className="w-100"></div>
            <div className="col-2 ellipse-item">
              <div className="ellipse-img-wrap">
                <img className="ellipse-img" alt="ellipse-img" src={Ellipse}></img>
              </div>
              {artistInfo.withSoundSubtitle && (
                <div className="ellipse-img-overlay">
                  <img className="sound-subtitle-img" alt="사운드 자막 가능" src={SoundSubtitle}></img>
                </div>
              )}
            </div>
            <div className="col-8 artist-option">사운드 자막</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistItems;
