import React, { Component, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar'
import './dodge.css'
import TurnCard from '../components/TurnCard';

function Dodge(){
    const back = "images/cardBack.png"
    const front = "images/cardFrontBlank.png"
    
    const [picked, setPicked] = useState(false);

    const Picked = (back, front) =>{
            setPicked(true);
    }

    const [picked2, setPicked2] = useState(false);

    const Picked2 = (back, front) =>{
            setPicked2(true);
    }

    return(
        <div classname="bg">
            <Navbar />
            <div onClick={Picked}>
                <TurnCard pick = {picked} back = {back} front ={front} /> 
            </div>
            <div onClick={Picked2}>
                <TurnCard pick = {picked2} back = {back} front ={front} /> 
            </div>
            
            
            
            {/* <h1>Tangina</h1> */}
        </div>
    )
}

export default Dodge;