import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CommonFooter from "../components/CommonFooter";
import CommonHeader from "../components/CommonHeader";

import Ellipse from "../../assets/images/ellipse.png";
import AltTextIcon from "../../assets/images/alt-text-icon.png";

import ArtistDetailArtworkImg from "../../assets/images/artistdetail-artwork-img.png";

import Artwork21 from "../../assets/images/artwork2-1.png";
import Artwork22 from "../../assets/images/artwork2-2.png";
import Artwork23 from "../../assets/images/artwork2-3.png";

import Artwork31 from "../../assets/images/artwork3-1.png";
import Artwork32 from "../../assets/images/artwork3-2.png";
import Artwork33 from "../../assets/images/artwork3-3.png";
import Artwork34 from "../../assets/images/artwork3-4.png";
import ScrollToTop from "../components/ScrollToTop";

import "../../assets/sass/artistDetail.scss";

const ArtistDetail = () => {
  const location = useLocation();
  const artistInfo = location.state.artistInfo;
  const [currentTab, setCurrentTab] = useState();
  const [data, setData] = useState({});
  const tabRef = useRef([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {};

  return (
    <div className="container">
      <ScrollToTop />
      <CommonHeader />
      <div className="row ">
        <div className="container">
          <div className="row justify-content-center artistdetail-title">
            <div className="col-9">
              <div className="row artistdetail-title-container">
                <div className="col-6 artistdetail-title-wrap artistdetail-title-item">
                  <img className="artistdetail-title-img" alt="artistdetail-title-img" src={artistInfo.artistImg}></img>{" "}
                </div>

                <div className="col-6 artistdetail-title-item">
                  <div className="row">
                    <div className="col-12 artistdetail-korean-name text-left">{artistInfo.koreanName}</div>
                    <div className="col-12 artistdetail-englist-name text-left">{artistInfo.englishName}</div>
                  </div>

                  <div className="w-100 my-5"></div>

                  <div
                    className="row my-2 artwork-titles"
                    id="artwork1"
                    onClick={() => {
                      tabRef.current[0].scrollIntoView({ behavior: "smooth" });
                      setCurrentTab(tabRef.current[0]);
                    }}
                  >
                    <div className="col-1 artistdetail-ellipse-img-wrap">
                      <img className="artistdetail-ellipse-img" alt="artistdetail-ellipse-img" src={Ellipse}></img>
                    </div>
                    <div className="col-11 artwork-title-text">작품명1, 2021, 싱글 채널 비디오</div>
                  </div>

                  <div
                    className="row my-2 artwork-titles"
                    id="artwork2"
                    onClick={() => {
                      tabRef.current[1].scrollIntoView({ behavior: "smooth" });
                      setCurrentTab(tabRef.current[1]);
                    }}
                  >
                    <div className="col-1 artistdetail-ellipse-img-wrap">
                      <img className="artistdetail-ellipse-img" alt="artistdetail-ellipse-img" src={Ellipse}></img>
                    </div>
                    <div className="col-11 artwork-title-text">작품명2, 2021, 캔버스에 유화</div>
                  </div>

                  <div
                    className="row my-2 artwork-titles"
                    id="artwork3"
                    onClick={() => {
                      tabRef.current[2].scrollIntoView({ behavior: "smooth" });
                      setCurrentTab(tabRef.current[2]);
                    }}
                  >
                    <div className="col-1 artistdetail-ellipse-img-wrap">
                      <img className="artistdetail-ellipse-img" alt="artistdetail-ellipse-img" src={Ellipse}></img>
                    </div>
                    <div className="col-11 artwork-title-text">작품명3, 2021, 도자 오브제</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row artwork" ref={(el) => (tabRef.current[0] = el)}>
            <div className="col-12">
              <img className="artwork-img img-fluid" alt="artwork-img" src={ArtistDetailArtworkImg}></img>
            </div>
            <div className="col-12 artwork-detail-title-text text-center">작품명1, 2021, 싱글 채널 비디오</div>
            <div className="col-10">
              <img className="artwork-descripton-icon-img" alt="artwork-descripton-icon-img" src={AltTextIcon}></img>
              <p className="artwork-description">
                {" "}
                여러가지 과일이 한데 모여있다. 주로 주황색의 과일이며, 종종 초록색 과일도 섞여있다. 과일들은 모두
                바구니에 담겨 있다. 영상 한 가운데에는 ‘PANTONE’ 이라고 쓰여있는 폴라로이드 모양의 흰색 사각형이
                위치한다. 이 사각형 프레임 안에는 초록빛 라임이 보인다. 이윽고 서로 다른 색의 과일들이 하나씩 움직이며
                화면 가운데로 모인다.
              </p>
            </div>
          </div>

          <div className="row artwork" ref={(el) => (tabRef.current[1] = el)}>
            <div className="col-12 text-center">
              <img className="artwork21-img img-fluid" alt="artwork21-img" src={Artwork21}></img>
            </div>
            <div className="col-12 text-center">
              <img className="artwork22-img img-fluid" alt="artwork22-img" src={Artwork22}></img>
            </div>
            <div className="col-12 text-center">
              <img className="artwork23-img img-fluid" alt="artwork22-img" src={Artwork23}></img>
            </div>

            <div className="col-12 artwork-detail-title-text text-center">작품명2, 2021, 캔버스에 유화</div>
            <div className="col-10">
              <img className="artwork-descripton-icon-img" alt="artwork-descripton-icon-img" src={AltTextIcon}></img>
              <p className="artwork-description">
                {" "}
                새까만 배경에 6개의 과일과 야채가 있다. 파인애플, 호박, 귤, 사과, 바나나이다. 파인애플이 제일 뒤에 있고,
                파인애플보다 작은 호박, 귤이 놓여있다. 바나나가 제일 앞에 놓여있으며 바나나의 꼭지는 덜 익어서
                초록색이고 몸통은 노란색으로 잘 익은 듯 보인다. 검은색 배경과 과일은 강한 대조를 이룬다.
              </p>
            </div>
          </div>

          <div className="row artwork" ref={(el) => (tabRef.current[2] = el)}>
            <div className="col-12 text-center">
              <img className="artwork31-img img-fluid" alt="artwork31-img" src={Artwork31}></img>
            </div>
            <div className="col-12 text-center">
              <img className="artwork32-img img-fluid" alt="artwork32-img" src={Artwork32}></img>
            </div>
            <div className="col-12 text-center">
              <img className="artwork33-img img-fluid" alt="artwork33-img" src={Artwork33}></img>
            </div>
            <div className="col-12 text-center">
              <img className="artwork34-img img-fluid" alt="artwork34-img" src={Artwork34}></img>
            </div>

            <div className="col-12 artwork-detail-title-text text-center">작품명3, 2021, 도자 오브제</div>
            <div className="col-10">
              <img className="artwork-descripton-icon-img" alt="artwork-descripton-icon-img" src={AltTextIcon}></img>
              <p className="artwork-description">
                {" "}
                도자로 만든 여러가지 오브제들과 고양이가 있다. 도자 오브제와 함께 있는 고양이들의 표정은 익살스러워
                보인다. 여러 종류의 과일이 있으며 고양이와 과일은 모두 책상 위에 올라가있다.
              </p>
            </div>

            <div className="w-100"></div>
            <div className="col-3 special-character font1">St m</div>
            <div className="col-3 special-character font1">, ※ ... ?</div>
            <div className="w-100"></div>
            <div className="col-11 artwork-contents">
              <p>
                &emsp;&emsp;&emsp;&emsp;그것은 앤이 마릴라에게 한 말이 아니라 힘들어하던 나에게 다독여 준 말 같았다.
                돌이켜보면 걱정했던 일들은 걱정만큼 실제 일어나지 않았다. 늘 ‘사표 전야’같았던 날들이었지만 그런대로
                그날은 제법 오래 이어져, 나는 그후로도 한동안 회사에 다닐 수 있었다. 내일 벌어질 일을 미리 걱정하지
                않고, 불어보는 바람을 느끼며 봄이 왔음을 알아차리는 능력, 현자들은 그것을 현재 살아내는 능력, 즉 ‘카르페
                디엠(현재를 즐겨라!)’이라고 불렀다. H가 언젠가 지나가듯 내게 말했었다. 행복은 지속적인 감정이 아니기
                때문에 가장 행복해지는 방법은 ‘큰 행복’이 아니라 ‘작은 행복’을 ‘자주’느끼는 것이라고. 그것은 앤이
                마릴라에게 한 말이 아니라 힘들어하던 나에게 다독여 준 말 같았다. 돌이켜보면 걱정했던 일들은 걱정만큼
                실제 일어나지 않았다. <br />
                <br />
                <br />
                &emsp;&emsp;&emsp;&emsp;이것은 스테이트먼트 자리를 가늠하기 위한 더미 텍스트입니다. 앤이 마릴라에게 한
                말이 아니라 힘들어하던 나에게 다독여 준 말 같았다. 돌이켜보면 걱정했던 일들은 걱정만큼 실제 일어나지
                않았다. 늘 ‘사표 전야’같았던 날들이었지만 그런대로 그날은 제법 오래 이어져, 나는 그후로도 한동안 회사에
                다닐 수 있었다. 내일 벌어질 일을 미리 걱정하지 않고, 불어보는 바람을 느끼며 봄이 왔음을 알아차리는 능력,
                현자들은 그것을 현재 살아내는 능력, 즉 ‘카르페 디엠(현재를 즐겨라!)’이라고 불렀다. H가 언젠가 지나가듯
                내게 말했었다.
                <br />
                <br />
                <br />
                &emsp;&emsp;&emsp;&emsp;다들 스테이트먼트를 얼마나 길게 쓸까? 행복은 지속적인 감정이 아니기 때문에 가장
                행복해지는 방법은 ‘큰 행복’이 아니라 ‘작은 행복’을 ‘자주’느끼는 것이라고. 그것은 앤이 마릴라에게 한 말이
                아니라 힘들어하던 나에게 다독여 준 말 같았다. 돌이켜보면 걱정했던 일들은 걱정만큼 실제 일어나지 않았다.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default ArtistDetail;
