import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleClick = (e, action) => {
        switch (action) {
            case "add":
                setCounter(counter + 1);
                break;
            case "minus":
                setCounter(counter - 1);
                break;
            case "reset":
                setCounter(0);
                break;
        }
    }

    // Calculate color directly based on counter value
    const getColorClass = () => {
        if (counter < 0) return "counter-text-red";
        if (counter > 0) return "counter-text-green";
        return "";
    };

    return (
        <div className="counter-container">
            <span className={`counter-text ${getColorClass()}`}>
                {counter}
            </span>
            <div className="counter-btn-control">
                <button className="counter-btn" onClick={(e) => handleClick(e, "minus")}>-</button>
                <button className="counter-btn counter-btn-reset" onClick={(e) => handleClick(e, "reset")}>reset</button>
                <button className="counter-btn" onClick={(e) => handleClick(e, "add")}>+</button>
            </div>
        </div>
    );
}

export default Counter;