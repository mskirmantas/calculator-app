import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface NumberBtnProps {
  numbers: number[];
  symbols: string[];
  onNumberClick: (val: number) => void;
  onDotClick: () => void;
  onClearLastClick: () => void;
}

export const NumberButtons: React.FC<NumberBtnProps> = props => {
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
        else if (symbol === "C")
          return (
            <CalcButton
              key={symbol}
              char={symbol}
              onClick={props.onClearLastClick}
            />
          );
        else {
          return null;
        }
      })}
    </div>
  );
};
