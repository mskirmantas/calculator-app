import React, { useState } from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface DigitsProps {
  characters: any;
}

export const Digits: React.FC<DigitsProps> = props => {
  const mathOperator = (val: any) => {
    return isNaN(val) && val !== "." && val !== "=" && val !== "C";
  };
  return (
    <div className="Digits">
      {props.characters.map((character: string) => {
        if (!mathOperator(character) && character !== "C")
          return <CalcButton key={character} char={character} onButtonClick />;
      })}
    </div>
  );
};
