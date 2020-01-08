import React, { useState } from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface ButtonsProps {
  characters: any;
}

export const Buttons: React.FC<ButtonsProps> = props => {
  return (
    <div className="calc-button-container">
      {props.characters.map((character: string) => {
        return <CalcButton char={character} />;
      })}
    </div>
  );
};
