import "./styles.css";
import React, { useState } from "react";

function NameForm(){
    const [named, setNamed] = useState("");//useState 실습

    const handleChange = (el) => {
        setNamed(el.target.value);
    };

    const handleClick = () => {
        alert(named);
    };

    return(
        <div className="App">
            <h1>Event handler practice</h1>
            <input type="text" value={named} onChange={handleChange}></input>
            <button onClick={handleClick}>Button</button>
            <button onClick={() => alert(named)}>Button</button>
            <h3>{named}</h3>
        </div>
    );
}

export default NameForm;