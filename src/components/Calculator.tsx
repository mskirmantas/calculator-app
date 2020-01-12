import React, { useState } from "react";
import "../App.scss";
import { Title } from "./Title/Title";
import { Input } from "./Input/Input";
import { ButtonWrapper } from "./Buttons/ButtonWrapper";
import * as math from "mathjs";

interface CalculatorProps {
  calcName: string;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = [".", "=", "+", "-", "*", "/", "C"];

export const Calculator: React.FC<CalculatorProps> = props => {
  const [input, setValue] = useState("");

  const addToInput = (val: any) => {
    setValue(input + val);
  };

  const addOperator = (val: any) => {
    for (let i = 0; i < [...numbers].length; i++) {
      if (input !== "" && input[input.length - 1] === numbers[i].toString()) {
        setValue(input + val);
      }
      if (input !== "" && input[input.length - 1] === ".") {
        setValue(input + "0" + val);
      }
    }
  };

  const addDot = () => {
    if (input.indexOf(".") === -1) {
      setValue(input + ".");
    }
  };

  const calculateResult = () => {
    for (let i = 0; i < [...numbers].length; i++) {
      if (input !== "" && input[input.length - 1] === numbers[i].toString()) {
        setValue(math.evaluate(input).toString());
      }
    }
  };

  const clearDisplay = () => {
    setValue("");
  };

  return (
    <div className="calculator">
      <Title title={props.calcName} onNameChange={clearDisplay} />
      <Input input={input} />
      <ButtonWrapper
        symbols={symbols}
        numbers={numbers}
        handleNumberClick={addToInput}
        handleOperatorClick={addOperator}
        handleDotClick={addDot}
        handleClear={clearDisplay}
        handleEqual={calculateResult}
      />
    </div>
  );
};
