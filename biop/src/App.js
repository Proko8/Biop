import React from 'react';
import Navbars from "./Navbars";
import UpperMiddle from "./UpperMiddle";
import LowerMiddle from "./LowerMiddle";
import Bottom from "./Bottom";
import Time from "./Time"

function App() {
  return (
    <div className="app">
      <Navbars />
      <UpperMiddle />
      <LowerMiddle />
      <div className="bottom">
      <Bottom />
      <Time />
      </div>
    </div>
  )
}

export default App

