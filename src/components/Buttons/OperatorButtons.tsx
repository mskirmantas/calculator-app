import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface OperatorBtnProps {
  symbols: string[];
  onOperatorButtonClick: (val: string) => void;
  onShowResultClick: () => void | null;
}

export const OperatorButtons: React.FC<OperatorBtnProps> = props => {
  const isOperator: (val: string) => boolean = val => {
    return val !== "." && val !== "C" && val !== "AC";
  };
  return (
    <div className="OperatorButtons">
      {props.symbols.map(symbol => {
        if (isOperator(symbol) && symbol !== "=") {
          return (
            <CalcButton
              key={symbol}
              char={symbol}
              onClick={() => props.onOperatorButtonClick(symbol)}
            />
          );
        } else if (symbol === "=") {
          return (
            <CalcButton
              key={symbol}
              char={symbol}
              onClick={props.onShowResultClick}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
