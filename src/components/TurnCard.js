import React, {useState,useEffect} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './TurnCard.css'

function TurnCard({card, handleChoice, flipped, backCard, disabled} ){

    

    const handleClick =() => {

        if(!disabled){
            handleChoice(card)
        }
        
    }

    
    return(
        <div className='card'>
             <div onClick = {handleClick}> 
                 {/* <img className = "front" src = {card.src} alt="card front" />
                 <img className = "back" src = "/DodgeCards/cardBack.png" onClick ={handleClick} alt = "card back" /> */}
                 {flipped ? <img className='pick-card' title='Pick a new card from the deck' src= {card.src} /> : <img src= {backCard} />}
                
                 
                 
             </div>
        
        </div>

    );

}

export default TurnCard; 