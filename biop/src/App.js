import React from 'react';
import Navbars from "./Navbars";
import Counter from "./Counter";
import Color from "./Color";
import Calendar from "./Calendar";
import Time from "./Time"

function App() {
  return (
    <div className="app">
      <Navbars />
      <Counter />
      <Color />
      <div className="bottom">
      <Calendar />
      <Time />
      </div>
    </div>
  )
}

export default App

