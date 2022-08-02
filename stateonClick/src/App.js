import React, { useState } from "react";

export default function ParentComponent() {
  const [value, setValue] = useState("날 바꿔줘!");
  const handleChangeValue = () => {
    if (value[0] === "날") {
      setValue("보여줄게 완전히 달라진 값");
    } else{
      setValue("날 바꿔줘!");
    }
    if(value[0] === "보"){
      setValue("미안해!");
    }
  };

  return (
    <div>
      <div>값은 {value} 입니다</div>
      <ChildComponent handleButtonClick={handleChangeValue} /> :
    </div>
  );
}

function ChildComponent({ handleButtonClick }) {
  const handleClick = () => {
    handleButtonClick(); // 이 버튼을 눌러서 부모의 상태를 바꿀 순 없을까?
  };

  return <button onClick={handleClick}>값 변경</button>;
}
