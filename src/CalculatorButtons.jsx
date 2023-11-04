import React from "react";

const CalculatorButtons = ({ buttonPress }) => {
  const handleButtonClick = (buttonValue) => {
    buttonPress(buttonValue);
  };
  return (
    <div className="calcbuttons">
      <button onClick={() => handleButtonClick("1")}>1</button>
      <button onClick={() => handleButtonClick("2")}>2</button>
      <button onClick={() => handleButtonClick("3")}>3</button>
      <button onClick={() => handleButtonClick("+")}>+</button>
      <button onClick={() => handleButtonClick("4")}>4</button>
      <button onClick={() => handleButtonClick("5")}>5</button>
      <button onClick={() => handleButtonClick("6")}>6</button>
      <button onClick={() => handleButtonClick("-")}>-</button>
      <button onClick={() => handleButtonClick("7")}>7</button>
      <button onClick={() => handleButtonClick("8")}>8</button>
      <button onClick={() => handleButtonClick("9")}>9</button>
      <button onClick={() => handleButtonClick("*")}>*</button>
      <button onClick={() => handleButtonClick("0")}>0</button>
      <button onClick={() => handleButtonClick("=")}>=</button>
      <button onClick={() => handleButtonClick("/")}>/</button>
    </div>
  );
};

export default CalculatorButtons;
