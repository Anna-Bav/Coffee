import React from 'react';
import './ContactUs.css';
import {Link} from 'react-router-dom';
import Header from '../landing/header/Header';
import Burger from '../landing/header/Burger';
import Footer from '../landing/footer/Footer';




export default function ContactUs() {
    
    return(
        <div className='contactUs'>
            <Header />
             {/* <div className='header_wrap'>
                <div className='header_inner'>
                <Burger />
                <div className='logo'>
                <img src='/images/logo.svg'/>
                </div>
                <div className='user'>
                <Link to='/login'>
                <img src='/images/user.svg'/>
                </Link>
                </div>
                </div>

            </div> */}
           
           <div className='partner_logo'>
           <img src='/images/contact.svg'/>
           </div>

                     
           <input className='partner_input' type='text' placeholder='Ваше имя' />
           <input className='partner_input' type='email' placeholder='E-mail' />
           <input className='partner_input' type='text' placeholder='Контактный номер телефона' />
           <textarea placeholder="Введите текст сообщения"/>

           <div className='agree'>
           <img src='/images/square.svg'/>  
           <div>Я согласен на <span>обработку персональных данных</span></div>
           </div>
          
           <button className='partner_btn1'>Отправить</button>

           <div className='contactUs_text'>Вы также можете отправить нам письмо по данному адресу и получить ответ на интересующий вас вопрос:</div>
           <button className='contact_btn'><img src='/images/envelope.svg'/><div>hello@fcoffee.com</div></button>
           <Link style={{ textDecoration: 'none' }} to='/landing'>
           <button className='partner_btn2'>На главную</button>
            </Link>
        <Footer />
        </div>
          
            
    
    );
}