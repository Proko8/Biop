import React from "react";
import "./UpperMiddle.css";
import pic from "./pic.jpg";
import ReactDOM from "react-dom";

const green = '#39D1B4';
const yellow = '#FFD712';

class UpperMiddle extends React.Component {
  state = {
    count: 0,
    color: 0,
  };


  handleClick = (e) => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };

  render() {
    return (
      <div className="middle">
        <img className="image" src={pic} alt="" />

        <button className="block" onClick={this.handleClick}></button>

        <div className="counter">{this.state.count}</div>

      </div>
    );
  }
}

export default UpperMiddle;
