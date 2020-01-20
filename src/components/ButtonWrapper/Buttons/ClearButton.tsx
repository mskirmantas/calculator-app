import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface IClearButtonProps {
  calcSymbols: CalcSymbol[];
  onButtonClick: () => void;
}

type CalcSymbol = "." | "AC";

export const ClearButton: React.FC<IClearButtonProps> = props => (
  <div className="ClearButton">
    {props.calcSymbols.map(calcSymbol => {
      if (calcSymbol === "AC")
        return (
          <CalcButton key={calcSymbol} onClick={props.onButtonClick}>
            {calcSymbol}
          </CalcButton>
        );
      else {
        return null;
      }
    })}
  </div>
);
