import React from "react";
import TradExpress from "./img/TradExpress.svg"
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <div>
      <div className="trade_logo">
      <img src= {TradExpress} alt=""/>
      </div>

      <nav className="navbar">

<div className="links">
 
  <a href="/instant">Instant Buy/Sell</a>

  <a href="/learn">Learn</a>

  <button className="login login_button">
    <a href="/login">Login</a>
  </button>

  <button className="start">
  <a href="/Start">Get Started</a>
  </button>
  
</div>
</nav>
    </div>

   
  );
};

export default Navbar;
