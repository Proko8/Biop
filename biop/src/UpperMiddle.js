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
//   handleClickColor = (e) => {
//     const color = this.state.color;
//     if(this.state.color === 0){
//     this.setState({ color: color + 1 });
    // }else{
    //     this.setState({color: color - 1})
    // }

//     if(this.state.color === 0){

//     }
//   };

  render() {
    return (
      <div className="middle">
        <img className="image" src={pic} alt="" />

        <button className="block" onClick={this.handleClick}></button>

        <div className="counter">{this.state.count}</div>
{/* 
        <button className="block2" onClick={this.handleClickColor}></button>

        <div className="color0">{this.state.color}</div>
        <div className="color1">{this.state.color}</div> */}

      </div>
    );
  }
}

export default UpperMiddle;

/*<div className="middle">
      <img className="image" src={pic} alt="" /> */
