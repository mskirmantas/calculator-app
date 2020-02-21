import React from "react";

interface CalcButtonProps {
  onClick: () => void;
}

export const CalcButton: React.FC<CalcButtonProps> = props => {
  return (
    <div className="calc-button" onClick={props.onClick}>
      {props.children}
    </div>
  );
};
