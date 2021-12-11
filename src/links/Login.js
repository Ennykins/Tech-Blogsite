import Navbar from "../Navbar";

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

    
    <p><a href="/">Forgot Password?</a></p>

        <p className="remember"><a href="/pass">Remember Password?</a></p>
</div>
</form>

<div className="log">
<button>Log In</button>
<p>New Users? <a href="/login">Click here</a>
</p>
</div>
      </div>
      
    </div>
  );
};

export default Login;
