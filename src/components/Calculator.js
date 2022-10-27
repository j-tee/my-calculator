/* eslint-disable no-console */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './buttons';

const Calculator = () => {
  const [state, setState] = useState(() => ({
    total: null,
    next: null,
    operation: null,
  }));
  const handleChange = (e) => {
    console.log(e.target.name);
    setState(() => calculate(state, e.target.name));
  };
  return (
    <div className="calculator">
      <input type="number" placeholder="0" defaultValue={state.next === null && state.operation === null ? state.total : state.next} />
      <div className="calc-btns">
        <Buttons handleChange={handleChange} name="AC" className="calc-btn" />
        <Buttons handleChange={handleChange} name="+/-" className="calc-btn" />
        <Buttons handleChange={handleChange} name="%" className="calc-btn" />
        <Buttons handleChange={handleChange} name="&divide;" className="calc-btn ops" />
        <Buttons handleChange={handleChange} name="7" className="calc-btn" />
        <Buttons handleChange={handleChange} name="8" className="calc-btn" />
        <Buttons handleChange={handleChange} name="9" className="calc-btn" />
        <Buttons handleChange={handleChange} name="x" className="calc-btn ops" />
        <Buttons handleChange={handleChange} name="5" className="calc-btn" />
        <Buttons handleChange={handleChange} name="5" className="calc-btn" />
        <Buttons handleChange={handleChange} name="6" className="calc-btn" />
        <Buttons handleChange={handleChange} name="-" className="calc-btn ops" />
        <Buttons handleChange={handleChange} name="1" className="calc-btn" />
        <Buttons handleChange={handleChange} name="2" className="calc-btn" />
        <Buttons handleChange={handleChange} name="3" className="calc-btn" />
        <Buttons handleChange={handleChange} name="+" className="calc-btn ops" />
        <Buttons handleChange={handleChange} name="0" className="calc-btn zero" />
        <Buttons handleChange={handleChange} name="." className="calc-btn" />
        <Buttons handleChange={handleChange} name="=" className="calc-btn ops" />
      </div>
    </div>
  );
};

export default Calculator;
