import React from 'react';
import './Landing.css'
import Header from './header/Header';
import Carousel from './carousel/Carousel';
import Order from './order/Order';
import Partners from './partners/Partners';



export default function Landing() {
    return(
     <div className='landing'>
        <Header /> 
        <Carousel />
        <Order />
        <Partners />
     </div>
     )
 }