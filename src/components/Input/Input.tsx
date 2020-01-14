import React from "react";

interface InputProps {
  input: string;
  result: string;
}

export const Input: React.FC<InputProps> = props => {
  return (
    <div className="input">
      <div className="result">
        <h3>{props.result}</h3>
      </div>
      <div className="result-small">
        <h4>{props.input}</h4>
      </div>
    </div>
  );
};
