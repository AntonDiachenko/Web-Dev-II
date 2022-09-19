import React, {useState} from "react";

const StateTutorial = () => {
    const [inputValue, setInputValue] = useState("...");

    let changeText = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    

    return (
        <div> 
            <input placeholder="type smth..." onChange={changeText}/>
            {inputValue} 
        </div>
    );
};

export default StateTutorial;