import React, { useState, useEffect } from "react";
// import _ from "lodash";
import "../../assets/sass/greetingsItems.scss";
import GuestBookGreetingsBtn from "../../assets/images/guestbook-greetings-btn.png";
import { getData, postNameBoard } from "../../common/actions";

const GreetingsItems = () => {
  // const nextId = useRef(2);
  const [inputs, setInputs] = useState({
    recipient: "",
    maintext: "",
    sender: "",
  });
  const [greetings, setGreetings] = useState([
    // {
    //   id: 1,
    //   recipient: "최윤식",
    //   maintext:
    //     "이것은 더미 텍스트입니다. 관객이 방명록을 남길 수 있습니다. 위 입력창에 적어 보낸  메세지가 이렇게 표시됩니다. 최근 메세지일수록 위에 배치됩니다. 세 줄까지 생각중입니다. 세 줄을 꽉 채워도 공백 포함 130자 쯤 됩니다. ",
    //   sender: "홍길동",
    // },
  ]);
  const { recipient, maintext, sender } = inputs;

  const init = async () => {
    const nameData = await getData("sayhelloboard");

    setGreetings(nameData.reverse());
  };

  useEffect(() => {
    init();
    return () => {};
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = async () => {
    if (inputs.recipient === "") return alert("받는 사람을 입력해주세요.");
    if (inputs.maintext === "") return alert("내용을 입력해주세요.");
    if (inputs.sender === "") return alert("보내는 사람을 입력해주세요.");

    const greeting = {
      id: Date.now(),
      recipient: recipient,
      maintext: maintext,
      sender: sender,
      collection: "sayhelloboard",
    };

    const post = await postNameBoard(greeting);

    setGreetings((prev) => [...prev, greeting]);

    // const addedGreetings = greetings.concat(greeting);
    // const reverseGreetings = _.sortBy(addedGreetings, "id").reverse();

    setInputs({
      recipient: "",
      maintext: "",
      sender: "",
    });
    init();
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-8 writing-greeting text-size20">
          <div className="row">
            <div className="col-6">
              <input
                className="greeting-name-input"
                name="recipient"
                value={recipient}
                onChange={onChange}
                alt="받는 사람"
              />
              에게
            </div>
            <div
              className="col-6 greeting-send-btn-wrap"
              onClick={onCreate}
              onKeyPress={onCreate}
              tabindex="0"
              alt="보내기"
            >
              <img className="greeting-send-btn-img" alt="보내기 버튼" src={GuestBookGreetingsBtn}></img>
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
            <div className="col-6 text-right">
              <input className="greeting-name-input" name="sender" value={sender} onChange={onChange} alt="보낸 사람" />
              드림
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center greeting-list">
        {greetings.reverse().map((greeting) => (
          <div className="col-8 greeting-card">
            <div className="row">
              <div className="col-6 text-left text-size20" tabindex="0">
                {greeting.recipient}에게
              </div>
            </div>
            <div className="row justify-content-center greeting-card-maintext">
              <div className="col-12 text-size16" tabindex="0">
                {greeting.maintext}
              </div>
            </div>
            <div className="row justify-content-end greeting-card-bottom">
              <div className="col-6 text-right text-size20" tabindex="0">
                {greeting.sender} 드림
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreetingsItems;
