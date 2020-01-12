import React from "react";

interface CalcButtonProps {
  char: any;
  onClick: any;
}

export const CalcButton: React.FC<CalcButtonProps> = props => {
  return (
    <div className="calc-button" onClick={props.onClick}>
      {props.char}
    </div>
  );
};
