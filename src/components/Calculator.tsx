import React, { useState } from "react";
import "../App.scss";
import { Title } from "./Title/Title";
import { Input } from "./Input/Input";
import { ButtonWrapper } from "./Buttons/ButtonWrapper";

interface CalculatorProps {
  calcName: string;
}

const characters = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "=",
  "+",
  "-",
  "*",
  ":",
  "C"
];

export const Calculator: React.FC<CalculatorProps> = props => {
  return (
    <div className="calculator">
      <Title title={props.calcName} />
      <Input />
      <ButtonWrapper characters={characters} />
    </div>
  );
};
