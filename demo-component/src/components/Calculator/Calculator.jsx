import React from "react";
import { useEffect } from "react";

const Calculator = () => {
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const handleAddition = React.useRef();

  handleAddition.current = () => {
    setResult((result) => number1 + number2);
  };
  function handleSubtraction() {
    setResult((result) => number1 - number2);
  }
  function handleMultiplication() {
    setResult((result) => number1 * number2);
  }
  function handleDivision() {
    setResult((result) => number1 / number2);
  }
  useEffect(() => {
    return () => {
      handleAddition.current();
    };
  }, []);
  return (
    <div>
      <form className="form" action="">
        <div className="form-input">
          <input
            className="input"
            onChange={(e) => setNumber1(parseInt(e.target.value))}
            type="number"
            placeholder="Enter your number"
          />
          <input
            className="input"
            onChange={(e) => setNumber2(parseInt(e.target.value))}
            type="number"
            placeholder="Enter your number"
          />
        </div>
        <h3 className="result">Result: {result}</h3>
        <button className="btn" onClick={handleAddition.current}>
          Addition
        </button>
        <button className="btn" onClick={handleSubtraction}>
          Subtraction
        </button>
        <button className="btn" onClick={handleMultiplication}>
          Multiplication
        </button>
        <button className="btn" onClick={handleDivision}>
          Division
        </button>
      </form>
    </div>
  );
};

export default Calculator;
