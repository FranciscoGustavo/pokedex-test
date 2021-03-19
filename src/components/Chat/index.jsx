import React, { useState } from "react";
import { BiMessageSquareDetail, BiSend } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { askQuestion } from "../../api";
import "./styles.css";

const Chat = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [listMsgs, setListMsgs] = useState([]);
  const [handleChat, setHandleChat] = useState("close");

  const onChange = (_event) => {
    const { value } = _event.target;
    setInputMessage(value);
  };

  const onSendMessage = () => {
    const oldListMessages = [...listMsgs];
    const makeQuestion = async () => {
      oldListMessages.unshift({ message: inputMessage, type: "sender" });
      setListMsgs([...oldListMessages]);
      setInputMessage("");
      const response = await askQuestion({
        key: "8203b5872ebf4cbb11b1ff27aa88d1511d9c1cbb",
        question: inputMessage,
      });
      oldListMessages.unshift(response);
      setListMsgs([...oldListMessages]);
    };

    if (inputMessage !== "" && inputMessage !== null) {
      makeQuestion();
    }
  };

  const onKeyUpSendMessage = (_event) => {
    const { keyCode } = _event;
    if (keyCode === 13) onSendMessage();
  };

  const onClickHandleChat = () => {
    if (handleChat === "open") return setHandleChat("close");
    return setHandleChat("open");
  };

  return (
    <div className="chat">
      <button className="chat__btnFloat" onClick={onClickHandleChat}>
        <BiMessageSquareDetail />
      </button>

      <div className={`chat__container chat__container-${handleChat}`}>
        <div className="chat__header">
          <h4>Welcome to Pokedex</h4>
          <button className="chat__close" onClick={onClickHandleChat}>
            <AiOutlineCloseCircle />
          </button>
        </div>

        <div className="chat__body">
          <div className="chat__messages">
            {listMsgs.map(({ type, message }, idx) => (
              <div
                key={`${idx}-${type}`}
                className={`chat__message chat__message-${type}`}
              >
                <p>{message}</p>
              </div>
            ))}
          </div>

          <div className="chat__boxMessage">
            <input
              className="chat__boxInput"
              type="text"
              name="boxMessage"
              placeholder="Write a message"
              onChange={onChange}
              onKeyUp={onKeyUpSendMessage}
              value={inputMessage}
            />
            <button className="chat__boxSend" onClick={onSendMessage}>
              <BiSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
