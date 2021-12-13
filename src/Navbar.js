import React from "react";
import TradExpress from "./img/TradExpress.svg"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (

    <div>
      <div className="trade_logo">
      <Link to="/"><img src= {TradExpress} alt=""/></Link>

      </div>

      <nav className="navbar">

<div className="links">
 
<Link to="/instant" className="buy_sell buy_sell_2">Instant Buy/Sell</Link>
  
<Link to="/">Learn</Link>

  <button className="login login_button">
  <Link to="/login">Login</Link>
  </button>

  <button className="start">
  <Link to="/individual">Get Started</Link>
  </button>
  
</div>
</nav>
    </div>

   
  );
};

export default Navbar;
