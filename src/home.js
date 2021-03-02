import React from 'react';
import Footer from './footer';
import Navbar from './nav';
import './home.css';
import img1 from './assets/img/save.PNG';
import img2 from './assets/img/save2.PNG';
import img3 from './assets/img/save3.PNG';



const Home  = () =>{
    
    return(
    <div> <Navbar />  
        <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Studio!</div>
            <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
           <div style={{position:'relative'}}> <a id="btn1" className="btn btn-primary  text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            <a id="btn2"  className="btn btn-primary  text-uppercase js-scroll-trigger" style={{marginLeft:'4px'}} href="#services">Tell Me More</a></div>
          </div>
        </div>
      </header>
      <center> <p  id="x2">Market and Let Market
Leverage your revenue by marketing and by being a marketing medium
</p></center>
            <div class="section-title">
          <h2 id="x3">why baeon?</h2>
          
          <p>
          Every day, companies and organizations gain competitive advantage and value by 
          thinking digitally. Often, these companies need a partner to help them reach their full potential. We act as a strategic partner for enterprises, nonprofits and organizations that wish to harness the power and scale of technology to achieve business objectives.

We focus on the brands, technologies, and practices that drive world-class brand experience,
 through integrated business and software solutions.<br/><br/>
 <center><button type="button" class="btn btn-outline-warning" id="1b">LEARN MORE</button></center>
          </p>
        </div>


  <div class="container">     
    <div class="row">
      <div  class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <div  class="row" id="card1">
          <div id="moveleft" class="column" >
            <h2>Media&nbsp;partners</h2>
            <img src={img3} alt="Logo" width="130px" height="130px" ></img>
          </div>
          </div>
    </div>
      <div  class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <div class="row" id="card1">
          <div  id="moveleft" class="column" >
            <h2>Save&nbsp;Money</h2>
            <img src={img1} alt="Logo" width="130px" height="130px" ></img>
          </div>
        </div> 
      </div>
      <div  class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <div  class="row" id="card1">
          <div id="moveleft" class="column" >
            <h2>Hyperlocal&nbsp;rewards</h2>
            <img src={img2} alt="Logo" width="130px" height="130px" ></img>
          </div>
        </div> 
      </div>
    </div>
  </div>

 
  <div class="container-fluid">     
    <div class="row">
    <div style={{height:'250px'}} class="col-sm-6 bg-success">
      <h1>Column 1</h1>
    </div>
      <div style={{height:'250px'}} class="col-sm-6 bg-warning">
      <h1>Column 2</h1>
      </div>
    </div>
  </div>

      <Footer />
      </div>
    );
}


export default Home;