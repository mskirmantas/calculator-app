import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface ClearButtonProps {
  symbols: any;
  onButtonClick: any;
}

export const ClearButton: React.FC<ClearButtonProps> = props => (
  <div className="ClearButton">
    {props.symbols.map((symbol: string) => {
      if (symbol === "C")
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
