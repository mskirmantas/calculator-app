import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface IOperatorBtnProps {
  mathOperators: MathOperator[];
  onOperatorButtonClick: (val: MathOperator) => void;
  onShowResultClick: () => void | null;
}
type MathOperator = "+" | "-" | "*" | "/" | "=";

export const OperatorButtons: React.FC<IOperatorBtnProps> = props => {
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
