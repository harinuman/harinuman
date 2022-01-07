import React, {useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

function TurnCard(card){

    const replaceImage = card.pick;

    
    return(
        <div>
             {replaceImage ? <img src= {card.front} /> : <img src={card.back} />}
        
        </div>

    );

}

export default TurnCard; 