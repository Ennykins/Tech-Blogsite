// import React from "react";
// import { useState } from "react";
// import ArticlesLists from "../ArticlesLists";

import Navbar from "./Navbar";
import androidd from "./img/androidd.svg"
import ioss from "./img/ioss.svg"


const Home = () => {
  return (
    <div>

      <Navbar />

      <div className="buy">

        <h1> Buy, sell and manage your <br />
          Crypto on TradExpress.</h1>
      </div>

      <p className="crypto">Early Trade Cryptocurrencies like BTC,USDT,ETH,LTC & XRP
       with NGN.</p>

      <div>
      <button className="btn">Get Started</button>
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

</div>
  );
};

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
