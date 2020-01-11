import React, { useState } from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface MathOperatorsProps {
  characters: any;
}

export const MathOperators: React.FC<MathOperatorsProps> = props => {
  const mathOperator = (val: any) => {
    return isNaN(val) && val !== "." && val !== "=" && val !== "C";
  };
  return (
    <div className="MathOperators">
      {props.characters.map((character: string) => {
        if (mathOperator(character))
          return <CalcButton key={character} char={character} onButtonClick />;
      })}
    </div>
  );
};
