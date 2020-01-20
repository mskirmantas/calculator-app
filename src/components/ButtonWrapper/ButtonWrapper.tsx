import React from "react";
import { NumberButtons } from "./Buttons/NumberButtons";
import { OperatorButtons } from "./Buttons/OperatorButtons";
import { ClearButton } from "./Buttons/ClearButton";

interface IButtonWrapperProps {
  numbers: Number[];
  mathOperators: MathOperator[];
  calcSymbols: CalcSymbol[];
  onNumberClick: (val: Number) => void;
  onOperatorClick: (val: MathOperator) => void;
  onDotClick: () => void;
  onEqualClick: () => void | null;
  onClearClick: () => void;
}

type Number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
type CalcSymbol = "." | "AC";
type MathOperator = "+" | "-" | "*" | "/" | "=";

export const ButtonWrapper: React.FC<IButtonWrapperProps> = props => {
  return (
    <div className="ButtonWrapper">
      <div>
        <NumberButtons
          numbers={props.numbers}
          calcSymbols={props.calcSymbols}
          onNumberClick={props.onNumberClick}
          onDotClick={props.onDotClick}
        />
        <ClearButton
          calcSymbols={props.calcSymbols}
          onButtonClick={props.onClearClick}
        />
      </div>
      <OperatorButtons
        mathOperators={props.mathOperators}
        onOperatorButtonClick={props.onOperatorClick}
        onShowResultClick={props.onEqualClick}
      />
    </div>
  );
};
