import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface ClearButtonProps {
  symbols: string[];
  onButtonClick: () => void;
}

export const ClearButton: React.FC<ClearButtonProps> = props => (
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
