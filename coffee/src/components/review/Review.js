import React, {useState, useEffect} from 'react';
import './Review.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Header from '../landing/header/Header';
import Footer from '../landing/footer/Footer';
import Input from '../Input';




export default function Review() {
    const [user, setUser] = useState('');
    const [rating, setRating] = useState('');
    const [userDirty, setUserDirty] = useState(false);
    const [ratingDirty, setRatingDirty] = useState(false);
    const [userError, setUserError] = useState('Поле обязательно для заполнения');
    const [ratingError, setRatingError] = useState('Поле обязательно для заполнения');
    const [formValid, setFormValid] = useState(false)


    useEffect( () => {
        if (userError || ratingError) {
            setFormValid (false)
        } else {
            setFormValid (true)
        }
        }, [userError, ratingError])


    const userHandler = (e) => {
        setUser(e.target.value)
            if(!e.target.value) {
                setUserError('Поле обязательно для заполнения')
            
        } else {
            setUserError ('')
        }
    }


    const ratingHandler = (e) => {
        setRating(e.target.value)
            if(!e.target.value) {
                setRatingError('Поле обязательно для заполнения')
            
        } else {
            setRatingError ('')
        }
    }


    const blurHandler = (e) => {
        switch (e.target.name) {
          case 'user':
            setUserDirty(true)  
            break
            case 'rating':
            setRatingDirty(true)  
            break 
        } 
     }
    
    return(
        <div className='review'>
            <Header />
                       
           <div className='partner_logo'>
           <img src='/images/review.svg'/>
           </div>

           <div className='partner_text'>
           Пожалуйста, оставьте ваш отзыв и оцените качество услуг сервиса:
           </div>
           
          

           
           <input onChange = {e => userHandler(e)} value={user} className="partner_input" name='user' type='text' placeholder='Ваше имя' onBlur = {e => blurHandler(e)}/>
           {(userDirty && userError) && <div style={{color:'red', fontSize:'10px'}}>{userError}</div>}

           <input onChange = {e => ratingHandler(e)} value={rating} className="partner_input" name='rating' type='text' placeholder='Оцените платформу' onBlur = {e => blurHandler(e)}/>
           {/* <Input placeholder={'Оцените платформу'} /> */}
           {(ratingDirty && ratingError) && <div style={{color:'red', fontSize:'10px'}}>{ratingError}</div>}

           <textarea placeholder="Введите текст отзыва"/>

           <div className='review_date'>
               <div className='date1'>Дата отзыва</div>
               <div className='date2'>10 ноября 2021</div>
           </div>
          
           <button disabled={!formValid} className='partner_btn1'>Отправить</button>
           <HashLink style={{ textDecoration: 'none' }} to='/landing#top'>
           <button className='partner_btn2'>На главную</button>
           </HashLink>

        <Footer />
        </div>
          
            
    
    );
}