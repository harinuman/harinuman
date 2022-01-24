import React from 'react';
import HeroSection from '../components/HeroSection';
import '../components/HeroSection.css';
import './Menu.css';
// import logo from '../images/harinuman.png';
import {Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home'
import Navigationbar from '../components/Navbar'
import ImageGrid from '../components/ImageGrid'
import Turnon from '../components/turnon';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Helmet } from 'react-helmet';


function Menu(){
    return(
        <>
            <Helmet>
            <title>Menu | Harinuman</title>
            </Helmet>
            <div classname = "mainbg" style={{position:'fixed'}}>
                <Navbar bg="clear" variant="dark" fixed='top'>
                    <Navbar.Brand href='/'>
                        <img className='sized' src='images/harinuman-small.png'/>
                    </Navbar.Brand>
                </Navbar>
                {/* <ImageGrid /> */}

                <div className="img-grid">
                    <div className="img-wrap">
                        <Link to="/neverhaveiever">
                            <Turnon on="images/nhieon.png" off="images/nhieoff.png" />
                        </Link>
                    </div>
                    <div className="img-wrap">
                        <Link to="/dodge">
                            <Turnon on="images/dodgeon.png" off="images/dodgeoff.png" />
                        </Link>
                    </div>
                    <div className="img-wrap">
                        <Link to="/spitorswallow">
                            <Turnon on="images/soson.png" off="images/sosoff.png" />
                        </Link>
                    </div>
                    
                </div>
                
            </div>
            
            
        </>
        
    );

};

export default Menu;