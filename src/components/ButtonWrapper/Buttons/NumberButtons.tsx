import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface INumberBtnProps {
  numbers: Number[];
  symbols: CalcSymbol[];
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
          <CalcButton
            key={number}
            char={number}
            onClick={() => props.onNumberClick(number)}
          />
        );
      })}

      {props.symbols.map(symbol => {
        if (symbol === ".")
          return (
            <CalcButton key={symbol} char={symbol} onClick={props.onDotClick} />
          );
        else {
          return null;
        }
      })}
    </div>
  );
};
