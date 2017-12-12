import React, { Component } from 'react';

import './Counter.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  handleUp = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDown = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="counter">
        <button className="counter-button button-up" onClick={this.handleUp}>+</button>
        <h1 className="counter-value">{value}</h1>
        <button className="counter-button button-down" onClick={this.handleDown}>-</button>
      </div>
    );
  }
}

export default Counter;
