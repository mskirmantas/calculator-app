import React from "react";

interface ICalcButtonProps {
  onClick: () => void;
}

export const CalcButton: React.FC<ICalcButtonProps> = props => {
  return (
    <div className="calc-button" onClick={props.onClick}>
      {props.children}
    </div>
  );
};
