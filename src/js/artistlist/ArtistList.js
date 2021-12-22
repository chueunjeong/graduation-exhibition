import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CommonFooter from "../components/CommonFooter";
import CommonHeader from "../components/CommonHeader";
import ArtistItems from "./ArtistItems";
import "../../assets/sass/artistItems.scss";
import { data } from "../../common/store";

const ArtistList = () => {
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

    for (let i = 0; i < artist.length; i++) {
      for (let k = 0; k < artist[i]?.works?.length; k++) {
        if (artist[i].works[k].alttext) {
          artist[i].altTextCheck = true;
        }
        if (artist[i].works[k].soundSubtitle) {
          artist[i].soundSubtitleCheck = true;
        }
        if (artist[i].works[k].type === "평면") {
          artist[i].flatworksCheck = true;
        }
        if (artist[i].works[k].type === "입체") {
          artist[i].threedworksCheck = true;
        }
        if (artist[i].works[k].type === "영상") {
          artist[i].videoworksCheck = true;
        }
        if (artist[i].works[k].type === "다원") {
          artist[i].multifactedworksCheck = true;
        }
      }
    }

    //작가별로 돌기
    for (let i = 0; i < artist.length; ++i) {
      //평면 작품 조건이 들어오면
      if (filter.flatWorks) {
        //각 작가의 작품에 평면이 있는지 확인
        if (artist[i].flatworksCheck) {
          if (!filter.altText && !filter.soundSubtitles) {
            temp.push(artist[i]);
            console.log("평면 작가이름" + artist[i].name);
            continue;
          } else if (filter.altText && filter.soundSubtitles) {
            if (artist[i].altTextCheck && artist[i].soundSubtitleCheck) {
              temp.push(artist[i]);
              console.log("평면 대체자막 작가이름" + artist[i].name);
              continue;
            }
          } else {
            if (filter.altText && artist[i].altTextCheck) {
              temp.push(artist[i]);
              console.log("평면 대체 작가이름" + artist[i].name);
              continue;
            }
            if (filter.soundSubtitles && artist[i].soundSubtitleCheck) {
              temp.push(artist[i]);
              console.log("평면 자막 작가이름" + artist[i].name);
              continue;
            }
          }
        }
      }
      //입체 작품 조건이 들어오면
      if (filter.threeDWorks) {
        //각 작가의 작품에 입체가 있는지 확인
        if (artist[i].threedworksCheck) {
          if (!filter.altText && !filter.soundSubtitles) {
            temp.push(artist[i]);
            console.log("입체 작가이름" + artist[i].name);
            continue;
          } else if (filter.altText && filter.soundSubtitles) {
            if (artist[i].altTextCheck && artist[i].soundSubtitleCheck) {
              temp.push(artist[i]);
              console.log("입체 대체자막 작가이름" + artist[i].name);
              continue;
            }
          } else {
            if (filter.altText && artist[i].altTextCheck) {
              temp.push(artist[i]);
              console.log("입체 대체작가이름" + artist[i].name);
              continue;
            }
            if (filter.soundSubtitles && artist[i].soundSubtitleCheck) {
              temp.push(artist[i]);
              console.log("입체 자막작가이름" + artist[i].name);
              continue;
            }
          }
        }
      }
      //영상 작품 조건이 들어오면
      if (filter.videoWorks) {
        //각 작가의 작품에 영상이 있는지 확인
        if (artist[i].videoworksCheck) {
          if (!filter.altText && !filter.soundSubtitles) {
            temp.push(artist[i]);
            console.log("영상 작가이름" + artist[i].name);
            continue;
          } else if (filter.altText && filter.soundSubtitles) {
            if (artist[i].altTextCheck && artist[i].soundSubtitleCheck) {
              temp.push(artist[i]);
              console.log("영상 대체자막 작가이름" + artist[i].name);
              continue;
            }
          } else {
            if (filter.altText && artist[i].altTextCheck) {
              temp.push(artist[i]);
              console.log("영상 대체작가이름" + artist[i].name);
              continue;
            }
            if (filter.soundSubtitles && artist[i].soundSubtitleCheck) {
              temp.push(artist[i]);
              console.log("영상 자막작가이름" + artist[i].name);
              continue;
            }
          }
        }
      }
      //다원 작품 조건이 들어오면
      if (filter.multifacetedWorks) {
        //각 작가의 작품에 다원이 있는지 확인
        if (artist[i].multifactedworksCheck) {
          if (!filter.altText && !filter.soundSubtitles) {
            temp.push(artist[i]);
            console.log("다원 작가이름" + artist[i].name);
            continue;
          } else if (filter.altText && filter.soundSubtitles) {
            if (artist[i].altTextCheck && artist[i].soundSubtitleCheck) {
              temp.push(artist[i]);
              console.log("다원 대체자막 작가이름" + artist[i].name);
              continue;
            }
          } else {
            if (filter.altText && artist[i].altTextCheck) {
              temp.push(artist[i]);
              console.log("다원 대체작가이름" + artist[i].name);
              continue;
            }
            if (filter.soundSubtitles && artist[i].soundSubtitleCheck) {
              temp.push(artist[i]);
              console.log("다원 자막작가이름" + artist[i].name);
              continue;
            }
          }
        }
      }
    }

    temp.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    setArtistInfoList(temp);
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
