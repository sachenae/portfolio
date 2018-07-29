import React from 'react';
import {Image} from 'react-bootstrap';
import splash from '../assets/images/landing/splash.png'; 

let background = {backgroundSize : 'cover'};

let textStyle1 = {
    position: 'absolute', 
    top: '30%', 
    left: '50%'
  };


export default props =>{
    return(
        <div className='landing-img'id="landing" style={{width: 'auto'}}>
        <Image 
            style={background} responsive 
            src={splash}>
        </Image>
           
            <h3>Full Stack Dev | Metropolia Student | Open-Source Enthusiast</h3>
            <h5> HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</h5>
            <hr/>
            <h1 style={textStyle1}><span style={{fontSize: '50px', color: 'grey'}}>Hei, I'm <strong><em style={{fontSize: '80px', color: 'white'}}>Sachenae</em></strong></span></h1>
        
        </div>
    );
}