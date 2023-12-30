import React from "react";
import "./Footer.css";
import filmsterLogo from "./filmsterlogo.svg";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="logoContainer">
        <img src={filmsterLogo} alt="filmster logo" />
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
