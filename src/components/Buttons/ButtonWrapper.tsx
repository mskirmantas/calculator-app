import React, { useState } from "react";
import { ClearButton } from "./ClearButton";
import { MathOperators } from "./MathOperators";
import { Digits } from "./Digits";

interface ButtonWrapper {
  characters: any;
}

export const ButtonWrapper: React.FC<ButtonWrapper> = props => {
  return (
    <div className="ButtonWrapper">
      <div className="flex-container">
        <Digits characters={props.characters} />
        <MathOperators characters={props.characters} />
      </div>
      <ClearButton characters={props.characters} />
    </div>
  );
};
