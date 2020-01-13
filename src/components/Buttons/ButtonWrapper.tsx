import React from "react";
import { NumberButtons } from "./NumberButtons";
import { OperatorButtons } from "./OperatorButtons";
import { ClearButton } from "./ClearButton";

export interface ButtonWrapperProps {
  symbols: string[];
  numbers: number[];
  handleNumberClick: (val: number) => void;
  handleOperatorClick: (val: string) => void;
  handleDotClick: () => void;
  handleClearLast: () => void;
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
