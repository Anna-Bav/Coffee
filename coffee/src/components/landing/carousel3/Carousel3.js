import React from 'react';
import './Carousel3.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import slide1 from './images_carousel3/rev1.svg';
// import slide2 from './images_carousel3/rev2.svg';
// import slide3 from './images_carousel3/rev3.svg';
// import slide4 from './images_carousel3/rev4.svg';
// import slide5 from './images_carousel3/rev5.svg';



export default function MyCarousel3() {
    
    return(
        <div className='carousel3'>
            <div className='reviews'>
            Отзывы о нас и наших партнерах
            </div>
            
       <Carousel
        centerMode={true}
        centerSlidePercentage={100}
        
        >

            {/* <div className='slide_wrap'> */}
               <div className='slide1'>
                   <div className='slide1_nav'>
                       <div className='nav1'>
                       <img src='/images/kirill.svg'/>
                       <div className='kirill'>Кирилл Степанов</div>
                       </div>
                       <div className='nav2'>
                           <div><img src='/images/cofix_name.svg'/></div>
                           <div><img src='/images/grains4.svg'/></div>
                           <div className='place'>г. Минск</div>
                            <div className='place'>ул. Ленинградская, 1</div>
                       </div>
                       <div className='nav3'>
                       <img src='/images/cofix.svg'/>
                       </div>
                   </div>
                   <div className='slide1_main'>
                   <div className='slide1_main_text1'>Интересное место, современный и стильный интерьер. Всегда вкусный кофе. Большой ассортимент десертов. Адекватные цены. Советую для посид...</div>
                    <div className='slide1_main_text2'>Отзыв полностью</div>
                   </div>
                   <div className='slide1_date'>7 октября 2021г.</div>
                </div> 
                {/* <img src={slide1} alt='Slide 1'/> */}
            {/* </div> */}

            {/* <div className='slide_wrap'> */}
                <div className='slide2'>
                <div className='slide1_nav'>
                       <div className='nav1'>
                       <img src='/images/sanek.svg'/>
                       <div className='kirill'>Санёк</div>
                       </div>
                       <div className='nav2'>
                           <div><img src='/images/coffee_name.svg'/></div>
                           <div><img src='/images/grains5.svg'/></div>
                           <div className='place'></div>
                            <div className='place'></div>
                       </div>
                       <div className='nav3'>
                       <img src='/images/coffee.svg'/>
                       </div>
                   </div>
                   <div className='slide1_main'>
                   <div className='slide1_main_text1'>Крутая прилага, узнал много новых мест )) Рекомендую! </div>
                    <div className='slide1_main_text2'></div>
                   </div>
                   <div className='slide1_date'>12 октября 2021г.</div>
                </div> 
                {/* <img src={slide2} alt='Slide 2'/> */}
            {/* </div> */}

            {/* <div className='slide_wrap'> */}
                <div className='slide3'>
                <div className='slide1_nav'>
                       <div className='nav1'>
                       <img src='/images/grey_circle.svg'/>
                       <div className='kirill'>Алёна</div>
                       </div>
                       <div className='nav2'>
                           <div><img src='/images/hotfix_name.svg'/></div>
                           <div><img src='/images/grains4.svg'/></div>
                           <div className='place'>г. Минск</div>
                            <div className='place'>пр. Партизанский, 150 А</div>
                       </div>
                       <div className='nav3'>
                       <img src='/images/hotfix.svg'/>
                       </div>
                   </div>
                   <div className='slide1_main'>
                   <div className='slide1_main_text1'>Всегда вкусный кофе. И улыбчивый персонал. За кофе только в Хотфикс! Часто бывают скидки и акционные предложения.</div>
                    <div className='slide1_main_text2'></div>
                   </div>
                   <div className='slide1_date'>9 октября 2021г.</div>
                </div> 
                {/* <img src={slide3} alt='Slide 3'/> */}
            {/* </div> */}

            {/* <div className='slide_wrap'> */}
                <div className='slide4'>
                <div className='slide1_nav'>
                       <div className='nav1'>
                       <img src='/images/iren.svg'/>
                       <div className='kirill'>Iren</div>
                       </div>
                       <div className='nav2'>
                           <div><img src='/images/coffee_name.svg'/></div>
                           <div><img src='/images/grains5.svg'/></div>
                           <div className='place'></div>
                            <div className='place'></div>
                       </div>
                       <div className='nav3'>
                       <img src='/images/coffee.svg'/>
                       </div>
                   </div>
                   <div className='slide1_main'>
                   <div className='slide1_main_text1'>Классный и удобный сервис для заказа кофе и десертов. Нет необходимости  простаивать в очередях, тратить время и нервнича...</div>
                    <div className='slide1_main_text2'>Отзыв полностью</div>
                   </div>
                   <div className='slide1_date'>22 октября 2021г.</div>
                </div> 
                {/* <img src={slide4} alt='Slide 4'/> */}
            {/* </div> */}

            {/* <div className='slide_wrap'> */}
                <div className='slide5'>
                <div className='slide1_nav'>
                       <div className='nav1'>
                       <img src='/images/benitto.svg'/>
                       <div className='kirill'>BENIttO</div>
                       </div>
                       <div className='nav2'>
                           <div><img src='/images/sound_name.svg'/></div>
                           <div><img src='/images/grains3.svg'/></div>
                           <div className='place'>г. Минск</div>
                            <div className='place'>ул. Мясникова, 39</div>
                       </div>
                       <div className='nav3'>
                       <img src='/images/sound.svg'/>
                       </div>
                   </div>
                   <div className='slide1_main'>
                   <div className='slide1_main_text1'>Не сказал бы, что эта кофейня чем-то отличается от многих других. То, что мне там нравится - американо с апельсином - вкусное решение. Хит ...</div>
                    <div className='slide1_main_text2'>Отзыв полностью</div>
                   </div>
                   <div className='slide1_date'>29 октября 2021г.</div>
                </div> 
                {/* <img src={slide5} alt='Slide 5'/> */}
            {/* </div> */}

        </Carousel>
        <button className='btn_rev1'>Все отзывы</button>
        <button className='btn_rev2'>Разместить заказ</button>
        </div>
          
            
    
    );
}