import React from "react";
import Ellipse from "../../assets/images/ellipse.png";

import MainCaroselImg1 from "../../assets/images/main-carosel-img1.png";
import MainCaroselImg2 from "../../assets/images/main-carosel-img2.png";
import MainCaroselImg3 from "../../assets/images/main-carosel-img3.png";
import MainCaroselImg4 from "../../assets/images/main-carosel-img4.png";
import MainCaroselImg5 from "../../assets/images/main-carosel-img5.png";
import MainCaroselImg6 from "../../assets/images/main-carosel-img6.png";
import MainCaroselImg7 from "../../assets/images/main-carosel-img7.png";
import MainCaroselImg8 from "../../assets/images/main-carosel-img8.png";
import MainCaroselImg9 from "../../assets/images/main-carosel-img9.png";
import MainCaroselImg10 from "../../assets/images/main-carosel-img10.png";

import "../../assets/sass/carosel.scss";

const ImageList = () => {
  const images = [
    {
      id: 1,
      imgSrc: MainCaroselImg1,
    },
    {
      id: 2,
      imgSrc: MainCaroselImg2,
    },
    {
      id: 3,
      imgSrc: MainCaroselImg3,
    },
    {
      id: 4,
      imgSrc: MainCaroselImg4,
    },
    {
      id: 5,
      imgSrc: MainCaroselImg5,
    },
    {
      id: 6,
      imgSrc: MainCaroselImg6,
    },
    {
      id: 7,
      imgSrc: MainCaroselImg7,
    },
    {
      id: 8,
      imgSrc: MainCaroselImg8,
    },
    {
      id: 9,
      imgSrc: MainCaroselImg9,
    },
    {
      id: 10,
      imgSrc: MainCaroselImg10,
    },
    {
      id: 11,
      imgSrc: MainCaroselImg1,
    },
    {
      id: 12,
      imgSrc: MainCaroselImg2,
    },
    {
      id: 13,
      imgSrc: MainCaroselImg3,
    },
    {
      id: 14,
      imgSrc: MainCaroselImg4,
    },
    {
      id: 15,
      imgSrc: MainCaroselImg5,
    },
    {
      id: 16,
      imgSrc: MainCaroselImg6,
    },
    {
      id: 17,
      imgSrc: MainCaroselImg7,
    },
    {
      id: 18,
      imgSrc: MainCaroselImg8,
    },
    {
      id: 19,
      imgSrc: MainCaroselImg9,
    },
    {
      id: 20,
      imgSrc: MainCaroselImg10,
    },
    {
      id: 21,
      imgSrc: MainCaroselImg1,
    },
    {
      id: 22,
      imgSrc: MainCaroselImg2,
    },
    {
      id: 23,
      imgSrc: MainCaroselImg3,
    },
    {
      id: 24,
      imgSrc: MainCaroselImg4,
    },
    {
      id: 25,
      imgSrc: MainCaroselImg5,
    },
    {
      id: 26,
      imgSrc: MainCaroselImg6,
    },
    {
      id: 27,
      imgSrc: MainCaroselImg7,
    },
    {
      id: 28,
      imgSrc: MainCaroselImg8,
    },
    {
      id: 29,
      imgSrc: MainCaroselImg9,
    },
    {
      id: 30,
      imgSrc: MainCaroselImg10,
    },
  ];

  return (
    <div className="container imglist-container">
      <div className="row imglist-row">
        {images.map((image, index) => (
          <div className="row text-center imglist-item">
            <div className="col-12">
              <img className="imglist-image" src={image.imgSrc} key={index} alt={image.id} />
            </div>
            <div className="col-12">
              <img className="imglist-ellipse" src={Ellipse} alt="ellipse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
