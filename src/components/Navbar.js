import React, {useState, Component} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Turnon from './turnon'
import './Navbar.css';

function Navbar(){

    
    return(
        <>
        <div classname ="bar" >

            <Link to="/">
                    <h1>Home</h1>
            </Link>

            <Link to="/menu">
                    <h1>Menu</h1>
            </Link>
        </div>
           

        </>
    )

}

export default Navbar

// class Navbar extends Component{
//     render(){
//         return(
//                 <nav className = "NavbarItems">
//                 </nav>
//         )
//     }
// }