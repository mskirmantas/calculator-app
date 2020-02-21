import React from "react";
import { CalcButton } from "./CalcButton/CalcButton";

interface OperatorBtnProps {
  mathOperators: MathOperator[];
  onOperatorButtonClick: (val: MathOperator) => void;
  onShowResultClick: () => void | null;
}
type MathOperator = "+" | "-" | "*" | "/" | "=";

export const OperatorButtons: React.FC<OperatorBtnProps> = props => {
  return (
    <div className="OperatorButtons">
      {props.mathOperators.map(mathOperator => {
        if (mathOperator !== "=") {
          return (
            <CalcButton
              key={mathOperator}
              onClick={() => props.onOperatorButtonClick(mathOperator)}
            >
              {mathOperator}
            </CalcButton>
          );
        } else if (mathOperator === "=") {
          return (
            <CalcButton key={mathOperator} onClick={props.onShowResultClick}>
              {mathOperator}
            </CalcButton>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
