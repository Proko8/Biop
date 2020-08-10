import React from 'react'

const red = '	#FF0000';
const blue = '#0000FF';

class LowerMiddle extends React.Component {
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
      <div style={{background: this.state.color}}>
        <h1>
          Toggle color
        </h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
export default LowerMiddle
