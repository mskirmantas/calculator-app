import React from "react";

interface TitleProps {
  title: string;
  onNameChange: any;
}

export const Title: React.FC<TitleProps> = props => {
  return (
    <div>
      <h2 className="calculator-title">{props.title}</h2>
    </div>
  );
};
