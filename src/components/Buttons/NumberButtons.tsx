import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface NumberButtonsProps {
  numbers: any;
  symbols: any;
  onNumberClick: any;
  onDotClick: any;
  onClearLastClick: any;
}

export const NumberButtons: React.FC<NumberButtonsProps> = props => {
  return (
    <div className="NumberButtons">
      {props.numbers.map((number: number) => {
        return (
          <CalcButton
            key={number}
            char={number}
            onClick={() => props.onNumberClick(number)}
          />
        );
      })}

      {props.symbols.map((symbol: string) => {
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
