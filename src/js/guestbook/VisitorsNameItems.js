import React, { useState, useEffect, useRef } from "react";

import GuestBookNameBtn from "../../assets/images/guestbook-name-btn.png";

import VisitorsNameList from "./VisitorsNameList";

import _ from "lodash";

import "../../assets/sass/visitorsNameItems.scss";

const VisitorsNameItems = () => {
  const [nameInput, setNameInput] = useState("");

  const onChange = (e) => {
    setNameInput(e.target.value);
  };

  const [visitors, setVisitors] = useState([
    {
      id: 1,
      visitorName: "최윤식",
      visitDate: "2021.12.7",
    },
    {
      id: 2,
      visitorName: "배민진",
      visitDate: "2021.12.6",
    },
    {
      id: 3,
      visitorName: "최희수",
      visitDate: "2021.12.5",
    },
  ]);

  const nextId = useRef(4);

  useEffect(() => {
    console.log("방문자리스트 값이 설정됨");
    visitors.forEach((visitor) => {
      console.log(visitor.visitorName + "/" + visitor.visitDate);
    });
    return () => {
      console.log("방문자리스트 가 바뀌기 전..");
      visitors.forEach((visitor) => {
        console.log(visitor.visitorName);
      });
    };
  }, [visitors]);

  const onCreate = () => {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let today = year + "." + month + "." + day;

    const visitor = {
      id: nextId.current,
      visitorName: nameInput,
      visitDate: today,
    };

    const addedVisitors = visitors.concat(visitor);
    const reversedVisitors = _.orderBy(addedVisitors, "id", "desc");

    setVisitors(reversedVisitors);

    nextId.current += 1;
    setNameInput("");
  };

  return (
    <div>
      <div className="row justify-content-center visitor-name-insert">
        <div className="col-8 text-26">
          방문객 이름 : &#40;{" "}
          <input
            className="visitor-name-input"
            name="visitors-name"
            placeholder="홍길동"
            onChange={onChange}
            value={nameInput}
          />{" "}
          &#41;
        </div>
        <div className="w-100"></div>
        <div className="col-3 guestbook-name-btn-wrap" onClick={onCreate}>
          <div className="guestbook-name-btn-text text-20">
            <strong>적기</strong>
          </div>
          <div className="guestbook-name-btn-img-wrap">
            <img className="guestbook-name-btn-img" alt="guestbook-name-btn-img" src={GuestBookNameBtn}></img>
          </div>
        </div>
      </div>

      <VisitorsNameList key={visitors.length} visitors={visitors} />
    </div>
  );
};

export default VisitorsNameItems;
