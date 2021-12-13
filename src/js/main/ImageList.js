import React from "react";
import Ellipse from "../../assets/images/ellipse.png";
import "../../assets/sass/Image.scss";

const ImageList = () => {
  const images = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/id/1/150",
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/id/2/150",
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/id/3/150",
    },
    {
      id: 4,
      imgUrl: "https://picsum.photos/id/4/150",
    },
    {
      id: 5,
      imgUrl: "https://picsum.photos/id/5/150",
    },
    {
      id: 6,
      imgUrl: "https://picsum.photos/id/6/150",
    },
    {
      id: 7,
      imgUrl: "https://picsum.photos/id/7/150",
    },
    {
      id: 8,
      imgUrl: "https://picsum.photos/id/8/150",
    },
    {
      id: 9,
      imgUrl: "https://picsum.photos/id/9/150",
    },
    {
      id: 10,
      imgUrl: "https://picsum.photos/id/10/150",
    },
  ];

  return (
    <div className="row artwork-list">
      {images.map((image, index) => (
        <div className="col text-center artwork">
          <img className="artwork-image" src={image.imgUrl} key={index} alt={image.id} />
          <img className="ellipse" src={Ellipse} alt="ellipse" />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
