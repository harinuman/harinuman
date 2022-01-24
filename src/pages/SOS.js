import React, { Component, useEffect, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Navigationbar from '../components/Navbar'
import TurnCard from '../components/TurnCard';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import './SOS.css';
import { Helmet } from 'react-helmet';


const cardImages = [
    {"src": "SOScards/s1.jpg", picked: false},
    {"src": "SOScards/s2.jpg", picked: false},
    {"src": "SOScards/s3.jpg", picked: false},
    {"src": "SOScards/s4.jpg", picked: false},
    {"src": "SOScards/s5.jpg", picked: false},
    {"src": "SOScards/s6.jpg", picked: false},
    {"src": "SOScards/s7.jpg", picked: false},
    {"src": "SOScards/s8.jpg", picked: false},
    {"src": "SOScards/s9.jpg", picked: false},
    {"src": "SOScards/s10.jpg", picked: false},
    {"src": "SOScards/s11.jpg", picked: false},
    {"src": "SOScards/s12.jpg", picked: false},
    {"src": "SOScards/s13.jpg", picked: false},
    {"src": "SOScards/s14.jpg", picked: false},
    {"src": "SOScards/s15.jpg", picked: false},
    {"src": "SOScards/s16.jpg", picked: false},
    {"src": "SOScards/s17.jpg", picked: false},
    {"src": "SOScards/s18.jpg", picked: false},
    {"src": "SOScards/s19.jpg", picked: false},
    {"src": "SOScards/s20.jpg", picked: false},
    {"src": "SOScards/s21.jpg", picked: false},
    {"src": "SOScards/s22.jpg", picked: false},
    {"src": "SOScards/s23.jpg", picked: false},
    {"src": "SOScards/s24.jpg", picked: false},
    {"src": "SOScards/s25.jpg", picked: false},
    {"src": "SOScards/s26.jpg", picked: false},
    {"src": "SOScards/s27.jpg", picked: false},
    {"src": "SOScards/s28.jpg", picked: false},
    {"src": "SOScards/s29.jpg", picked: false},
    {"src": "SOScards/s30.jpg", picked: false},
]



function SOS (){
    const [deck, setDeck] = useState([])
    const [choice, setChoice] = useState(null)
    const [disabled, setDisabled] = useState(false)

  

    const handleChoice = (card) => {
            // choice ? setChoice(card) : setChoice(choice)
            setChoice(card)

    }

    
    
    //shuffle cards
    const shuffleCards  = () => {
        const shuffledDeck = [...cardImages] 
            .sort(()=> Math.random() - 0.5) 
            .map((card) => ({...card, id: Math.random()}))
        
        setDeck(shuffledDeck.slice(27))
        setDisabled(false)
        setChoice(null)
        
    }

    

    
    
    //card stays open
    useEffect(() => {

        if (choice != null){

            setDisabled(true)
            
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
            <title>Spit or Swallow | Harinuman</title>
        </Helmet>

        <div className='sosBG' style={{position:'fixed'}}>
            <Navbar bg="clear" variant="dark" fixed='top'>
                <Navbar.Brand href='/Menu'>
                    <img className='sized' src='images/harinuman-small.png'/>
                </Navbar.Brand>
                <img style={{height:'70px', width:'550px', marginTop:'10px'}} src='images/sostitle.png'/>
                {/* <img src='/SOScards/cardBack.png' title='Click here to draw a card' className='carder' onClick = {shuffleCards}/> */}
            </Navbar>
            
            <div className='card-grid'>
            {
                deck.map(card => (
                        <TurnCard 
                            key={card.id} 
                            card = {card} 
                            handleChoice = {handleChoice}
                            flipped = {card.picked} 
                            backCard="/SOScards/cardBack.png"
                            disabled = {disabled}
                            />
                ))}</div>

            <img src='/SOScards/cardBack.png' title='Click here to draw a card' className='fixedbutton' onClick={shuffleCards}/>
               
        </div>

        </>
        
    )
}

export default SOS;