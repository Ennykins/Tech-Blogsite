import Home from "./Home";
import Individual from "./links/Individual";
import Business from "./links/Business";
import Login from "./links/Login";
import Instant from "./links/Instant";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  return ( 
    <Router>
      <Switch>
        <Route exact path="/">
        <div className="content">
        <Home />
      </div>
        </Route>

      <Route path="/individual">
      <Individual />
      </Route>

      <Route path="/business">
      <Business />
      </Route>
      
      <Route path="/login">
      <Login />
      </Route>

      <Route path="/instant">
      <Instant />
      </Route>

      </Switch>
    </Router>
   );
}
 
export default App;
