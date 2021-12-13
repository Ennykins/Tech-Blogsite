import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Instant= () => {
  return (

    
    <div>
<div className="navbar_2 navbar_3">

<Navbar />

</div>
      <div className="welcome_page instant">

      <h2>Buy/Sell Instantly</h2>

<div className="status">
  <button className="individual">
  <Link to="/">Buy</Link>
  </button>

  <button className="business">
  <Link to="/">Sell</Link>
  </button>
</div>

<form action="" className="form">


<label className="label_2" for="coin">Coin to Buy</label><br /> <br />

        <select name="coin" id="coin">
          <option>Bitcoin(BTC)</option>
          <option>Tether(USDT)</option>
          <option>Ethereum(ETH)</option>
          <option>Litecoin(LTC)</option>
          <option>Ripple(XRP)</option>
          <option>Naira(NGN)</option>        
        </select>
        <br />
        <br />

        <label className="label_2" for="states">Currency</label><br /> <br />
        
        <select name="currency" id="currency">
        <option>Naira(NGN)</option>
          <option>Dollar(USD)</option>
          <option>Euro(EURO)</option>
          <option>Pounds(GBP)</option>
        </select>
        <br />
        <br />

        <label className="label_2" for="states">Amount</label><br /> <br />
        
        <select name="currency" id="currency">
        <option>(NGN) 3,000,000.00</option>
        </select>
        <br />
        
</form>

<div className="signup">
<button>Continue</button>    

</div>
      </div>
      
    </div>
  );
};

export default Instant;
