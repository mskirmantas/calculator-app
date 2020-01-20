import React, { useState, useEffect } from "react";
import "../App.scss";
import { Title } from "./Title/Title";
import { Display } from "./Display/Display";
import { ButtonWrapper } from "./ButtonWrapper/ButtonWrapper";
import * as math from "mathjs";

interface INameChangeProps {
  name: string;
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type Number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
type CalcSymbol = "." | "AC";
type MathOperator = "+" | "-" | "*" | "/" | "=";

const numbers: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const calcSymbols: CalcSymbol[] = [".", "AC"];
const mathOperators: MathOperator[] = ["+", "-", "*", "/", "="];

export const Calculator: React.FC<INameChangeProps> = props => {
  const [input, setInput] = useState<string>("");
  const [operations, setOperations] = useState<string>("");

  const handleAddNumber = (val: Number) => {
    setInput(input + val);
    if (input === "" || input === "0") {
      setInput("" + val);
    }
    if (input[input.length - 1] === ".") {
      setInput(prevInput => prevInput + val);
    }

    mathOperators.forEach(mathOperator => {
      if (input[input.length - 1] === mathOperator) {
        setInput("" + val);
        setOperations(prevOperations => prevOperations + input);
      }
    });

    if (operations[operations.length - 1] === "=") {
      setOperations("");
      setInput("" + val);
    }
  };

  const handleAddOperator = (val: MathOperator) => {
    numbers.forEach(number => {
      if (input[input.length - 1] === number.toString()) {
        setInput(val);
        setOperations(prevOperations => prevOperations + input);
      }
    });

    mathOperators.forEach(mathOperator => {
      if (input[input.length - 1] === mathOperator) {
        setInput(input.substring(0, input.length - 1) + val);
      }
    });

    if (input[input.length - 1] === ".") {
      setInput(val);
      setOperations(
        prevOperations => prevOperations + input.substring(0, input.length - 1)
      );
    }
    if (operations[operations.length - 1] === "=") {
      setInput(val);
      setOperations(input);
    }
  };

  const handleAddDot = () => {
    if (input.indexOf(".") === -1) {
      setInput(prevInput => prevInput + ".");
    }
    mathOperators.forEach(mathOperator => {
      if (input[input.length - 1] === mathOperator || input === "") {
        setInput("0.");
        setOperations(prevOperations => prevOperations + input);
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
        setOperations(prevOperations => prevOperations + input + "=");
        setInput(math.evaluate(operations + input).toString());
      }
    });

    mathOperators.forEach(mathOperator => {
      if (input[input.length - 1] === mathOperator) {
        setOperations(prevOperations => prevOperations + "=");
        setInput(math.evaluate(operations).toString());
      }
    });

    if (input[input.length - 1] === ".") {
      setOperations(
        prevOperations =>
          prevOperations + input.substring(0, input.length - 1) + "="
      );
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

  useEffect(() => {
    handleClearDisplay();
  }, [props.name]);

  const checkInputLength = () => {
    if (input.length > 10 && input[input.length - 1] !== "=") {
      let inputLimit = input.substring(0, 10);
      setInput(inputLimit);
    }
  };
  checkInputLength();

  return (
    <div className="container">
      <Title
        name={props.name}
        onNameChange={props.onNameChange}
        maxLength={18}
      />
      <div className="calculator">
        <Display input={input} operations={operations} />
        <ButtonWrapper
          calcSymbols={calcSymbols}
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
