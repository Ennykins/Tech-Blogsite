import wallet from "./img/wallet.svg"
import rate from "./img/rate.svg"

const Section1 = () => {
    return (
<div>
    {/* section1 */}

<section className="sec_1">

<div className="why">
 <h2> Why do people get involved with Cryptocurrencies?</h2>
</div>


<div class="grid">

  <div className="mode_of_payment mode">
    <img src= {wallet} alt="/"/>

    <h2>Easy Mode of Payment</h2>
    <p>People can now easily send receive money <br /> from anywhere in the world to purchase goods and <br /> pay for services</p>
    
    </div>


    <div className="mode_of_payment mode">
    <img src= {rate} alt="/"/>

    <h2>Financial Freedom</h2>
    <p className="mode_p">Just like the internent no single entity controls the <br />  Crypto network which provides users transparency <br /> and privacy, which puts you in absolute control of <br /> your money.</p>
    
    </div>


    <div className="mode_of_payment mode investment">
    <img src= {wallet} alt="/"/>

    <h2>Investment</h2>
    <p>The constant demand as made Cryptocurrencies a <br />  Digital Gold used for alternative store of wealth on <br /> long term investments.</p>
    
    </div>
</div>
<div>
      <button className="btn2">Learn More</button> 
    
      </div>

<div>

     <div>

     <h1 className="steps">Buy and Sell your Cryptocurency in 3 simple steps</h1>
 
     <div className="mode_of_payment2">
       
       <h2>Create a free Account</h2>

       <p>Sign up for your free TradExpress Wallet <br /> on the Web,IOS, Android device and follow our <br /> easy process to set up your profile</p>

<img src= {wallet} alt="/"/>
       
       </div>


<div className="mode_of_payment2">
<h2>Buy/Sell Crypto</h2>


<p>Buy BTC,USDT,ETH,LTC,XRP,DOGE and <br /> securely store it in your wallet or send <br /> it easily to friiends and family.</p>

<img src= {rate} alt="/"/>
</div>

<div className="mode_of_payment2">
<h2>Deposit</h2>

<p>Choose your preferred deposit option like bank transfer,<br /> credit/debit card or send digital asset directly to your <br /> wallet for easy funding/withdrawl.</p>

<img src= {wallet} alt="/"/>
</div>

     </div>



      </div>


</section>
</div>

      );
}
 
export default Section1;