import React from "react";
import Ellipse from "../../assets/images/ellipse.png";
import SearchOption1 from "../../assets/images/searchOption1.png";
import SearchOption2 from "../../assets/images/searchOption2.png";
import SearchOption3 from "../../assets/images/searchOption3.png";
import SearchOption4 from "../../assets/images/searchOption4.png";
import SearchOption5 from "../../assets/images/searchOption5.png";
import SearchOption6 from "../../assets/images/searchOption6.png";

const ModalOption = ({
  searchOption,
  setSearchOption,
  viewY,
  viewN,
  searchOptionView,
  setSearchOptionView,
  option,
}) => {
  let questionText = "";
  let searchOptionImg;
  let korean;
  let className;
  let addText;

  if (option === "flatWorks") {
    questionText = "평면 작품을 볼까요?";
    searchOptionImg = SearchOption1;
    korean = "평면 작품";
    className = "search-option1-img";
  }
  if (option === "threeDWorks") {
    questionText = "입체 작품을 볼까요?";
    searchOptionImg = SearchOption2;
    korean = "입체 작품";
    className = "search-option2-img";
  }
  if (option === "videoWorks") {
    questionText = "영상 작품을 볼까요?";
    searchOptionImg = SearchOption3;
    korean = "영상 작품";
    className = "search-option3-img";
  }
  if (option === "multifacetedWorks") {
    questionText = "다원 작품을 볼까요?";
    searchOptionImg = SearchOption4;
    korean = "다원 작품";
    className = "search-option4-img";
  }
  if (option === "altText") {
    questionText = "대체 텍스트 있는 작품만?";
    searchOptionImg = SearchOption5;
    korean = "대체 텍스트";
    className = "search-option5-img";
    addText = "작품의 모습을 시각적으로 설명한 \n대체 텍스트";
  }
  if (option === "soundSubtitles") {
    questionText = "사운드 자막 있는 작품만?";
    searchOptionImg = SearchOption6;
    korean = "사운드 자막";
    className = "search-option6-img";
    addText = "작품의 소리를 언어로 번역한 \n사운드 자막";
  }

  ontoggle = (option, value) => {
    switch (option) {
      case "flatWorks": {
        setSearchOptionView({
          ...searchOptionView,
          flatWorksViewY: value ? true : false,
          flatWorksViewN: value ? false : true,
        });
        viewY = searchOptionView.flatWorksViewY;
        viewN = searchOptionView.flatWorksViewN;
        setSearchOption({ ...searchOption, flatWorks: value ? true : false });
        break;
      }
      case "threeDWorks": {
        setSearchOptionView({
          ...searchOptionView,
          threeDWorksViewY: value ? true : false,
          threeDWorksViewN: value ? false : true,
        });
        viewY = searchOptionView.threeDWorksViewY;
        viewN = searchOptionView.threeDWorksViewN;
        setSearchOption({ ...searchOption, threeDWorks: value ? true : false });
        break;
      }
      case "videoWorks": {
        setSearchOptionView({
          ...searchOptionView,
          videoWorksViewY: value ? true : false,
          videoWorksViewN: value ? false : true,
        });
        viewY = searchOptionView.videoWorksViewY;
        viewN = searchOptionView.videoWorksViewN;
        setSearchOption({ ...searchOption, videoWorks: value ? true : false });
        break;
      }

      case "multifacetedWorks": {
        setSearchOptionView({
          ...searchOptionView,
          multifacetedWorksViewY: value ? true : false,
          multifacetedWorksViewN: value ? false : true,
        });
        viewY = searchOptionView.multifacetedWorksViewY;
        viewN = searchOptionView.multifacetedWorksViewN;
        setSearchOption({ ...searchOption, multifacetedWorks: value ? true : false });
        break;
      }

      case "altText": {
        setSearchOptionView({
          ...searchOptionView,
          altTextViewY: value ? true : false,
          altTextViewN: value ? false : true,
        });
        viewY = searchOptionView.altTextViewY;
        viewN = searchOptionView.altTextViewN;
        setSearchOption({ ...searchOption, altText: value ? true : false });
        break;
      }

      case "soundSubtitles": {
        setSearchOptionView({
          ...searchOptionView,
          soundSubtitlesViewY: value ? true : false,
          soundSubtitlesViewN: value ? false : true,
        });
        setSearchOption({ ...searchOption, soundSubtitles: value ? true : false });
        break;
      }

      default: {
        console.log("에러남");
        throw new Error(`Unhanded action type: ${option}`);
      }
    }
    console.log(searchOption);
  };

  return (
    <div className="row my-3">
      <div className="col-8">
        <div className="row">
          <div className="col-12 text-left text-sz18">{questionText}</div>
          {(option === "altText" || option === "soundSubtitles") && (
            <div className="col-12 text-left text-sz14 addtext">{addText}</div>
          )}
        </div>
      </div>
      <div className="col-2 question-ellipse">
        <div className="">
          <img
            className="question-ellipse-img"
            alt="ellipse"
            src={Ellipse}
            onClick={() => ontoggle(option, true)}
          ></img>
        </div>
        {viewY && (
          <div className="question-ellipse-img-overlay">
            <img className={className} alt={korean + " 선택함"} src={searchOptionImg}></img>
          </div>
        )}
      </div>
      <div className="col-2 question-ellipse">
        <div className="">
          <img
            className="question-ellipse-img"
            alt="ellipse"
            src={Ellipse}
            onClick={() => ontoggle(option, false)}
          ></img>
        </div>
        {viewN && (
          <div className="question-ellipse-img-overlay">
            <img className={className} alt={korean + " 선택하지 않음"} src={searchOptionImg}></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalOption;
