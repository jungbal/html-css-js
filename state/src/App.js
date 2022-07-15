import React, { useState } from "react";
import "./styles.css";

function CheckboxExample(){
    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = (event) => {
        setIsChecked(event.target.checked);
    };
    return(
        <div className="App">
            <input type="checkbox" checked={isChecked} onChange={handleChecked} />
            <span>{isChecked ? "Checked!!" : "Unchecked"}</span>
        </div>
    );
}

export default CheckboxExample;