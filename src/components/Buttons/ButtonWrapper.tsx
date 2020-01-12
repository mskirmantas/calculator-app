import React from "react";
import { Digits } from "./Digits";
import { MathOperators } from "./MathOperators";
import { ClearButton } from "./ClearButton";

interface ButtonWrapper {
  symbols: any;
  numbers: any;
  handleNumberClick: any;
  handleOperatorClick: any;
  handleDotClick: any;
  handleClear: any;
  handleEqual: any;
}

export const ButtonWrapper: React.FC<ButtonWrapper> = props => {
  return (
    <div className="ButtonWrapper">
      <div className="flex-container">
        <Digits
          numbers={props.numbers}
          symbols={props.symbols}
          onNumberButtonClick={props.handleNumberClick}
          onDotButtonClick={props.handleDotClick}
          calculateResult={props.handleEqual}
        />
        <MathOperators
          symbols={props.symbols}
          onOperatorButtonClick={props.handleOperatorClick}
        />
      </div>
      <ClearButton symbols={props.symbols} onButtonClick={props.handleClear} />
    </div>
  );
};
