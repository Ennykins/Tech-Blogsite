import ios from "./img/ios.svg"
import android from "./img/android.svg"

const Section2 = () => {
    return ( 

        <div>
            
{/* Section 2 */}


<section className="sec_2">

<div>
  <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>

  <h2>Create your account for free and start trading today!</h2>


  <div>
      <button className="btn get">Get Started</button>
      </div>


  <div className="store_2">

  <div><button className="andro second">
    <div>
      <img src= {ios} alt=""/></div> <div><h5 className="low">Download on the <p className="big">App store</p></h5></div>
      </button>
      </div>
      

       <div><button className="andro first" >
    <div>
      <img src= {android} alt=""/></div> <div><h5 className="low">Download on the <p className="big">Google Play</p></h5></div>
      </button></div>
</div>
</div>

</section>

        </div>
     );
}
 
export default Section2;