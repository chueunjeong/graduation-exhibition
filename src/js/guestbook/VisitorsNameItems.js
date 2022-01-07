import React, { useState, useEffect, useRef } from "react";

import GuestBookNameBtn from "../../assets/images/guestbook-name-btn.png";

import VisitorsNameList from "./VisitorsNameList";

import _ from "lodash";

import "../../assets/sass/visitorsNameItems.scss";
import { getData, postNameBoard } from "../../common/actions";

const VisitorsNameItems = () => {
  const [nameInput, setNameInput] = useState("");
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    console.log("방문자리스트 값이 설정됨");
    // visitors.forEach((visitor) => {
    //   console.log(visitor.visitorName + "/" + visitor.visitDate);
    // });

    return () => {
      console.log("방문자리스트 가 바뀌기 전..");
      // visitors.forEach((visitor) => {
      //   console.log(visitor.visitorName);
      // });
    };
  }, [visitors]);

  const init = async () => {
    const nameData = await getData("nameboard");
    // console.log("nameData===>", nameData);

    let temp = [...nameData];
    temp.sort((a, b) => b.timestamp - a.timestamp);

    console.log("tempData", temp);

    setVisitors(temp);
  };

  const onChange = (e) => {
    setNameInput(e.target.value);
  };

  // const nextId = useRef(4);

  const onCreate = async () => {
    if (nameInput === "") return;

    const visitor = {
      id: Date.now(),
      visitorName: nameInput,
      visitDate: Date.now(),
      collection: "nameboard",
    };

    const post = await postNameBoard(visitor);
    console.log("====>", post);
    setVisitors((prev) => [...prev, visitor]);
    // const addedVisitors = visitors.concat(visitor);
    // const reversedVisitors = _.orderBy(addedVisitors, "id", "desc");
    // nextId.current += 1;
    setNameInput("");
    await init();
  };

  return (
    <div>
      <div className="row justify-content-center visitor-name-insert">
        <div className="col-8 text-center visitor-name-input-text" tabindex="0">
          방문객 이름 : &#40;
          <input
            aria-label={"방문자 이름 입력하기"}
            aria-required="true"
            className="visitor-name-input text-center"
            name="visitors-name"
            placeholder=""
            onChange={onChange}
            value={nameInput}
          />
          &#41;
        </div>
        <div className="w-100"></div>
        <div
          className="col-3 guestbook-name-btn-wrap pointer"
          onClick={onCreate}
          onKeyPress={onCreate}
          tabindex="0"
          alt="이름 적기 버튼"
        >
          <div className="guestbook-name-btn-text">
            <strong>적기</strong>
          </div>
          <div className="guestbook-name-btn-img-wrap">
            <img className="guestbook-name-btn-img" alt="" src={GuestBookNameBtn}></img>
          </div>
        </div>
      </div>

      <VisitorsNameList key={visitors.length} visitors={visitors} />
    </div>
  );
};

export default VisitorsNameItems;
