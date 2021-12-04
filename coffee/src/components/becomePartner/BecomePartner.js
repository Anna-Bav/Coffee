import React from 'react';
import './BecomePartner.css';
import {Link} from 'react-router-dom';
import Header from '../landing/header/Header';
import Burger from '../landing/header/Burger';
import Footer from '../landing/footer/Footer';




export default function BecomePartner() {
    
    return(
        <div className='partner'>
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
           <img src='/images/partner.svg'/>
           </div>

           <div className='partner_text'>
           Для сотрудничества с нами заполните форму заявки:
           </div>
           
           <input className='partner_input' type='text' placeholder='Наименование организации/ИП' />
           <input className='partner_input' type='text' placeholder='УНП' />
           <input className='partner_input' type='text' placeholder='Контактный номер телефона' />
           <input className='partner_input' type='email' placeholder='E-mail' />
           <input className='partner_input' type='text' placeholder='Количество кофеен' />
           <textarea placeholder="Введите текст"/>

           <div className='agree'>
           <img src='/images/square.svg'/>  
           <div>Я согласен на <span>обработку персональных данных</span></div>
           </div>
          
           <button className='partner_btn1'>Отправить</button>
           <Link style={{ textDecoration: 'none' }} to='/landing'>
           <button className='partner_btn2'>На главную</button>
           </Link>

        <Footer />
        </div>
          
            
    
    );
}