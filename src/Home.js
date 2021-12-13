// import React from "react";
// import { useState } from "react";
// import ArticlesLists from "../ArticlesLists";

import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";
import androidd from "./img/androidd.svg"
import ioss from "./img/ioss.svg"
import { Link } from "react-router-dom";


const Home = () => {
  return ( 

    <>
<Navbar />

<div className="buy">

  <h1> Buy, sell and manage your <br />
    Crypto on TradExpress.</h1>
</div>

<p className="crypto">Early Trade Cryptocurrencies like BTC,USDT,ETH,LTC & XRP
 with NGN.</p>

<div>
<Link to="/individual"><button className="btn">Get Started</button></Link>
</div>

<div className="store">
<div>
<img src= {ioss} alt=""/>
</div>

<div className="android">

<div>
<img src= {androidd} alt=""/>
</div>

</div>

</div>


          <Section1 />
          <Section2 />
          <Section3 />
          <Footer />
    </>

   );
}
 
export default Home;


























































// const Home = () => {
//   const [data, setData] = useState([
//     { title: "My new website", body: "lorem ipsum...", author: "Lanre", id: 1 },
//     {
//       title: "How to make money while sleeping!g",
//       body: "lorem ipsum...",
//       author: "Idunnu",
//       id: 2,
//     },
//     {
//       title: "The Developers Dilemma! 🤦‍♀️",
//       body: "lorem ipsum...",
//       author: "Eniola",
//       id: 3,
//     },
//   ]);

//   return (
//     <div>
//       <ArticlesLists article={data} title="Welcome to the Tech Blogsite" />
//     </div>
//   );
// };

// export default Home;
