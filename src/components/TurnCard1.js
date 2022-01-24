import React, {useState,useEffect} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

function TurnCard1({card1, handleChoice, flipped, backCard, disabled} ){

    

    const handleClick =() => {

        if(!disabled){
            handleChoice(card1)
        }
        
    }

    
    return(
        <div className='card1'>
             <div onClick = {handleClick}> 
                 {/* <img className = "front" src = {card.src} alt="card front" />
                 <img className = "back" src = "/DodgeCards/cardBack.png" onClick ={handleClick} alt = "card back" /> */}
                 {flipped ? <img className='pick-card' title='Pick a new card from the deck' src= {card1.src} /> : <img title='Flip the card' src= {backCard} />}
                
                 
                 
             </div>
        
        </div>

    );

}

export default TurnCard1; 