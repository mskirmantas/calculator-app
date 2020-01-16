import React, { useState } from "react";
import "../App.scss";
import { Title } from "./Title/Title";
import { Display } from "./Display/Display";
import { ButtonWrapper } from "./ButtonWrapper/ButtonWrapper";
import * as math from "mathjs";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = [".", "AC"];
const mathOperators = ["+", "-", "*", "/", "="];

export const Calculator: React.FC = () => {
  const [name, setName] = useState<string>("Mantas' Calculator");
  const [input, setInput] = useState<string>("");
  const [operations, setOperations] = useState<string>("");

  const nameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { value, maxLength }: any = event.target;
    const newName = value.slice(0, maxLength);
    setName(newName);
    clearDisplay();
  };

  const addNumber = (val: number) => {
    setInput(input + val);
    if (input === "" || input === "0") {
      setInput("" + val);
    }
    if (input[input.length - 1] === ".") {
      setInput(input + val);
    }
    for (let i = 0; i < mathOperators.length; i++) {
      if (input[input.length - 1] === mathOperators[i]) {
        setInput("" + val);
        setOperations(operations + input);
      }
    }
    if (operations[operations.length - 1] === "=") {
      setOperations("");
      setInput("" + val);
    }
  };

  const addOperator = (val: string) => {
    for (let i = 0; i < numbers.length; i++) {
      if (input[input.length - 1] === numbers[i].toString()) {
        setInput(val);
        setOperations(operations + input);
      }
    }
    for (let k = 0; k < mathOperators.length; k++) {
      if (input[input.length - 1] === mathOperators[k]) {
        setInput(input.substring(0, input.length - 1) + val);
      }
    }
    if (input[input.length - 1] === ".") {
      setInput(val);
      setOperations(operations + input.substring(0, input.length - 1));
    }
    if (operations[operations.length - 1] === "=") {
      setInput(val);
      setOperations(input);
    }
    if (input === "Infinity" || input === "-Infinity") {
      setInput("");
      setOperations("");
    }
  };

  const addDot = () => {
    if (input.indexOf(".") === -1) {
      setInput(input + ".");
    }
    for (let i = 0; i < mathOperators.length; i++) {
      if (input[input.length - 1] === mathOperators[i] || input === "") {
        setInput("0.");
        setOperations(operations + input);
      }
    }
    if (operations[operations.length - 1] === "=") {
      setInput("0.");
      setOperations("");
    }
  };

  const calculateResult = () => {
    for (let i = 0; i < numbers.length; i++) {
      if (input !== "" && input[input.length - 1] === numbers[i].toString()) {
        setOperations(operations + input + "=");
        setInput(math.evaluate(operations + input).toString());
      }
      if (operations.indexOf("=") !== -1) {
        return null;
      }
    }
    for (let k = 0; k < mathOperators.length; k++) {
      if (input[input.length - 1] === mathOperators[k]) {
        setOperations(operations + "=");
        setInput(math.evaluate(operations).toString());
      }
    }
    if (input[input.length - 1] === ".") {
      setOperations(operations + input.substring(0, input.length - 1) + "=");
      setInput(
        math
          .evaluate(operations + input.substring(0, input.length - 1))
          .toString()
      );
    }
  };

  const clearDisplay = () => {
    setInput("");
    setOperations("");
  };

  const checkInputLength = () => {
    if (input.length > 10 && input[input.length - 1] !== "=") {
      let inputLimit = input.substring(0, 10);
      setInput(inputLimit);
    }
  };
  checkInputLength();

  return (
    <div className="calculator">
      <Title name={name} onNameChange={nameChangeHandler} maxLength={18} />
      <div className="calc-container">
        <Display input={input} operations={operations} />
        <ButtonWrapper
          symbols={symbols}
          numbers={numbers}
          mathOperators={mathOperators}
          handleNumberClick={addNumber}
          handleOperatorClick={addOperator}
          handleDotClick={addDot}
          handleClear={clearDisplay}
          handleEqual={calculateResult}
        />
      </div>
    </div>
  );
};
