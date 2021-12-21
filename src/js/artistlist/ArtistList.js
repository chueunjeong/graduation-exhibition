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
    // console.log(location.state.filter);
    const temp = []; // 배열 중 중복 감지
    for (let i = 0; i < artist.length; ++i) {
      try {
        // let exist = false;

        if (filter.flatWorks) {
          for (let k in artist[i]["works"]) {
            if (artist[i]["works"][k]["type"] === "평면") {
              temp.push(artist[i]);
              // i++;
            }
          }
        }

        if (filter.threeDWorks) {
          for (let k in artist[i]["works"]) {
            if (artist[i]["works"][k]["type"] === "입체") {
              temp.push(artist[i]);
              // i++;
            }
          }
        }

        if (filter.videoWorks) {
          for (let k in artist[i]["works"]) {
            if (artist[i]["works"][k]["type"] === "영상") {
              temp.push(artist[i]);
              // i++;
            }
          }
        }

        if (filter.multifacetedWorks) {
          for (let k in artist[i]["works"]) {
            if (artist[i]["works"][k]["type"] === "다원") {
              temp.push(artist[i]);
              // i++;
            }
          }
        }

        if (filter.altText) {
          for (let k in artist[i]["works"]) {
            if (artist[i]["works"][k]["alttext"] === true) {
              temp.push(artist[i]);
              // i++;
            }
          }
        }
        // if (!filter.altText) {
        //   let exist = 0;
        //   for (let k in artist[i]["works"]) {
        //     if (!artist[i]["works"][k]["alttext"]) {
        //       exist++;
        //       // i++
        //     }
        //   }
        //   if (exist === artist[i]["works"].length) {
        //     temp.push(artist[i]);
        //     i++;
        //   }
        // }

        if (filter.soundSubtitles) {
          for (let k in artist[i]["works"]) {
            if (artist[i]["works"][k]["soundSubtitle"]) {
              temp.push(artist[i]);
              // i++;
            }
          }
        }
      } catch (error) {}
      // console.log(artist[i]);
    }

    let temp2 = [];
    for (let i = 0; i < temp.length; i++) {
      let exist = false;
      for (let k = 0; k < temp2.length; k++) {
        if (temp[i].name === temp2[k].name) exist = true;
      }

      if (!exist) temp2.push(temp[i]);
    }

    // flatWorks: false, //평면 작품
    // threeDWorks: false, //입체 작품
    // videoWorks: false, //영상 작품
    // multifacetedWorks: false, //다원 작품
    // altText: false, //대체 텍스트
    // soundSubtitles: false, //음성자막

    for (let i = 0; i < temp2.length; i++) {
      for (let k = 0; k < temp2[i]?.works?.length; k++) {
        if (temp2[i].works[k].alttext) {
          temp2[i].altTextCheck = true;
        }
        if (temp2[i].works[k].soundSubtitle) {
          temp2[i].soundSubtitleCheck = true;
        }
      }
    }

    temp2.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    setArtistInfoList(temp2);
  };

  return (
    <div className="container">
      <CommonHeader />

      <div className="container" style={{ padding: "100px 0 100px 0" }}>
        <div className="row">
          {artistInfoList.map((item, i) => (
            <ArtistItems key={i} artistInfo={artistInfoList[i]} />
          ))}
        </div>
      </div>

      <CommonFooter />
    </div>
  );
};

export default ArtistList;
