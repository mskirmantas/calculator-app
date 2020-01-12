import React from "react";

interface InputProps {
  input: any;
  result: any;
}

export const Input: React.FC<InputProps> = props => {
  return (
    <div className="input">
      <h1 className="result">{props.result}</h1>
      <h2 className="result-small">{props.input}</h2>
    </div>
  );
};
