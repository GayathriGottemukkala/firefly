// src/App.js
import React, { useState } from 'react';
import Popup from './popup';
import "./style.css"


function Home() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="h-screen">
            <div className='home-card'>
                <nav>
                    <img src={require("../images/navimg.png")}/>

                </nav>
                <div>
                <h1>The choice is yours. Because they don't have one.</h1>
                <button>QUICK VIEW</button>
                </div>
 
            </div>
             <div className='bottom-card'>
            <div className='about-card2'>
                <img src={require("../images/sideorg.png")}/>
                <h1>About</h1>
                <img src={require("../images/sideorg.png")}/>
            </div>
            <div className='about-card2-content'>
                <img src={require("../images/flash.png")}/>
                <div>
                <p>Our products are crafted exclusively from
                     the dreams and screams of young kids who wanted to show their mastery in their 
                     chosen fields, but were directed towards a factory for daily wages. Each cracker bursts 
                     brighter than their lost smiles, and can be heard louder than their cries for miles. 
                     Buy them, burst them, brag about them. </p>
                     <span>The choice is yours. Because they don’t have one.</span>
                </div>
                
                     <img src={require("../images/flash.png")}/>
            </div>
            <div className='about-card2'>
                <img src={require("../images/sideorg.png")}/>
                <h1>Our Product</h1>
                <img src={require("../images/sideorg.png")}/>
            </div>
            
            <div className='cards'>
                <div className='card'>
                    <img src={require("../images/imgcrac.png")}/>
                    <div> 
                        <p>Raju Rassibomb</p>
                        <button onClick={togglePopup}>QUICK BELOW</button>
                    </div>

                </div>
                <div className='card'>
                    <img src={require("../images/imgcrac.png")}/>
                    <div> 
                        <p>Ladiyon ki Rani Chani</p>
                        <button onClick={togglePopup}>QUICK BELOW</button>
                    </div>

                </div>
            </div>
            <di className="bot-card">
                <img src={require("../images/sideorg.png")}/>
            </di>
            </div>
            <div className='bottom-bar'>
                <img className='img' src={require("../images/sidedecor.png")}/>
                <div className='bar-bot'>
                    <img src={require("../images/bellowimg.png")}/>
                    <div>
                        <p>Follow us on</p>
                        <img src={require("../images/icons.png")}/>
                    </div>
                    <img src={require("../images/bellowimg.png")}/>
                </div>
                <img className='img' src={require("../images/sidedecor.png")}/>
            </div>


            
          
            
            <Popup show={showPopup} onClose={togglePopup} />
        </div>
    );
}

export default Home;
