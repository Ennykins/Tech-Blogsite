import Home from "./Home";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";
import Individual from "./links/Individual";
import Business from "./links/Business";
import Login from "./links/Login";

const App = () => {
  return ( 
    <div>
      <div className="content">
        <Home />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      <Individual />
      <Business />
      <Login />
    </div>
   );
}
 
export default App;
