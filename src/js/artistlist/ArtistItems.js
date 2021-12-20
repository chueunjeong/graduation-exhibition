import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ellipse from "../../assets/images/ellipse.png";
import AltTextIcon from "../../assets/images/alt-text-icon.png";
import SoundSubtitle from "../../assets/images/sound-subtitle-icon.png";
import "../../assets/sass/artistItems.scss";

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
    <div onClick={onChangePage} className="col-4 pointer" style={{ padding: "0 4rem 143px 4rem" }}>
      <div className="artist-img-item">
        <img className="artist-img" alt="artist-img" src={artistInfo.titleImage} />
      </div>

      <div className="flex-row" style={{ marginTop: 38 }}>
        <div className="col-6 pl-0 pr-0">
          <div className="row justify-content-start">
            <div className="col-12 korean-name">{artistInfo.name}</div>
            <div className="col-12 englist-name">{artistInfo.engName}</div>
          </div>
        </div>
        {/* left box */}

        <div className="col-6 pl-0 pr-0">
          <div className="row artist-title-option">
            <div className="col-1 ellipse-item">
              <div className="ellipse-img-wrap">
                <img className="ellipse-img" alt="ellipse-img" src={Ellipse}></img>
              </div>
              {artistInfo.altTextCheck && (
                <div className="ellipse-img-overlay">
                  <img className="alt-text-img" alt="대체 텍스트 가능" src={AltTextIcon}></img>
                </div>
              )}
            </div>
            <div className="col-6 artist-option">대체 텍스트</div>
            <div className="w-100"></div>
            <div className="col-1 ellipse-item">
              <div className="ellipse-img-wrap">
                <img className="ellipse-img" alt="ellipse-img" src={Ellipse}></img>
              </div>
              {artistInfo.soundSubtitleCheck && (
                <div className="ellipse-img-overlay">
                  <img className="sound-subtitle-img" alt="사운드 자막 가능" src={SoundSubtitle}></img>
                </div>
              )}
            </div>
            <div className="col-6 artist-option">사운드 자막</div>
          </div>
        </div>
        {/* right box */}
      </div>
    </div>
  );
};

export default ArtistItems;
