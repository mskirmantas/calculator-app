import React from "react";

interface CalcButtonProps {
  char: number | string;
  onClick: () => void;
}

export const CalcButton: React.FC<CalcButtonProps> = props => {
  return (
    <div className="calc-button" onClick={props.onClick}>
      {props.char}
    </div>
  );
};
