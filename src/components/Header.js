import React from "react";
import taproomImage from "./../img/taproom.jpg";

function Header() {
  return (
    <React.Fragment>
      <h1>Tap Room</h1>
      <img src={taproomImage} alt="taproom" />
    </React.Fragment>
  );
}

export default Header;
