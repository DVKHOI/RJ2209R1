import React, { useState } from "react";

const Maytinh = () => {
  const [screen, setScreen] = useState("");
  const [result, setResult] = useState([]);
  const operator = ("+", "-");
  const handleClick = (e) => {
    setScreen(screen + e.target.innerText);
    screen.reduce((prev, current) => {
      // current.includes(operator) && prev.includes(operator) ? screen.splice(prev) : screen
    }, "");
    console.log(screen);
  };
  const handleChangeResult = () => {
    const newValue = screen.split("");

    // newValue.reduce((prev, current) => {
    //   current.includes(operator) && prev.includes(operator) ? newValue.splice(prev) :
    // },[])
    // setResult(eval(value));
    console.log(newValue);
  };
  const handleReset = () => {
    setScreen("");
    setResult("");
  };
  return (
    <div>
      <div className="result">
        <p className="input-text">{screen}</p>
        <h3>Result: {result}</h3>
      </div>
      <div className="numbers">
        <button
          type="button"
          data-testid="seven"
          className="btn btn-primary"
          onClick={handleClick}
        >
          7
        </button>
        <button
          type="button"
          data-testid="eight"
          className="btn btn-primary"
          onClick={handleClick}
        >
          8
        </button>
        <button
          type="button"
          data-testid="nine"
          className="btn btn-primary"
          onClick={handleClick}
        >
          9
        </button>
        <button
          type="button"
          data-testid="four"
          className="btn btn-primary"
          onClick={handleClick}
        >
          4
        </button>
        <button
          type="button"
          data-testid="five"
          className="btn btn-primary"
          onClick={handleClick}
        >
          5
        </button>
        <button
          type="button"
          data-testid="six"
          className="btn btn-primary"
          onClick={handleClick}
        >
          6
        </button>
        <button
          type="button"
          data-testid="one"
          className="btn btn-primary"
          onClick={handleClick}
        >
          1
        </button>
        <button
          type="button"
          data-testid="two"
          className="btn btn-primary"
          onClick={handleClick}
        >
          2
        </button>
        <button
          type="button"
          data-testid="three"
          className="btn btn-primary"
          onClick={handleClick}
        >
          3
        </button>
        <button
          type="button"
          data-testid="zero"
          className="btn btn-primary col-span-2"
          onClick={handleClick}
        >
          0
        </button>
        <button
          type="button"
          data-testid="full-stop"
          className="btn btn-primary"
          onClick={handleClick}
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Maytinh;
