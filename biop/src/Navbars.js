import React from "react";
import "./Navbars.css";


function Navbars() {
  return (
    <div className="navbar">
      <form action="https://www.google.com/">
        <button type="submit">Google</button>
      </form>

      <form action="https://facebook.com">
        <button type="submit">Facebook</button>
      </form>
    </div>
  );
}

export default Navbars;
