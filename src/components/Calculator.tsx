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

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value,
      maxLength
    }: { value: string | number; maxLength: number } = event.target;
    const newName = value.toString().substring(0, maxLength);
    setName(newName);
    handleClearDisplay();
  };

  const handleAddNumber = (val: number) => {
    setInput(input + val);
    if (input === "" || input === "0") {
      setInput("" + val);
    }
    if (input[input.length - 1] === ".") {
      setInput(input + val);
    }

    mathOperators.forEach(mathOperator => {
      if (input[input.length - 1] === mathOperator) {
        setInput("" + val);
        setOperations(operations + input);
      }
    });

    if (operations[operations.length - 1] === "=") {
      setOperations("");
      setInput("" + val);
    }
  };

  const handleAddOperator = (val: string) => {
    numbers.forEach(number => {
      if (input[input.length - 1] === number.toString()) {
        setInput(val);
        setOperations(operations + input);
      }
    });

    mathOperators.forEach(mathOperator => {
      if (input[input.length - 1] === mathOperator) {
        setInput(input.substring(0, input.length - 1) + val);
      }
    });

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

  const handleAddDot = () => {
    if (input.indexOf(".") === -1) {
      setInput(input + ".");
    }
    mathOperators.forEach(mathOperator => {
      if (input[input.length - 1] === mathOperator || input === "") {
        setInput("0.");
        setOperations(operations + input);
      }
    });

    if (operations[operations.length - 1] === "=") {
      setInput("0.");
      setOperations("");
    }
  };

  const handleCalculateResult = () => {
    if (operations.indexOf("=") !== -1) {
      return null;
    }
    numbers.forEach(number => {
      if (input[input.length - 1] === number.toString() && input !== "") {
        setOperations(operations + input + "=");
        setInput(math.evaluate(operations + input).toString());
      }
    });

    mathOperators.forEach(mathOperator => {
      if (input[input.length - 1] === mathOperator) {
        setOperations(operations + "=");
        setInput(math.evaluate(operations).toString());
      }
    });

    if (input[input.length - 1] === ".") {
      setOperations(operations + input.substring(0, input.length - 1) + "=");
      setInput(
        math
          .evaluate(operations + input.substring(0, input.length - 1))
          .toString()
      );
    }
  };

  const handleClearDisplay = () => {
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
    <div className="container">
      <Title name={name} onNameChange={handleNameChange} maxLength={18} />
      <div className="calculator">
        <Display input={input} operations={operations} />
        <ButtonWrapper
          symbols={symbols}
          numbers={numbers}
          mathOperators={mathOperators}
          onNumberClick={handleAddNumber}
          onOperatorClick={handleAddOperator}
          onDotClick={handleAddDot}
          onEqualClick={handleCalculateResult}
          onClearClick={handleClearDisplay}
        />
      </div>
    </div>
  );
};
