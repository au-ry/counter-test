import { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);

    function increaseValue() {
        setCount(count + 1)
    }
    function decreaseValue() {
        setCount(count - 1)
    }
    return (
        <div className="counter">
            <button className="button" onClick={decreaseValue}>-</button>
            <label>{count}</label>
            <button className="button" onClick={increaseValue}>+</button>
        </div>


    );
}

export default Counter;

