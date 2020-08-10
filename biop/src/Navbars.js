import React from "react";
import "./Navbars.css"

function Navbars() {
  return (
    <div className="navbar">
      <div className="facebook">
        <input
          type="button"
          onclick="location.href='https://facebook.com';"
          value="Facebook"
        />
      </div>
      <div className="google">
        <input
          type="button"
          onclick="location.href='https://google.com';"
          value="Google"
        />
      </div>
    </div>
  );
}

export default Navbars;
