import React from "react";

interface CalcButtonProps {
  char: string;
  onButtonClick: any;
}

export const CalcButton: React.FC<CalcButtonProps> = props => {
  return (
    <div className="calc-button" onClick={props.onButtonClick}>
      {props.char}
    </div>
  );
};
