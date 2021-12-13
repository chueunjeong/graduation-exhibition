import React, { useRef, useState } from "react";
import _ from "lodash";
import "../../assets/sass/greetingsItems.scss";
import GuestBookGreetingsBtn from "../../assets/images/guestbook-greetings-btn.png";

const GreetingsItems = () => {
  const [inputs, setInputs] = useState({
    recipient: "",
    maintext: "",
    sender: "",
  });
  const { recipient, maintext, sender } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [greetings, setGreetings] = useState([
    {
      id: 1,
      recipient: "최윤식",
      maintext:
        "이것은 더미 텍스트입니다. 관객이 방명록을 남길 수 있습니다. 위 입력창에 적어 보낸  메세지가 이렇게 표시됩니다. 최근 메세지일수록 위에 배치됩니다. 세 줄까지 생각중입니다. 세 줄을 꽉 채워도 공백 포함 130자 쯤 됩니다. ",
      sender: "홍길동",
    },
  ]);

  const nextId = useRef(2);

  const onCreate = () => {
    const greeting = {
      id: nextId.current,
      recipient,
      maintext,
      sender,
    };

    const addedGreetings = greetings.concat(greeting);
    const reverseGreetings = _.sortBy(addedGreetings, "id").reverse();

    setGreetings(reverseGreetings);

    setInputs({
      recipient: "",
      maintext: "",
      sender: "",
    });
    nextId.current += 1;
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-8 writing-greeting text-20">
          <div className="row">
            <div className="col-6">
              <input
                className="greeting-name-input"
                name="recipient"
                placeholder="홍길동"
                value={recipient}
                onChange={onChange}
              />
              에게
            </div>
            <div className="col-6 text-left" onClick={onCreate}>
              <img className="greeting-send-btn-img" alt="greeting-send-btn" src={GuestBookGreetingsBtn}></img>
            </div>
          </div>

          <div className="row justify-content-center writing-greeting-textbox">
            <textarea
              className="greeting-send-text"
              name="maintext"
              value={maintext}
              onChange={onChange}
              rows="3"
              cols="40"
            >
              작가에게 인사말을 적어주세요.
            </textarea>
          </div>

          <div className="row justify-content-end">
            <div className="col-6">
              <input
                className="greeting-name-input"
                name="sender"
                value={sender}
                onChange={onChange}
                placeholder="홍길동"
              />
              드림
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center greeting-list">
        {greetings.map((greeting) => (
          <div className="col-8 greeting-card">
            <div className="row">
              <div className="col-6 text-left text-20">
                {greeting.id}
                {greeting.recipient}에게
              </div>
            </div>
            <div className="row justify-content-center greeting-card-maintext">
              <div className="col-12">{greeting.maintext}</div>
            </div>
            <div className="row justify-content-end greeting-card-bottom">
              <div className="col-6 text-right text-20">{greeting.sender} 드림</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreetingsItems;
