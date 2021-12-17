import React, { useEffect, useState } from "react";
import CommonFooter from "../components/CommonFooter";
import CommonHeader from "../components/CommonHeader";
import ArtistImg1 from "../../assets/images/artist-img1.png";
import ArtistItems from "./ArtistItems";
import "../../assets/sass/artistItems.scss";
import { map } from "lodash";

const ArtistList = () => {
  // const artist_count = 48;
  // const cols = 3;
  // const rows = Math.ceil(artist_count / cols);
  // const remainder = artist_count % cols;
  const [artistInfoList, setArtistInfoList] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const getData = [
      {
        id: 1,
        koreanName: "강정현",
        englishName: "Jeonghyun Kang",
        artistImg: ArtistImg1,
        includeAltText: true,
        withSoundSubtitle: true,
      },
      {
        id: 2,
        koreanName: "이름",
        englishName: "Reum Lee",
        artistImg: ArtistImg1,
        includeAltText: false,
        withSoundSubtitle: true,
      },
      {
        id: 3,
        koreanName: "박영희",
        englishName: "Yeong Hee Park",
        artistImg: ArtistImg1,
        includeAltText: false,
        withSoundSubtitle: false,
      },
      {
        id: 1,
        koreanName: "강정현",
        englishName: "Jeonghyun Kang",
        artistImg: ArtistImg1,
        includeAltText: true,
        withSoundSubtitle: true,
      },
      {
        id: 2,
        koreanName: "이름",
        englishName: "Reum Lee",
        artistImg: ArtistImg1,
        includeAltText: false,
        withSoundSubtitle: true,
      },
      {
        id: 3,
        koreanName: "박영희",
        englishName: "Yeong Hee Park",
        artistImg: ArtistImg1,
        includeAltText: false,
        withSoundSubtitle: false,
      },
      {
        id: 1,
        koreanName: "강정현",
        englishName: "Jeonghyun Kang",
        artistImg: ArtistImg1,
        includeAltText: true,
        withSoundSubtitle: true,
      },
      {
        id: 2,
        koreanName: "이름",
        englishName: "Reum Lee",
        artistImg: ArtistImg1,
        includeAltText: false,
        withSoundSubtitle: true,
      },
      {
        id: 3,
        koreanName: "박영희",
        englishName: "Yeong Hee Park",
        artistImg: ArtistImg1,
        includeAltText: false,
        withSoundSubtitle: false,
      },
      {
        id: 1,
        koreanName: "강정현",
        englishName: "Jeonghyun Kang",
        artistImg: ArtistImg1,
        includeAltText: true,
        withSoundSubtitle: true,
      },
      {
        id: 2,
        koreanName: "이름",
        englishName: "Reum Lee",
        artistImg: ArtistImg1,
        includeAltText: false,
        withSoundSubtitle: true,
      },
      {
        id: 3,
        koreanName: "박영희",
        englishName: "Yeong Hee Park",
        artistImg: ArtistImg1,
        includeAltText: false,
        withSoundSubtitle: false,
      },
    ];

    setArtistInfoList(getData);
  };

  // const artistListArr = () => {
  //   const result = [];
  //   for (let i = 0; i < rows; i++) {
  //     result.push(
  //       <div className="row artist-list" key={i}>
  //         <ArtistItems artistInfo={artistInfoList[0]} />
  //         <ArtistItems artistInfo={artistInfoList[1]} />
  //         <ArtistItems artistInfo={artistInfoList[2]} />
  //       </div>,
  //     );

  //     if (i === rows - 1 && remainder !== 0) {
  //       if (remainder === 1) {
  //         result.push(
  //           <div className="row artist-list" key={i + 1}>
  //             <ArtistItems artistInfo={artistInfoList[1]} />
  //           </div>,
  //         );
  //       }
  //       if (remainder === 2) {
  //         result.push(
  //           <div className="row artist-list" key={i + 1}>
  //             <ArtistItems artistInfo={artistInfoList[1]} />
  //             <ArtistItems artistInfo={artistInfoList[2]} />
  //           </div>,
  //         );
  //       }
  //     }
  //   }

  //   return result;
  // };

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
