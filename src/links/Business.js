import Navbar from "../Navbar";

const Business= () => {
  return (

    
    <div>
<div className="navbar_2">
<Navbar />

</div>
      <div className="welcome_page">

      <h2>Welcome!</h2>

<div className="status">
  <button className="individual individual_2">
    <a href="/indidivual">Individual</a>
  </button>

  <button className="business business_2">
    <a href="/business">Business</a>
  </button>
</div>

<form action="" className="form">

  <label for="Username"></label>
  <input type="text" placeholder="Username"></input> <br />

  <label for="Fullname"></label>
  <input type="text" placeholder="Full Name"></input> <br />


  <label for="Email"></label>
  <input type="Email" placeholder="Email"></input> <br />


  <label for="Phone Number"></label>
  <input type="number" placeholder="Phone Number"></input> <br />


<label for="Referral code"></label>
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

export default Business;
