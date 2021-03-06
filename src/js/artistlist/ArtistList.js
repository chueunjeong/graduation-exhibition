import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CommonFooter from "../components/CommonFooter";
import CommonHeader from "../components/CommonHeader";
import ArtistItems from "./ArtistItems";
import "../../assets/sass/artistItems.scss";
import { data } from "../../common/store";

const ArtistList = () => {
  // const artist_count = 48;
  // const cols = 3;
  // const rows = Math.ceil(artist_count / cols);
  // const remainder = artist_count % cols;
  const [artistInfoList, setArtistInfoList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    init();
    console.log("artistList", location.state.filter);
  }, []);

  useEffect(() => {
    init();
  }, [location]);

  const init = () => {
    const artist = [...data];

    const filter = location.state.filter;
    const temp = []; // 배열 중 중복 감지
    for (let i = 0; i < artist.length; ++i) {
      try {
        if (filter.flatWorks) {
          for (let k in artist[i]["works"]) {
            if (artist[i]["works"][k]["type"] === "평면") {
              temp.push(artist[i]);
              i++;
            }
          }
        }

        if (filter.threeDWorks) {
          for (let k in artist[i]["works"]) {
            if (artist[i]["works"][k]["type"] === "입체") {
              temp.push(artist[i]);
              i++;
            }
          }
        }

        if (filter.videoWorks) {
          for (let k in artist[i]["works"]) {
            if (artist[i]["works"][k]["type"] === "영상") {
              temp.push(artist[i]);
              i++;
            }
          }
        }

        if (filter.multifacetedWorks) {
          for (let k in artist[i]["works"]) {
            if (artist[i]["works"][k]["type"] === "다원") {
              temp.push(artist[i]);
              i++;
            }
          }
        }

        if (filter.altText) {
          for (let k in artist[i]["works"]) {
            if (artist[i]["works"][k]["alttext"]) {
              temp.push(artist[i]);
              i++;
            }
          }
        }

        if (filter.soundSubtitles) {
          for (let k in artist[i]["works"]) {
            if (artist[i]["works"][k]["soundSubtitle"]) {
              temp.push(artist[i]);
              i++;
            }
          }
        }
      } catch (error) {}
    }

    // flatWorks: false, //평면 작품
    // threeDWorks: false, //입체 작품
    // videoWorks: false, //영상 작품
    // multifacetedWorks: false, //다원 작품
    // altText: false, //대체 텍스트
    // soundSubtitles: false, //음성자막

    for (let i = 0; i < temp.length; i++) {
      for (let k = 0; k < temp[i]?.works?.length; k++) {
        if (temp[i].works[k].alttext) {
          temp[i].altTextCheck = true;
        }
        if (temp[i].works[k].soundSubtitle) {
          temp[i].soundSubtitleCheck = true;
        }
      }
    }

    setArtistInfoList(temp);
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
