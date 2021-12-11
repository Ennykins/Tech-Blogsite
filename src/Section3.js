import purple from "./img/purple.svg"
import colon from "./img/colon.svg"
import ireti from "./img/ireti.jpg"
import bayo from "./img/bayo.jpg"
import olagoke from "./img/olagoke.jpg"
import social from "./img/social.svg"

const Section3 = () => {
    return ( 

        <div>
            {/* Section 3 */}

<div className="sec_3">

<h2>Customer's Review</h2>

<div>
  <img src= {purple} alt="" />
</div>

<div className="union">

<div className="colon">
  <img src= {colon} alt=""/>
</div>

<div>
  <h4>Trading on TradExpress mobile & web <br /> platforms has been a smooth experience for <br /> me and it is quite easy to navigate.</h4>
</div>



<div className="headshot">

  <div>
    <img src= {bayo} alt=""/>
  </div>


  <div className="text ireti_text">
    <h3>Ireti</h3>

    <p>Nigeria</p>
  </div>

</div>

</div>


{/* 2 */}
<div className="headshot_2">
  <img src= {purple} alt="" />
</div>

<div className="union">

<div className="colon">
  <img src= {colon} alt=""/>
</div>

<div>
  <h4>They have the best rate compared to <br /> other platforms with fast Payment.
  </h4>
</div>



<div className="headshot bayo">

  <div>
    <img src= {olagoke} alt=""/>
  </div>


  <div className="text">
    <h3>Bayo</h3>

    <p>USA</p>
  </div>

</div>

</div>


{/* 3 */}
<div className="headshot_3">
  <img src= {purple} alt="" />
</div>

<div className="union">

<div className="colon">
  <img src= {colon} alt=""/>
</div>

<div>
  <h4>Easy to fund and withdraw coins or cash <br /> on their platform.<br /> I will definitely trade with them again.</h4>
</div>



<div className="headshot ada">

  <div>
    <img src= {ireti} alt=""/>
  </div>


  <div className="text ada_text">
    <h3>Ada</h3>

    <p>Nigeria</p>
  </div>

</div>

</div>


</div>



{/* FOOTER */}

<section className="sec_4">

<div className="footer">

<div className="social">
  <h3>Product</h3>
  <p>Bitcoin</p>
  <p>Alt</p>
  <p>Flat</p>
  <p>Refill</p>
  <p>P2P</p>
</div>


<div className="social" >
  <h3>Learn</h3>
  <p>Blog</p>
  <p>Help Center</p>
</div>


<div className="social">
<h3>Contact</h3>
  <p>hello@tradexpress.com</p>
  <p>support@tradexpress.com</p>
  <img src= {social} alt=""/>
</div>


<div className="social">
<h3>Company</h3>
  <p>About Us</p>
  <p>Careers</p>
  <p>Rates</p>
  <p>Mobile</p>
</div>


<div className="social">
<h3>Legal</h3>
  <p>privacy Policy</p>
  <p>Anti-Money Laundering</p>
  <p>Tearms and Conditions</p>
</div>

</div>

</section>
        </div>
     );
}
 
export default Section3;