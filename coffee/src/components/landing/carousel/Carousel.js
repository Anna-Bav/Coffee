import React from 'react';
import './Carousel.css';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from './images_carousel/carusel_1.svg';
import slide2 from './images_carousel/carusel_2.svg';
import slide3 from './images_carousel/carusel_3.svg';



export default function MyCarousel() {
    
    return(
        // <div className='carousel'>
        <Carousel>
            <div>
                <img src={slide1} alt='Slide 1'/>
            </div>
            <div>
                <img src={slide2} alt='Slide 2'/>
            </div>
            <div>
                <img src={slide3} alt='Slide 3'/>
            </div>
        </Carousel>
       
          
            
    
    );
}