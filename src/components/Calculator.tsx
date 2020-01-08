import React, { useState } from "react";
import "../App.scss";
import { Title } from "./Title/Title";
import { Input } from "./Input/Input";
import { Buttons } from "./Buttons/Buttons";

const characters = [
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "*",
  ".",
  "0",
  "=",
  ":",
  "C"
];

export const Calculator: React.FC = () => {
  return (
    <div className="calculator">
      <Title />
      <Input />
      <Buttons characters={characters} />
    </div>
  );
};
