import React from 'react'
import "./Color.css"

const red = '	#FF0000';
const blue = '#0000FF';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: red };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
      	const newColor = this.state.color == red ? blue : red;
    this.setState({color: newColor});  
    
  }
  
  render() {
    return (
      <div className="colors" style={{background: this.state.color}}>
        <button onClick={this.changeColor}>
          Toggle color
        </button>
      </div>
    );
  }
}
export default Color
