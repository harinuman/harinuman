import React, { Component, useEffect, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './dodge.css'
import TurnCard1 from '../components/TurnCard1';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { Helmet } from 'react-helmet';


const cardImages = [
    {"src": "DodgeCards/d1.jpg", picked: false},
    {"src": "DodgeCards/d2.jpg", picked: false},
    {"src": "DodgeCards/d3.jpg", picked: false},
    {"src": "DodgeCards/d4.jpg", picked: false},
    {"src": "DodgeCards/d5.jpg", picked: false},
    {"src": "DodgeCards/d6.jpg", picked: false},
    {"src": "DodgeCards/d7.jpg", picked: false},
    {"src": "DodgeCards/d8.jpg", picked: false},
    {"src": "DodgeCards/d9.jpg", picked: false},
    {"src": "DodgeCards/d10.jpg", picked: false},
    {"src": "DodgeCards/d11.jpg", picked: false},
    {"src": "DodgeCards/d12.jpg", picked: false},
    {"src": "DodgeCards/d13.jpg", picked: false},
    {"src": "DodgeCards/d14.jpg", picked: false},
    {"src": "DodgeCards/d15.jpg", picked: false},
    {"src": "DodgeCards/d16.jpg", picked: false},
    {"src": "DodgeCards/d17.jpg", picked: false},
    {"src": "DodgeCards/d18.jpg", picked: false},
    {"src": "DodgeCards/d19.jpg", picked: false},
    {"src": "DodgeCards/d20.jpg", picked: false},
    {"src": "DodgeCards/d21.jpg", picked: false},
    {"src": "DodgeCards/d22.jpg", picked: false},
    {"src": "DodgeCards/d23.jpg", picked: false},
    {"src": "DodgeCards/d24.jpg", picked: false},
    {"src": "DodgeCards/d25.jpg", picked: false},
    {"src": "DodgeCards/d26.jpg", picked: false},
    {"src": "DodgeCards/d27.jpg", picked: false},
    
]

function Dodge(){
    // const back = "images/cardBack.png"
    // const front = "images/cardFrontBlank.png"
    
    const [deck, setDeck] = useState([])
    const [choice, setChoice] = useState(null)
    
    

    const handleChoice = (card1) => {
            // choice ? setChoice(card) : setChoice(choice)
            setChoice(card1)

    }

    
    
    //shuffle cards
    const shuffleCards  = () => {
        const shuffledDeck = [...cardImages] 
            .sort(()=> Math.random() - 0.5) 
            .map((card1) => ({...card1, id: Math.random()}))
        
        setDeck(shuffledDeck.slice(21))
        
    }

    

    
    
    //card stays open
    useEffect(() => {

        if (choice != null){
            
            setDeck(prevCards => {
                return prevCards.map(card1 => {
                    if (card1.src === choice.src) {
                        return {...card1, picked: true}
                    }
                    else {
                        return card1
                    }
                })
            })
        }

    },[choice])


    return(
        <>
        <Helmet>
            <title>Dodge | Harinuman</title>
        </Helmet>

        <div className='sosBG' style={{position:'fixed'}}>
            <Navbar id="grayy" variant="dark" fixed='top'>
                <Navbar.Brand href='/Menu'>
                    <img className='sized' src='images/harinuman-small.png'/>
                </Navbar.Brand>
                <img style={{height:'85px', width:'225px', marginTop:'0px', paddingTop:'5px'}} src='images/dodgetitle.png'/>
                {/* <img src='/SOScards/cardBack.png' title='Click here to draw a card' className='carder' onClick = {shuffleCards}/> */}
            </Navbar>

            {/* <button onClick = {shuffleCards}> start! </button> */}
            <div className='card-grid1'>
                {
                    deck.map(card1 => (
                            
                            <TurnCard1 
                                key={card1.id} 
                                card1 = {card1} 
                                handleChoice = {handleChoice}
                                flipped = {card1.picked}
                                backCard = "/DodgeCards/cardBack.png" 
                                />
                    ))}
            </div>
            <img src='/SOScards/cardBack.png' title='Click here to draw a card' className='fixedbutton1' onClick={shuffleCards}/>
        </div>
        </>
    )
}

export default Dodge;