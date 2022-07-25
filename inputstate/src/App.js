import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");//입력값 useState실습

  return (
    <div className="App">
      <div>{username}</div>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="여기는 인풋입니다."
        className="tweetForm__input--username"
      ></input>
      <div>{msg}</div>
      <textarea
        placeholder="여기는 텍스트 영역입니다."
        className="tweetForm__input--message"
        onChange={(event) => setMsg(event.target.value)}
        defaultValue={"hello world"}
        value={msg}
      ></textarea>
    </div>
  );
}

