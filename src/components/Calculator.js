/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.doCalculation = this.doCalculation.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
      btn: null,
    };
  }

  doCalculation = (e) => {
    this.setState((state) => calculate(state, e.target.name));
  }

  render() {
    return (
      <div className="calculator">
        <input type="number" placeholder="0" defaultValue={this.state.next === null && this.state.operation === null ? this.state.total : this.state.next} />
        <div className="calc-btns">
          <button name="AC" onClick={this.doCalculation} type="button" className="calc-btn">AC</button>
          <button name="+/-" onClick={this.doCalculation} type="button" className="calc-btn">+/-</button>
          <button name="%" onClick={this.doCalculation} type="button" className="calc-btn">%</button>
          <button name="÷" onClick={this.doCalculation} type="button" className="calc-btn ops">&divide;</button>
          <button name="7" onClick={this.doCalculation} type="button" className="calc-btn">7</button>
          <button name="8" onClick={this.doCalculation} type="button" className="calc-btn">8</button>
          <button name="9" onClick={this.doCalculation} type="button" className="calc-btn">9</button>
          <button name="x" onClick={this.doCalculation} type="button" className="calc-btn ops">&times;</button>
          <button name="4" type="button" onClick={this.doCalculation} className="calc-btn">4</button>
          <button name="5" type="button" onClick={this.doCalculation} className="calc-btn">5</button>
          <button name="6" type="button" onClick={this.doCalculation} className="calc-btn">6</button>
          <button name="-" type="button" onClick={this.doCalculation} className="calc-btn ops">-</button>
          <button name="1" type="button" onClick={this.doCalculation} className="calc-btn">1</button>
          <button name="2" type="button" onClick={this.doCalculation} className="calc-btn">2</button>
          <button name="3" type="button" onClick={this.doCalculation} className="calc-btn">3</button>
          <button name="+" type="button" onClick={this.doCalculation} className="calc-btn ops">+</button>
          <button name="0" onClick={this.doCalculation} type="button" className="calc-btn" id="zero">0</button>
          <button name="." type="button" onClick={this.doCalculation} className="calc-btn">.</button>
          <button name="=" onClick={this.doCalculation} type="button" className="calc-btn ops">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
