import React, {useState} from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import '../components/HeroSection.css';
import './Home.css';
import Turnon from '../components/turnon'
// import logo2 from "../images/offharinuman.png";
// import mainbackground from "../images/wall2.jpg";
import {Link, Route, Routes} from 'react-router-dom';
import Menu from './Menu'
import { Helmet } from 'react-helmet';


function Home(){


    let pic1 = "images/harinuman1.png";
    let pic2 = "images/offharinuman1.png";

   
    return(
        <>
            <Helmet>
            <title>Harinuman</title>
            </Helmet>
            <div classname = "mainbg" style={{position:'fixed'}}>
                
                {/* <div classname = "home-container"> */}
                    
                    <Link to="/Menu">
                        
                        <Turnon on = {pic1} off = {pic2} />

                    </Link>
                {/* </div> */}
                <p><br></br>-CLICK THE BOTTLE TO TAKE A SHOT-</p>
            </div>
        </>
    );

}

export default Home;