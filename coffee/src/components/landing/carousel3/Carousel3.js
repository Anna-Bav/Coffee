import React from 'react';
import './Carousel3.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from './images_carousel3/rev1.svg';
import slide2 from './images_carousel3/rev2.svg';
import slide3 from './images_carousel3/rev3.svg';
import slide4 from './images_carousel3/rev4.svg';
import slide5 from './images_carousel3/rev5.svg';



export default function MyCarousel3() {
    
    return(
        <div className='carousel3'>
            <div className='reviews'>
            Отзывы о нас и наших партнерах
            </div>
       <Carousel>
            <div className='slide1'>
                
                {/* <img src={slide1} alt='Slide 1'/> */}
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
            <div>
                <img src={slide5} alt='Slide 5'/>
            </div>
        </Carousel>
        <button className='btn_rev1'>Все отзывы</button>
        <button className='btn_rev2'>Разместить заказ</button>
        </div>
          
            
    
    );
}