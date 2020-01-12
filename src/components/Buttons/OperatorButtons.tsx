import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface OperatorButtonsProps {
  symbols: any;
  onOperatorButtonClick: any;
  onShowResultClick: any;
}

export const OperatorButtons: React.FC<OperatorButtonsProps> = props => {
  const operator = (val: any) => {
    return isNaN(val) && val !== "." && val !== "C" && val !== "AC";
  };
  return (
    <div className="OperatorButtons">
      {props.symbols.map((symbol: string) => {
        if (operator(symbol) && symbol !== "=") {
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
