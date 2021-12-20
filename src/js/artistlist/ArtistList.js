import React, { useEffect, useState } from "react";
import CommonFooter from "../components/CommonFooter";
import CommonHeader from "../components/CommonHeader";
import ArtistImg1 from "../../assets/images/artist-img1.png";
import ArtistItems from "./ArtistItems";
import "../../assets/sass/artistItems.scss";
import { data } from "../../common/store";

const ArtistList = () => {
  // const artist_count = 48;
  // const cols = 3;
  // const rows = Math.ceil(artist_count / cols);
  // const remainder = artist_count % cols;
  const [artistInfoList, setArtistInfoList] = useState(data);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const getData = [...artistInfoList];

    for (let i = 0; i < getData.length; i++) {
      for (let k = 0; k < getData[i]?.works?.length; k++) {
        if (getData[i].works[k].alttext) {
          getData[i].altTextCheck = true;
        }
        if (getData[i].works[k].soundSubtitle) {
          getData[i].soundSubtitleCheck = true;
        }
      }
    }

    setArtistInfoList(getData);
  };

  return (
    <div className="container">
      <CommonHeader />

      <div className="container" style={{ padding: "100px 0 100px 0" }}>
        <div className="row">
          {artistInfoList.map((item, i) => (
            <ArtistItems artistInfo={artistInfoList[i]} />
          ))}
        </div>
      </div>

      <CommonFooter />
    </div>
  );
};

export default ArtistList;
