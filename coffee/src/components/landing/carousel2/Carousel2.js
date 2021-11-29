import React from 'react';
import './Carousel2.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from './images_carousel2/stock1.svg';
import slide2 from './images_carousel2/stock2.svg';
import slide3 from './images_carousel2/stock3.svg';
import slide4 from './images_carousel2/stock4.svg';



export default function MyCarousel2() {
    
    return(
        <div className='carousel2'>
            <div className='stocks'>
                Акционные предложения
            </div>
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
            <div>
                <img src={slide4} alt='Slide 4'/>
            </div>
        </Carousel>
        </div>
          
            
    
    );
}