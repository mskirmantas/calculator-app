import React from 'react';

interface CalcButtonProps {
  char: string;
}

export const CalcButton: React.FC<CalcButtonProps> = props => <div className='calc-button'>{props.char}</div>;
