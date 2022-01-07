import React, { Component } from 'react';
import './ImageGrid.css'
import Turnon from './turnon'

function ImageGrid(images){
    return(
        <div className="img-grid">
            <div className="img-wrap">
                {/* <img src ="images/nhieoff.png" /> */}
                <Turnon on="images/nhieon.png" off="images/nhieoff.png" />
                
            </div>
            <div className="img-wrap">
                {/* <img src ="images/dodgeoff.png" /> */}
                <Turnon on="images/dodgeon.png" off="images/dodgeoff.png" />
                
            </div>
            <div className="img-wrap">
                {/* <img src ="images/sosoff.png" /> */}
                <Turnon on="images/soson.png" off="images/sosoff.png" />
                
            </div>
            
        </div>
    )
}

export default ImageGrid;