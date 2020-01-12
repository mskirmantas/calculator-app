import React from "react";
import { NumberButtons } from "./NumberButtons";
import { OperatorButtons } from "./OperatorButtons";
import { ClearButton } from "./ClearButton";

interface ButtonWrapper {
  symbols: any;
  numbers: any;
  handleNumberClick: any;
  handleOperatorClick: any;
  handleDotClick: any;
  handleClearLast: any;
  handleClear: any;
  handleEqual: any;
}

export const ButtonWrapper: React.FC<ButtonWrapper> = props => {
  return (
    <div className="ButtonWrapper flex-container">
      <div className="container">
        <NumberButtons
          numbers={props.numbers}
          symbols={props.symbols}
          onNumberClick={props.handleNumberClick}
          onDotClick={props.handleDotClick}
          onClearLastClick={props.handleClearLast}
        />
        <ClearButton
          symbols={props.symbols}
          onButtonClick={props.handleClear}
        />
      </div>
      <OperatorButtons
        symbols={props.symbols}
        onOperatorButtonClick={props.handleOperatorClick}
        onShowResultClick={props.handleEqual}
      />
    </div>
  );
};
