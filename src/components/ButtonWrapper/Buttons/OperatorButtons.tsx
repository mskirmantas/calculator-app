import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface OperatorBtnProps {
  mathOperators: string[];
  onOperatorButtonClick: (val: string) => void;
  onShowResultClick: () => void | null;
}

export const OperatorButtons: React.FC<OperatorBtnProps> = props => {
  return (
    <div className="OperatorButtons">
      {props.mathOperators.map(mathOperator => {
        if (mathOperator !== "=") {
          return (
            <CalcButton
              key={mathOperator}
              char={mathOperator}
              onClick={() => props.onOperatorButtonClick(mathOperator)}
            />
          );
        } else if (mathOperator === "=") {
          return (
            <CalcButton
              key={mathOperator}
              char={mathOperator}
              onClick={props.onShowResultClick}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
