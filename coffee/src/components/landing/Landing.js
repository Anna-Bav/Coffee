import React from 'react';
import './Landing.css'
import Header from './header/Header';
import Carousel from './carousel/Carousel';
import Order from './order/Order';
import Partners from './partners/Partners';
import Carousel2 from './carousel2/Carousel2';
import Buttons from './buttons/Buttons';
import Welcome from './welcome/Welcome';
import Users from './users/Users';
import Carousel3 from './carousel3/Carousel3';
import Footer from './footer/Footer';


export default function Landing() {
    return(
     <div className='landing'>
        <Header /> 
        <Carousel />
        <Order />
        <Partners />
        <Carousel2 />
        <Buttons />
        <Welcome />
        <Users />
        <Carousel3 />
        <Footer />
     </div>
     )
 }