import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CommonFooter from "../components/CommonFooter";
import CommonHeader from "../components/CommonHeader";

import Ellipse from "../../assets/images/ellipse.png";
import FlatWorks from "../../assets/images/flat-works.png";
import ThreeDWorks from "../../assets/images/threed-works.png";
import VideoWorks from "../../assets/images/video-works.png";
import MultifacetedWorks from "../../assets/images/multifaceted-works.png";

// import AlttextWorks from "../../assets/images/alttext-works.png";
// import SoundsubWorks from "../../assets/images/soundsub-works.png";

import AltTextIcon from "../../assets/images/alt-text-icon.png";

import ScrollToTop from "../components/ScrollToTop";

import "../../assets/sass/artistDetail.scss";

const ArtistDetail = () => {
  const location = useLocation();
  const [artistInfo, setArtistInfo] = useState(location.state.artistInfo);
  const [currentTab, setCurrentTab] = useState();
  const tabRef = useRef([]);

  useEffect(() => {
    init();
    console.log(artistInfo);
  }, []);

  const init = () => {
    console.log(artistInfo);
  };

  //작품들

  return (
    <div className="container">
      <ScrollToTop />
      <CommonHeader />
      <div className="row ">
        <div className="container">
          <div className="row justify-content-center artistdetail-title">
            <div className="col-lg-9 col-12">
              <div className="row artistdetail-title-container">
                <div className="col-lg-6 artistdetail-title-wrap artistdetail-title-item">
                  <img
                    className="artistdetail-title-img"
                    alt={artistInfo.name + "작가 이미지"}
                    src={artistInfo.titleImage}
                    tabindex="0"
                  ></img>{" "}
                </div>

                <div className="col-lg-6 artistdetail-title-item">
                  <div className="row">
                    <div className="col-12 artistdetail-korean-name text-left" tabindex="0">
                      {artistInfo.name}
                    </div>
                    <div className="col-12 artistdetail-englist-name text-left" tabindex="0">
                      {artistInfo.engName}
                    </div>
                  </div>

                  <div className="w-100 my-5"></div>

                  {artistInfo.works &&
                    artistInfo.works.map((work, i) => (
                      <div
                        className="row my-2 artwork-titles"
                        onClick={() => {
                          tabRef.current[i].scrollIntoView({ behavior: "smooth" });
                          setCurrentTab(tabRef.current[i]);
                        }}
                        onKeyPress={() => {
                          tabRef.current[i].scrollIntoView({ behavior: "smooth" });
                          setCurrentTab(tabRef.current[i]);
                        }}
                        tabindex="0"
                        alt={work.type + "작품" + work.title + "보러가기"}
                      >
                        <div className="col-1 artistdetail-ellipse-img-wrap">
                          {work.type === "평면" && (
                            <img className="artistdetail-ellipse-img" alt="평면" src={FlatWorks}></img>
                          )}
                          {work.type === "입체" && (
                            <img className="artistdetail-ellipse-img" alt="입체" src={ThreeDWorks}></img>
                          )}
                          {work.type === "영상" && (
                            <img className="artistdetail-ellipse-img" alt="영상" src={VideoWorks}></img>
                          )}
                          {work.type === "다원" && (
                            <img className="artistdetail-ellipse-img" alt="다원" src={MultifacetedWorks}></img>
                          )}
                        </div>
                        <div className="col-11 artwork-title-text">{work.title}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* <p>{JSON.stringify(artistInfo.works)}</p> */}

          {artistInfo.works &&
            artistInfo.works.map((work, i) => (
              <div className="row artwork" ref={(el) => (tabRef.current[i] = el)}>
                {work.images.map((image, index) => (
                  <div className="col-12 text-center" alt={image.type + "작품"} tabIndex="0">
                    {image.type === "video" ? (
                      <iframe
                        width="100%"
                        height="550"
                        src={`https://www.youtube.com/embed/${image.url.split("/")[image.url.split("/").length - 1]}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        tabindex="0"
                      />
                    ) : (
                      <img
                        className="artwork-img img-fluid"
                        alt={artistInfo.name + "작가 이미지"}
                        src={image.url}
                        tabindex="0"
                      />
                    )}
                  </div>
                ))}

                <div className="col-12 artwork-detail-title-text text-center" tabindex="0">
                  {work.title}
                </div>
                {work.text ? (
                  <div className="col-10">
                    <img
                      className="artwork-descripton-icon-img"
                      alt="artwork-descripton-icon-img"
                      src={AltTextIcon}
                    ></img>
                    <p className="artwork-description" tabindex="0">
                      &nbsp; &nbsp; &nbsp;{work.text}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {work.youtube.map((link, index) => (
                  <div className="col-10 text-center mt-3" tabindex="0">
                    <a href={link} target="_blank">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          {artistInfo.titleText !== "" && (
            <div className="row" style={{ paddingBottom: 400 }}>
              <div className="w-100"></div>
              <div className="col-12 special-character font1 text-center">St m , ※ ... ?</div>
              {/* <div className="col-3 special-character font1">, ※ ... ?</div> */}
              <div className="w-100"></div>
              <div className="artwork-contents">
                <p tabindex="0">{artistInfo.titleText}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default ArtistDetail;
