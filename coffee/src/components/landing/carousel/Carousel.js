import React from 'react';
import './Carousel.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from './images_carousel/carusel_1.svg';
import slide2 from './images_carousel/carusel_2.svg';
import slide3 from './images_carousel/carusel_3.svg';



export default function MyCarousel() {
    
    return(
       <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        infiniteLoop={true}
        stopOnHover={true}
        
        renderIndicator={(onClickHandler, isSelected, label) => {
        const defStyle = { marginLeft: 20, color: "white", cursor: "pointer" };
        const style = isSelected
          ? { ...defStyle, color: "#00FBF4", border: '1px solid #00FBF4' }
          : { ...defStyle };
        return (
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            // value={index}
            // key={index}
            role="button"
            tabIndex={1}
            aria-label={`${label}`}
          >
            {label}
          </span>
        );
      }}
    >



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