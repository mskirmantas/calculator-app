import React from 'react';
import { CalcButton } from './Button';
import '../App.scss';

const characters = ['=', 'C', '*', ':', '-', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', ''];

export const Calculator: React.FC = () => {
  return (
    <div className='calculator-wrapper'>
      <h2 className='calculator-title'>Fix me!</h2>
      <div className='calculator'>
        <div>
          <h3 className='result-small'>8 *</h3>
        </div>
        <div className='result'>
          <h1>24</h1>
        </div>
        <CalcButton char='=' />
        <CalcButton char='C' />
        <CalcButton char='*' />
        <CalcButton char=':' />
        <CalcButton char='-' />
        <CalcButton char='+' />
        <CalcButton char='1' />
        <CalcButton char='2' />
        <CalcButton char='3' />
        <CalcButton char='4' />
        <CalcButton char='5' />
        <CalcButton char='6' />
        <CalcButton char='7' />
        <CalcButton char='8' />
        <CalcButton char='9' />
        <CalcButton char='0' />
        <CalcButton char='.' />
        <CalcButton char='' />
      </div>
    </div>
  );
};
