import React from "react";
import { NumberButtons } from "./Buttons/NumberButtons";
import { OperatorButtons } from "./Buttons/OperatorButtons";
import { ClearButton } from "./Buttons/ClearButton";

export interface ButtonWrapperProps {
  numbers: number[];
  mathOperators: string[];
  symbols: string[];
  onNumberClick: (val: number) => void;
  onOperatorClick: (val: string) => void;
  onDotClick: () => void;
  onEqualClick: () => void | null;
  onClearClick: () => void;
}

export const ButtonWrapper: React.FC<ButtonWrapperProps> = props => {
  return (
    <div className="ButtonWrapper">
      <div>
        <NumberButtons
          numbers={props.numbers}
          symbols={props.symbols}
          onNumberClick={props.onNumberClick}
          onDotClick={props.onDotClick}
        />
        <ClearButton
          symbols={props.symbols}
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
