import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface INumberBtnProps {
  numbers: Number[];
  calcSymbols: CalcSymbol[];
  onNumberClick: (val: Number) => void;
  onDotClick: () => void;
}

type Number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
type CalcSymbol = "." | "AC";

export const NumberButtons: React.FC<INumberBtnProps> = props => {
  return (
    <div className="NumberButtons">
      {props.numbers.map(number => {
        return (
          <CalcButton key={number} onClick={() => props.onNumberClick(number)}>
            {number}
          </CalcButton>
        );
      })}

      {props.calcSymbols.map(calcSymbol => {
        if (calcSymbol === ".")
          return (
            <CalcButton key={calcSymbol} onClick={props.onDotClick}>
              {calcSymbol}
            </CalcButton>
          );
        else {
          return null;
        }
      })}
    </div>
  );
};
