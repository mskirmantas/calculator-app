import React from "react";

interface DisplayProps {
  input: string;
  operations: string;
}

export const Display: React.FC<DisplayProps> = props => {
  return (
    <div className="display">
      <div className="input">
        <h3>{props.input}</h3>
      </div>
      <div className="operations">
        <h4>{props.operations}</h4>
      </div>
    </div>
  );
};
