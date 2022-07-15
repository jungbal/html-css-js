import React, { useState } from "react";
import "./styles.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (el) => {
    setShowPopup(el.target.value); // Pop up 의 open/close 상태에 따라
    // 현재 state 가 업데이트 되는 함수
  };

  return (
    <div className="App">
      <h1>Fix me to open Pop Up</h1>
      <button className="open" onClick={togglePopup} value="false">
        Open me
      </button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <h2>Success!</h2>
            <button className="close" onClick={togglePopup}>
              Close me
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
