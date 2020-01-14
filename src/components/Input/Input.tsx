import React from "react";

interface InputProps {
  input: string;
  result: string;
}

export const Input: React.FC<InputProps> = props => {
  return (
    <div className="input">
      <h3 className="result">{props.result}</h3>
      <h4 className="result-small">{props.input}</h4>
    </div>
  );
};
