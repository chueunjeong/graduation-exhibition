import React, { useState, useEffect, useRef } from "react";

import GuestBookNameBtn from "../../assets/images/guestbook-name-btn.png";

import VisitorsNameList from "./VisitorsNameList";

import _ from "lodash";

import "../../assets/sass/visitorsNameItems.scss";

const VisitorsNameItems = () => {
  const [nameInput, setNameInput] = useState("");
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    init();
  }, []);

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

  const init = () => {
    // get data from server
    const getData = [
      {
        id: "123123",
        visitorName: "최윤식",
        visitDate: new Date(),
      },
      {
        id: "12443123",
        visitorName: "배민진",
        visitDate: new Date(),
      },
      {
        id: "12312223",
        visitorName: "최희수",
        visitDate: new Date(),
      },
    ];

    setVisitors(getData);
  };

  const onChange = (e) => {
    setNameInput(e.target.value);
  };

  // const nextId = useRef(4);

  const onCreate = () => {
    if (nameInput === "") return;

    const visitor = {
      id: Date.now(),
      visitorName: nameInput,
      visitDate: new Date(),
    };

    setVisitors((prev) => [...prev, visitor]);

    // const addedVisitors = visitors.concat(visitor);
    // const reversedVisitors = _.orderBy(addedVisitors, "id", "desc");
    // nextId.current += 1;

    setNameInput("");
    // init();
  };

  return (
    <div>
      <div className="row justify-content-center visitor-name-insert">
        <div className="col-8 text-center visitor-name-input-text">
          방문객 이름 : &#40;
          <input
            className="visitor-name-input text-center"
            name="visitors-name"
            placeholder=""
            onChange={onChange}
            value={nameInput}
          />
          &#41;
        </div>
        <div className="w-100"></div>
        <div className="col-3 guestbook-name-btn-wrap pointer" onClick={onCreate}>
          <div className="guestbook-name-btn-text">
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
