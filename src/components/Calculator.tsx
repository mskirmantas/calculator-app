import React, { useState } from "react";
import "../App.scss";
import { Title } from "./Title/Title";
import { Input } from "./Input/Input";
import { ButtonWrapper } from "./Buttons/ButtonWrapper";
import * as math from "mathjs";

interface CalculatorProps {
  numbers: number[];
  symbols: string[];
  addNumber: (val: number) => void;
  addOperator: (val: string) => void;
  addDot: () => void;
  calculateResult: () => null | void;
  clearDisplay: () => void;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["+", "-", "*", "/", ".", "=", "C", "AC"];

export const Calculator: React.FC = () => {
  const [name, setName] = useState<string>("Mantas' Calculator");

  const nameChangeHandler = (event: any) => {
    const { value, maxLength } = event.target;
    const newName = value.slice(0, maxLength);
    setName(newName);
    clearDisplay();
  };

  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const checkLength = (val: string, charLength: number) => {
    if (val.length > charLength) {
      let inputLimit = val.slice(0, charLength);
      setInput(inputLimit);
    }
  };
  checkLength(input, 26);
  checkLength(result, 15);

  const addNumber = (val: number) => {
    setInput(input + val);
    if (input[input.length - 1] === "0") {
      setInput(input.substring(0, input.length - 1) + val);
    }
    if (result !== "") {
      setResult("");
      setInput("" + val);
    }
  };

  const addOperator = (val: string) => {
    for (let i = 0; i < numbers.length; i++) {
      if (input !== "0" && input[input.length - 1] === numbers[i].toString()) {
        setInput(input + val);
      }
      if (input !== "0" && input[input.length - 1] === ".") {
        setInput(input.substring(0, input.length - 1) + val);
      }
      if (result !== "") {
        setInput(result + val);
        setResult("");
      }
    }
  };

  const addDot = () => {
    if (input.indexOf(".") === -1) {
      setInput(input + ".");
    }
    for (let i = 0; i < symbols.length; i++) {
      if (input[input.length - 1] === symbols[i].toString()) {
        setInput(input + "0.");
      }
    }
    if (result !== "") {
      setResult("");
      setInput("0.");
    }
  };

  const calculateResult = () => {
    for (let i = 0; i < numbers.length; i++) {
      if (input !== "0" && input[input.length - 1] === numbers[i].toString()) {
        setInput(input + "=");
        setResult(math.evaluate(input).toString());
      }
      if (input.indexOf("=") !== -1) {
        return null;
      }
    }
  };

  const clearLastValue = () => {
    setInput(input.substring(0, input.length - 1));
    if (input.length === 1 || input === "0") {
      setInput("0");
    }
  };

  const clearDisplay = () => {
    setInput("0");
    setResult("");
  };

  return (
    <div className="calculator">
      <Title name={name} onNameChange={nameChangeHandler} maxLength={18} />
      <div className="calc-container">
        <Input input={input} result={result} />
        <ButtonWrapper
          symbols={symbols}
          numbers={numbers}
          handleNumberClick={addNumber}
          handleOperatorClick={addOperator}
          handleDotClick={addDot}
          handleClear={clearDisplay}
          handleClearLast={clearLastValue}
          handleEqual={calculateResult}
        />
      </div>
    </div>
  );
};
