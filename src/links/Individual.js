import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Individual= () => {
  return (

    
    <div>
<div className="navbar_2">
<Navbar />

</div>
      <div className="welcome_page">

      <h2>Welcome!</h2>

<div className="status">
  <button className="individual">
  <Link to="/indidivual">Individual</Link>
  </button>

  <button className="business">
  <Link to="/business">Business</Link>
  </button>
</div>

<form action="" className="form">

  <input type="text" placeholder="Username"></input> <br />


  <input type="text" placeholder="Full Name"></input> <br />

  <input type="Email" placeholder="Email"></input> <br />

  <input type="number" placeholder="Phone Number"></input> <br />

<input type="number" placeholder="Referral Code (optional)"></input> <br />

<p>By clicking the Sign Up button below, you agree to TradExpress <a href="/">terms and conditions</a></p>

</form>

<div className="signup">
<button>Sign Up</button>
<p>Already have an account? <a href="/login">Click here</a>
</p>
</div>
      </div>
      
    </div>
  );
};

export default Individual;
