import React from "react";

interface TitleProps {
  onNameChange: (event: React.FormEvent<HTMLInputElement>) => void;
  name: string;
  maxLength: number;
}

export const Title: React.FC<TitleProps> = props => {
  return (
    <div className="title-block">
      <h1 className="calculator-title">{props.name}</h1>
      <div className="calc-name-input">
        <h2>Change calculator's name:</h2>
        <input
          className="name-changer"
          type="text"
          placeholder={props.name}
          onChange={props.onNameChange}
          maxLength={props.maxLength}
        />
      </div>
    </div>
  );
};
