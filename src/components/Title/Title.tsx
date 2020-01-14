import React from "react";

interface TitleProps {
  onNameChange: any;
  name: string;
  maxLength: number;
}

export const Title: React.FC<TitleProps> = props => {
  return (
    <div>
      <h1 className="calculator-title">{props.name}</h1>
      <div className="calc-name-input">
        <h2>Change calculator's name:</h2>
        <input
          type="text"
          placeholder={props.name}
          onChange={props.onNameChange}
          maxLength={props.maxLength}
        />
      </div>
    </div>
  );
};
