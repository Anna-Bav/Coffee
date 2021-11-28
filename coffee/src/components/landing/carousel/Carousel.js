import React from 'react';
import './Carousel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carousel({images_carousel}) {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        lazyLoad: true
    };
    console.log(images_carousel);
    return(
        <div>
            <Slider {...settings}></Slider>
             {/* <img src='/images/carusel_1.svg'/> */}
        </div>
    );
}