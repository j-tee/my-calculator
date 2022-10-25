import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  return (
    <div className="calculator">
      <input type="number" placeholder="0" defaultValue={state.next === null && state.operation === null ? state.total : state.next} />
      <div className="calc-btns">
        <button name="AC" onClick={setState(calculate(state, 'AC'))} type="button" className="calc-btn">AC</button>
        <button name="+/-" onClick={setState(calculate(state, '+/-'))} type="button" className="calc-btn">+/-</button>
        <button name="%" onClick={setState(calculate(state, '%'))} type="button" className="calc-btn">%</button>
        <button name="÷" onClick={setState(calculate(state, '÷'))} type="button" className="calc-btn ops">&divide;</button>
        <button name="7" onClick={setState(calculate(state, '7'))} type="button" className="calc-btn">7</button>
        <button name="8" onClick={setState(calculate(state, '8'))} type="button" className="calc-btn">8</button>
        <button name="9" onClick={setState(calculate(state, '9'))} type="button" className="calc-btn">9</button>
        <button name="x" onClick={setState(calculate(state, 'x'))} type="button" className="calc-btn ops">&times;</button>
        <button name="4" type="button" onClick={setState(calculate(state, '4'))} className="calc-btn">4</button>
        <button name="5" type="button" onClick={setState(calculate(state, '5'))} className="calc-btn">5</button>
        <button name="6" type="button" onClick={setState(calculate(state, '6'))} className="calc-btn">6</button>
        <button name="-" type="button" onClick={setState(calculate(state, '-'))} className="calc-btn ops">-</button>
        <button name="1" type="button" onClick={setState(calculate(state, '1'))} className="calc-btn">1</button>
        <button name="2" type="button" onClick={setState(calculate(state, '2'))} className="calc-btn">2</button>
        <button name="3" type="button" onClick={setState(calculate(state, '3'))} className="calc-btn">3</button>
        <button name="+" type="button" onClick={setState(calculate(state, '+'))} className="calc-btn ops">+</button>
        <button name="0" onClick={setState(calculate(state, '0'))} type="button" className="calc-btn" id="zero">0</button>
        <button name="." type="button" onClick={setState(calculate(state, '.'))} className="calc-btn">.</button>
        <button name="=" onClick={setState(calculate(state, '='))} type="button" className="calc-btn ops">=</button>
      </div>
    </div>
  );
};

export default Calculator;
