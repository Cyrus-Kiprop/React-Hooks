import React, { Component } from "react";

class Classical extends Component {
  state = {
    count: 0
  };

  // using the componentDidUpdate lifeCycle method which is an equivalent to the useEffect() methods in
  //   function react components(react hook)

  componentDidUpdate() {
    // just aweful
    setTimeout(() => {
      console.log(`you clicked here ${this.state.count} times`);
    }, 3000);
  }
  // some class methods
  handleClick = () => {
    let count = this.state.count;
    this.setState({
      count: count + 1
    });
  };

  handleAlertClick = () => {
    setTimeout(() => {
      alert("you have clicked " + this.state.count + "times");
    }, 3000);
  };

  render() {
    return (
      <div>
        <p>You clicked here {this.state.count} times</p>
        <button onClick={this.handleClick}>Click Here.</button>
        <button onClick={this.handleAlertClick}>Alert.</button>
      </div>
    );
  }
}

export default Classical;
