import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Login= () => {
  return (

    
    <div>
<div className="navbar_2">
<Navbar />

</div>
      <div className="loginn">

      <h2>Welcome Back!</h2>


<form action="" className="form_2">

  <label for="Username"></label>
  <input type="text" placeholder="Username"></input> <br />

  <label for="Password"></label>
  <input type="password" placeholder="Full Name"></input> <br />
<div className="pass">

    
    <p><Link to="/pass">Forgot Password?</Link></p>

        <p className="remember"><Link to="/pass">Remember Password?</Link></p>
</div>
</form>

<div className="log">
<button>Log In</button>
<p>New Users? <Link to="/login">Click here</Link>
</p>
</div>
      </div>
      
    </div>
  );
};

export default Login;
