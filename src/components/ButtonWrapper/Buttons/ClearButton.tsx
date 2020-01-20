import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface IClearButtonProps {
  symbols: CalcSymbol[];
  onButtonClick: () => void;
}

type CalcSymbol = "." | "AC";

export const ClearButton: React.FC<IClearButtonProps> = props => (
  <div className="ClearButton">
    {props.symbols.map(symbol => {
      if (symbol === "AC")
        return (
          <CalcButton
            key={symbol}
            char={symbol}
            onClick={props.onButtonClick}
          />
        );
      else {
        return null;
      }
    })}
  </div>
);
