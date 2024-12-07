// import { useState } from 'react'
import one from './assets/1.webp'
import two from './assets/2.webp'
import third from './assets/3.webp'
import fourth from './assets/4.webp'
import fifth from './assets/5.webp'
import six from './assets/6.webp'
import seven from './assets/mooi-home.png'
import eight from './assets/first.webp'
import nine from './assets/second.webp'
import ten from './assets/bg-2.webp'
import ele from './assets/third.webp'
import twe from './assets/fourth.webp'
import aa from './assets/f-1.png'
import bb from './assets/fb.png'
import cc from './assets/yt.png'
import dd from './assets/twi (2).png'
import btn from './assets/button copy.webp'


import './style.css'

function App() {


  return (
    <>
      <div className="header">
        <img src={seven}/>
        <div className="bg">
        <h1>moooi</h1>
        <p>A LIFE EXTRAORDINARY</p>
        <h2>Get a taste of Monster</h2>
         <div>
        <h3 className="center">Moon</h3>
        </div> 
        <div>
        <h4 className="p1">A dining scene designed to captivate the night</h4>
        </div>
       <div className="btn-1">
        <img src={btn}/>
       
            <h4>MENU</h4>
     
       </div>
     </div>
     </div>

<div className="heading">
    <p>SHOP OUR COLLECTION</p>
</div>

     <div className="imgs">
        <div className="i">
            <img src={one}/>
            <p>Bedding & Bath</p>
        </div>
        <div className="i">
            <img src={two}/>
            <p>Furnitre</p>
        </div>
        <div className="i">
            <img src={third}/>
            <p>Lighting</p>
        </div>
        <div className="i">
            <img src={fourth}/>
            <p>Home Accessories</p>
        </div>
        <div className="i">
            <img src={fifth}/>
            <p>Wall & Floor</p>
        </div>
        <div className="i">
            <img src={six}/>
            <p>Body & Beauty</p>
        </div>
    </div>

<div className="first">
    <div className="img-1">
        <img src={eight}/>
    </div>
    <div className="tex-1">
        <p>MOOOI PRESENTS</p>
        <h1>llluminate the<br/> soft glow of the<br/> NR2</h1>
        <h4>Discover NR2 Now</h4>
    </div>
</div>

<div className="second">
    <div className="tex-2">
        <p>MOOOI PRESENTS</p>
        <h1>Monster chair-<br/>unveil the soft<br/>side of fear</h1>
        <h4>Configure the Monster chair</h4>
    </div>
    <div className="img-2">
        <img src={nine}/>
    </div>
</div>

<div className="bg-2">
    <img src={ten}/>
    <div className="lines">
        <p>PRODUCT STORY</p>
        <h1>Container Table-</h1>
        <h2 className="br">Endless Posibilites</h2>
        <a href="">Discover Container Table now</a>
    </div>
</div>

<div className="third">
    <div className="img-4">
        <img src={ele}/>
    </div>
    <div className="tex-3">
        <p>MOOOI PRESENTS</p>
        <h1>Shoot for the<br/>Moon</h1>
        <h4>Discover Moon Carpet Now</h4>
       </div>
</div>

<div className="fourth">
    <div className="tex-4">
        <p>MOOOI PRESENTS</p>
        <h1>Royal Delft-<br/>Black Edition<br/>side of fear</h1>
        <button className="btn">
        <h4>Explore the edition now</h4>
        </button>
       </div>
       <div className="img-4">
            <img src={twe}/>
        </div>
</div>

<div className="footer">

    <div className="top">
        <button>
            <h3>My country/region is not listed</h3>
        </button>
    </div>
    
    <div className="f-1">
    <div className="con-1">
        <h3>Store Locator</h3>
        <h3>Material Library</h3>
        <h3>Shipping & Returns</h3>
        <h3>FAQ</h3>
    </div>

    <div className="con-1">
        <h3>Newsletter</h3>
        <h3>Press Area</h3>
        <h3>Jobs</h3>
    </div>
    </div>

    <div className="icon">
        <div className="logo">
        <img src={aa}/>
        <img src={bb}/>
        <img src={cc}/>
        <img src={dd}/>
        </div>

        <div className="f-con">
        <div className="f-bar">
            <h4>Disclaimer</h4>
            <h4>Cookie Policy</h4>
            <h4>General Conditions</h4>
            <h4>Privacy Statement</h4>
        </div>
        </div>
     
    </div>

  <div className="last-line">
    <h4>©2024 Moooi</h4>
  </div> 

</div>


    </>
  )
}


export default App

