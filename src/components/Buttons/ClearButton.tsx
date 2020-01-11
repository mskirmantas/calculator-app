import React, { useState } from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface ClearButtonProps {
  characters: any;
}

export const ClearButton: React.FC<ClearButtonProps> = props => (
  <div className="ClearButton">
    {props.characters.map((character: string) => {
      if (character === "C")
        return <CalcButton key={character} char={character} onButtonClick />;
    })}
  </div>
);
