import React, { useState } from "react";
import "./styles.css";

function SelectExample() {
  const [choice, setChoice] = useState("apple");

  const fruits = ["apple", "orange", "pineapple", "strawberry", "grape"];
  const options = fruits.map((fruit) => {
    return <option key={fruit.toString()}>{fruit}</option>; //key값 추가 시 에러 해결
  });
  console.log(choice);
  const handleFruit = (event) => {
    setChoice(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={handleFruit}>{options}</select>
      <h3>You choose "{choice}"</h3>
    </div>
  );
}

export default SelectExample;
