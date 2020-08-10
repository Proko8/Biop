import React from "react";
import "./Middle.css";
import pic from "./pic.jpg";

class Middle extends React.Component {
  state = {
    count: 0,
  };

  handleClick = (e) => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };

  render() {
    return (
      <div className="middle">
        <img className="image" src={pic} alt="" />
        <button className="block" onClick={this.handleClick}>
        </button>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default Middle;

/*<div className="middle">
      <img className="image" src={pic} alt="" /> */
