import React from 'react';
import './Landing.css'
import Header from './header/Header';
import Carousel from './carousel/Carousel'

export default function Landing() {
    return(
     <div className='landing'>
        <Header /> 
        <Carousel />
     </div>
     )
 }