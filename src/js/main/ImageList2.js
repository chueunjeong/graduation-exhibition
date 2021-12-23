import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ellipse from "../../assets/images/ellipse.png";
import { data } from "../../common/store";

import "../../assets/sass/carosel.scss";

const ImageList = () => {
  const navigate = useNavigate();
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const getData = data;

    setArtistList(getData);
  };
  const onChangePage = (index) => {
    navigate("/artistdetail", { state: { artistInfo: artistList[index] } });
  };
  //본문
  return (
    <div className="">
      <div className="row imglist-row">
        {artistList.map((artist, index) => (
          <div
            className="row text-center imglist-item2"
            onClick={() => onChangePage(index)}
            onKeyPress={() => onChangePage(index)}
          >
            <div className="col-12">
              <img className="imglist-image" src={artist.titleImage} key={index} alt={artist.name} />
            </div>
            <div className="col-12  w-100 text-center" style={{ paddingTop: 30 }}>
              <img className="imglist-ellipse" src={Ellipse} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
