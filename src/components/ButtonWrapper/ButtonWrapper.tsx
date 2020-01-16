import React from "react";
import { NumberButtons } from "./Buttons/NumberButtons";
import { OperatorButtons } from "./Buttons/OperatorButtons";
import { ClearButton } from "./Buttons/ClearButton";

export interface ButtonWrapperProps {
  numbers: number[];
  mathOperators: string[];
  symbols: string[];
  handleNumberClick: (val: number) => void;
  handleOperatorClick: (val: string) => void;
  handleDotClick: () => void;
  handleClear: () => void;
  handleEqual: () => void | null;
}

export const ButtonWrapper: React.FC<ButtonWrapperProps> = props => {
  return (
    <div className="ButtonWrapper flex-container">
      <div className="container">
        <NumberButtons
          numbers={props.numbers}
          symbols={props.symbols}
          onNumberClick={props.handleNumberClick}
          onDotClick={props.handleDotClick}
        />
        <ClearButton
          symbols={props.symbols}
          onButtonClick={props.handleClear}
        />
      </div>
      <OperatorButtons
        mathOperators={props.mathOperators}
        onOperatorButtonClick={props.handleOperatorClick}
        onShowResultClick={props.handleEqual}
      />
    </div>
  );
};
