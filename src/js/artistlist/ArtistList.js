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
    //console.log("확인!!!!" + artistInfoList);
  }, []);

  const init = () => {
    const getData = [
      {
        name: "윤지아",
        engName: "Jia Yoon",
        titleImage:
          "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A1/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A10.png",
        titleText: "",
        works: [
          {
            title: "<세이렌> 2021, 캔버스에 유화, 120*60cm ",
            type: "평면",
            images: [
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A1/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A11.jpg",
              },
            ],
            text: "",
            alttext: false,
            soundSubtitle: false,
            youtube: [],
          },

          {
            title:
              "<이제 그녀의 이름을 부르는 사람은 없다. 사람들은 또 새로운 사람을 찾아낼 것이다.> 2021, 종이에 오일파스텔/26*19cm",
            type: "매체",
            alttext: false,
            soundSubtitle: false,
            images: [
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A1/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A12.jpg",
              },
            ],
            text: "",
            youtube: [],
          },

          {
            title:
              "<이제 그녀의 이름을 부르는 사람은 없다. 사람들은 또 새로운 사람을 찾아낼 것이다.> 2021, 캔버스에 유채, 45.5*33.4",
            type: "평면",
            alttext: false,
            soundSubtitle: false,
            images: [
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A1/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A13.jpg",
              },
            ],
            text: "",
            youtube: [],
          },

          {
            title: "<모르스-레지스테르(Mors-Resistere) MIMI FALLEN ANGEL teaser video>, 2020, 싱글 채널 비디오 27초",
            type: "다원",
            alttext: false,
            soundSubtitle: false,
            images: [
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A1/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A14-1.png",
              },
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A1/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A14-2.jpg",
              },
            ],
            text: "",
            youtube: ["https://youtu.be/E9dX8uuHdZs"],
          },

          {
            title: "<모르스-레지스테르(Mors-Resistere)> 공식 홈페이지, 2021, 웹페이지",
            type: "다원",
            alttext: false,
            soundSubtitle: false,
            images: [
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A1/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A15-1.png",
              },
            ],
            text: "",
            youtube: ["http://mors-r.com/"],
          },
          {
            title: "<포옹의 거리> 2019, 석고 캐스팅, 가변크기",
            type: "입체",
            alttext: false,
            soundSubtitle: false,
            images: [
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A1/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A16.jpg",
              },
            ],
            youtube: [],
          },
        ],
      },

      {
        name: "이도현",
        engName: "Dohyeon Lee",
        titleImage:
          "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB0.png",
        titleText:
          "오른손으로 주먹을 쥔 다음 검지손가락을 핀다. 다른 한 손은 사진을 쥔다.흐릿한 외곽선, 늘어진 불빛의 꼬리, 가장 하얀 이빨, 아주 검은 허공을 바라본다. 눈이 닿는 곳을 의식하며 사진 위에서 곧게 뻗은 손가락을 움직인다. 입자가 거친 곳은 더 가까이 손과 눈으로 온몸을 이용해서 다가간다. 그리고 멀어진다. 곧이어 사각형 프레임이 빛을 발산하면 Tab, Click, Zoom-in/out, Swipe up. 손가락이 닿자 지시하는 이미지가 시시각각 달라진다. 통상 1초에 24개의 멈춰진 사진이 눈앞을 스쳐 지나가고, 화면 속에서 사람들은 60초 안에 메시지를 전달한다.\n영상은 짧은 시간과 한정된 재화 안에서 불특정 다수에게 침투하기 위해 발전해왔다. 가령, 일종의 클리셰를 접목하는 방식으로. 우리가 입을 떼지 않아도 연달아 배 치된 장면(Shot)과 틀어진 화면의 각도, 카메라의 움직임이 말한다. 설명하지 않아도 응시는 흔적을 남긴다. 흔적을 되짚어 추적하는 일은 영상을 생산하는 방식 자 체에 관한 물음으로 이어졌다. 흔적은 의도를 가늠하게 하고, 의도는 영상에 개입하는 주체를 가리키기 때문이다. 극장의 스크린과 전광판, SNS와 퍼스널 디바이스로 옮겨가며 얼굴 없는 주체의 욕망이 소용돌이처럼 드러날 때, 물리적인 실체를 손에 쥐고 눈동자의 움직임을 따라가던 한 개인의 경험은 어떻게 변화하고 있는가.\n 때문에 나는 시대와 맥락에 따라 미디어를 관통하며 증폭되거나 유실되는 지점을 찾아 나선다. 이를 위해 우리 눈앞에 산재한 시각적 자극의 요소를 분류하고 가능 하게 하는 조건들을 파악한 뒤 변수를 도출한다. 이 몸짓은 궁극적으로 형식과 분야의 어법을 재조직하기 위해 나아간다. 동시에 수많은 영상의 생산에 선행된 이미 지를 읽어내고 경험하며 이를 이용하여 발화하는 방식을 주시하고자 한다. 앞으로 이어질 일련의 작품들은 개인(들)에게 개입하는 풍경의 속도를 지연시키고 환상을 재정립하려는 시도에 가깝다.",
        works: [
          {
            title: "<확장된 표현형(The Exetended Phenotype)> 2020, 1'00\"",
            type: "영상",
            images: [
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB1-1.jpg",
              },
            ],
            text: "물방울이 위에서 아래로 떨어진다. 물에 파동이 일어난다. 그 순간 한 사람이 물속으로 들어간다. 물 밖의 흰 배경에서 다른 한 사람은 춤을 춘다. 물속의 사람도 똑같은 동작을 한다.",
            alttext: true,
            soundSubtitle: false,
            youtube: ["https://youtu.be/vTFmI_zQ-Kw"],
          },

          {
            title:
              "<확장된 표현형(The Exetended Phenotype) ver.2.0> 2020,  3D SLA print, lacquer, EEG data, projection mapping, dimensions variable",
            type: "다원",
            images: [
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB2-1.jpg",
              },
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB2-2.jpg",
              },
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB2-3.jpg",
              },
            ],
            text: "",
            alttext: false,
            soundSubtitle: false,
            youtube: [],
          },

          {
            title: "<repraesentatio(가제)> 2021, 16'00\"",
            type: "영상",
            images: [
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB3-1.jpg",
              },
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB3-2.jpg",
              },
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB3-3.jpg",
              },
              {
                type: "image",
                url: "https://graduation-cdn.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AB3-4.jpg",
              },
            ],
            text: "",
            alttext: false,
            soundSubtitle: false,
            youtube: [],
          },
        ],
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
