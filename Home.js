import React from 'react';
import '../Styles/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import myImg from '../Images/Desktop.jpg' ;
import myJum from '../Images/jumia name.png' ;
import myFirst from '../Images/jumia-slider.jpg' ;
import mySecond from '../Images/jumia slider 3.png' ;
import myThird from '../Images/Artboard1.png' ;
import myBox from '../Images/Jumia box.PNG' ;
import myForce from '../Images/JFORCE.gif' ;
import myPic from '../Images/jtl.jpeg' ;


function Home() {
    
 return (
  <div>
             
    <div id="header1">
          <img src={myImg} alt='Jumia page'/>
    </div>

    <div id="header2">
      <span style={{ marginLeft: '300px'}}>Sell on Jumia</span>
      <span id="hdsp">
        <span >Jumia</span>
        <span>Pay</span>
      </span>
      <span><img src={myPic} alt='pic' style={{ height: '18px', marginLeft: '750px'}}/></span>
    </div>

    <div id="header3">
      <span> <img id="jumimg" src={myJum} alt='jum'/>  </span>

      <span id="searchArea">
        <form action="">
          <input type="search" placeholder="Search products and images" />
              
          <button type="submit" id="searchbutton" > Search </button>
        </form>
      </span> 

        <nav>
          <ul>
            <li> Account </li>
            <li> Help </li>
            <li> Cart </li>
          </ul>
        </nav>
    </div>

  
  <div id="themain">
      
    <span id="main1">
      <p>  Appliances  </p>
      <p>  Phones & Tablets  </p>
      <p>  Health & Beauty </p>
      <p>  Home & Office  </p>
      <p>  Electronics  </p>
      <p>  Fashion  </p>
      <p>  Supermarket </p>
      <p>  Computing </p>
      <p>  Baby Products  </p>
      <p>  Gaming </p>
      <p>  Musical Instruments  </p>
      <p>  Other Categories  </p>
    </span>

    <span id="main2">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img  src={myFirst}  class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={mySecond}  class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img  src={myThird} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
     </span>

    <span id="main3">
        <p><img src={myBox} alt='Jumia box'/> </p>
        <p><img src={myForce} alt='Jumia Force'/> </p>
    </span>
   
    </div>

</div>   
  
  );
}

export default Home
