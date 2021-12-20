import React, { useEffect, useState } from "react";
import Ellipse from "../../assets/images/ellipse.png";
import { data } from "../../common/store";

import "../../assets/sass/carosel.scss";

const ImageList = () => {
  const [artistInfo, setArtistInfo] = useState([]);

  useEffect(() => {
    init();
    //console.log("확인!!!!" + artistInfoList);
  }, []);

  const init = () => {
    const getData = data;

    setArtistInfo(getData.reverse());
  };

  return (
    <div className="">
      <div className="row imglist-row">
        {artistInfo.map((artist, index) => (
          <div className="row text-center imglist-item">
            <div className="col-12">
              <img className="imglist-image" src={artist.titleImage} key={index} alt={artist.name} />
            </div>

            <div className="col-12 w-100 text-center" style={{ paddingTop: 30 }}>
              <img className="imglist-ellipse" src={Ellipse} alt="ellipse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
