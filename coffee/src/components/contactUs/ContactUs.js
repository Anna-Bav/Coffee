import React from 'react';
import './ContactUs.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Header from '../landing/header/Header';
import Burger from '../landing/header/Burger';
import Footer from '../landing/footer/Footer';
import Input from '../Input';




export default function ContactUs() {
    
    return(
        <div className='contactUs'>
            <Header />
            
           <div className='partner_logo'>
           <img src='/images/contact.svg'/>
           </div>

              
           <Input placeholder={'Ваше имя'} />
           <Input placeholder={'E-mail'} />
           <Input placeholder={'Контактный номер телефона'} />
           <textarea placeholder="Введите текст сообщения"/>

           <div className='agree'>
           <img src='/images/square.svg'/>  
           <div>Я согласен на <span>обработку персональных данных</span></div>
           </div>
          
           <button className='partner_btn1'>Отправить</button>

           <div className='contactUs_text'>Вы также можете отправить нам письмо по данному адресу и получить ответ на интересующий вас вопрос:</div>
           <button className='contact_btn'><img src='/images/envelope.svg'/><div>hello@fcoffee.com</div></button>
           <HashLink style={{ textDecoration: 'none' }} to='/landing#top'>
           <button className='partner_btn2'>На главную</button>
            </HashLink>
        <Footer />
        </div>
          
            
    
    );
}