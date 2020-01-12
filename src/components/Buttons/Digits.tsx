import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface DigitsProps {
  numbers: any;
  symbols: any;
  onNumberButtonClick: any;
  onDotButtonClick: any;
  calculateResult: any;
}

export const Digits: React.FC<DigitsProps> = props => {
  return (
    <div className="Digits">
      {props.numbers.map((number: number) => {
        return (
          <CalcButton
            key={number}
            char={number}
            onClick={() => props.onNumberButtonClick(number)}
          />
        );
      })}

      {props.symbols.map((symbol: string) => {
        if (symbol === ".")
          return (
            <CalcButton
              key={symbol}
              char={symbol}
              onClick={props.onDotButtonClick}
            />
          );
        else if (symbol === "=")
          return (
            <CalcButton
              key={symbol}
              char={symbol}
              onClick={props.calculateResult}
            />
          );
        else {
          return null;
        }
      })}
    </div>
  );
};
