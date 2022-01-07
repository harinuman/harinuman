import React, {useState} from 'react';
import '../App.css';
import {Link, Route, Routes} from 'react-router-dom';
import './turnon.css'





function Turnon(images){

    const [light, setLight] = useState(false)

    function lightOn () {
        setLight(true)
    }
    function lightOff () {
        setLight(false)
    }

    

    return(
        <>
            <div classname = "img-container" onMouseEnter={lightOn} onMouseLeave={lightOff}>
                {light ? <img src= {images.on} /> : <img src={images.off} />}
                
                
                
            </div>
                   
        </>

    );
}

export default Turnon;