import React, { useState } from "react";
import "./styles.css";

function CheckboxExample(){
    console.log("rerendered?");
    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = (event) => {
        setIsChecked(event.target.checked);
    };
    return(
        <div className="App">
            <input type="checkbox" checked={isChecked} onChange={handleChecked} />
            <span>{isChecked ? "Checked!!" : "Unchecked"}</span>{/*삼항 연산자로 체크박스 체크시 출력문 지정*/}
        </div>
    );
}

export default CheckboxExample;