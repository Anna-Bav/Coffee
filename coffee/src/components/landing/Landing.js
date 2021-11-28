import React from 'react';
import './Landing.css'
import Header from './header/Header';
import Carusel from './carusel/Carusel'

export default function Landing() {
    return(
     <div className='landing'>
        <Header /> 
        <Carusel />
     </div>
     )
 }