import React from 'react';
import './Review.css';
import {Link} from 'react-router-dom';
import Header from '../landing/header/Header';
import Footer from '../landing/footer/Footer';




export default function Review() {
    
    return(
        <div className='review'>
            <Header />
                       
           <div className='partner_logo'>
           <img src='/images/review.svg'/>
           </div>

           <div className='partner_text'>
           Пожалуйста, оставьте ваш отзыв и оцените качество услуг сервиса:
           </div>
           
           <input className='partner_input' type='text' placeholder='Ваше имя' />
           <input className='partner_input' type='text' placeholder='Оцените платформу' />
           <textarea placeholder="Введите текст отзыва"/>

           <div className='review_date'>
               <div className='date1'>Дата отзыва</div>
               <div className='date2'>10 ноября 2021</div>
           </div>
          
           <button className='partner_btn1'>Отправить</button>
           <Link style={{ textDecoration: 'none' }} to='/landing'>
           <button className='partner_btn2'>На главную</button>
           </Link>

        <Footer />
        </div>
          
            
    
    );
}