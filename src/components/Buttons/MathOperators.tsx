import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface MathOperatorsProps {
  symbols: any;
  onOperatorButtonClick: any;
}

export const MathOperators: React.FC<MathOperatorsProps> = props => {
  const mathOperator = (val: any) => {
    return isNaN(val) && val !== "." && val !== "=" && val !== "C";
  };
  return (
    <div className="MathOperators">
      {props.symbols.map((symbol: string) => {
        if (mathOperator(symbol))
          return (
            <CalcButton
              key={symbol}
              char={symbol}
              onClick={() => props.onOperatorButtonClick(symbol)}
            />
          );
        else {
          return null;
        }
      })}
    </div>
  );
};
