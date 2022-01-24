import React, { Component, useEffect, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import TurnCard from '../components/TurnCard';
import './NHIE.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { Helmet } from 'react-helmet';


const cardImages = [
    {"src": "NHIECards/n1.jpg", picked: false},
    {"src": "NHIECards/n2.jpg", picked: false},
    {"src": "NHIECards/n3.jpg", picked: false},
    {"src": "NHIECards/n4.jpg", picked: false},
    {"src": "NHIECards/n5.jpg", picked: false},
    {"src": "NHIECards/n6.jpg", picked: false},
    {"src": "NHIECards/n7.jpg", picked: false},
    {"src": "NHIECards/n8.jpg", picked: false},
    {"src": "NHIECards/n9.jpg", picked: false},
    {"src": "NHIECards/n10.jpg", picked: false},
    {"src": "NHIECards/n11.jpg", picked: false},
    {"src": "NHIECards/n12.jpg", picked: false},
    {"src": "NHIECards/n13.jpg", picked: false},
    {"src": "NHIECards/n14.jpg", picked: false},
    {"src": "NHIECards/n15.jpg", picked: false},
    {"src": "NHIECards/n16.jpg", picked: false},
    {"src": "NHIECards/n17.jpg", picked: false},
    {"src": "NHIECards/n18.jpg", picked: false},
    {"src": "NHIECards/n19.jpg", picked: false},
    {"src": "NHIECards/n20.jpg", picked: false},
    {"src": "NHIECards/n21.jpg", picked: false},
    {"src": "NHIECards/n22.jpg", picked: false},
    {"src": "NHIECards/n23.jpg", picked: false},
    {"src": "NHIECards/n24.jpg", picked: false},
    {"src": "NHIECards/n25.jpg", picked: false},
    {"src": "NHIECards/n26.jpg", picked: false},
    {"src": "NHIECards/n27.jpg", picked: false},
    {"src": "NHIECards/n28.jpg", picked: false},
    {"src": "NHIECards/n29.jpg", picked: false},
    
    
]

function NHIE(){
    
    const [deck, setDeck] = useState([])
    const [choice, setChoice] = useState(null)
    
    
    

    const handleChoice = (card) => {
            // choice ? setChoice(card) : setChoice(choice)
            setChoice(card)

    }

    
    
    //shuffle cards
    const shuffleCards  = () => {
        const shuffledDeck = [...cardImages] 
            .sort(()=> Math.random() - 0.5) 
            .map((card) => ({...card, id: Math.random()}))
        
        setDeck(shuffledDeck.slice(28))
        
        
    }

    

    
    
    //card stays open
    useEffect(() => {

        if (choice != null){
            
            setDeck(prevCards => {
                return prevCards.map(card => {
                    if (card.src === choice.src) {
                        return {...card, picked: true}
                    }
                    else {
                        return card
                    }
                })
            })
        }

    },[choice])


    return(
        <>
            <Helmet>
            <title>Never Have I Ever | Harinuman</title>
            </Helmet>

            <div className='sosBG' style={{position:'fixed'}}>
            <Navbar id="grayy" variant="dark" fixed='top'>
                <Navbar.Brand href='/Menu'>
                    <img className='sized' src='images/harinuman-small.png'/>
                </Navbar.Brand>
                <img style={{height:'80px', width:'580px', marginTop:'0px', paddingTop:'10px'}} src='images/nhietitle.png'/>
                {/* <img src='/SOScards/cardBack.png' title='Click here to draw a card' className='carder' onClick = {shuffleCards}/> */}
            </Navbar>

            <img  className='deck' title="Click here to draw a card" src= "./NHIECards/cardBack.png" onClick = {shuffleCards}/>
            <div className = "pickedCard">
                {
                    deck.map(card => (
                            
                            <TurnCard 
                                key={card.id} 
                                card = {card} 
                                handleChoice = {handleChoice}
                                flipped = {card.picked}
                                backCard = "/NHIECards/cardBack.png" 
                                />
                        
                                
                        
                    
                    ))}
            </div>
        </div>
        </>
        
    )
}


export default NHIE;