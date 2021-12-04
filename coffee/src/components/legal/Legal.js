import React from 'react';
import './Legal.css';
import {Link} from 'react-router-dom';
import Header from '../landing/header/Header';
import Footer from '../landing/footer/Footer';




export default function Legal() {
    
    return(
        <div className='legal'>
            <Header />
                      
           <div className='partner_logo'>
           <img src='/images/legal.svg'/>
           </div>

            <div className='legal_text'>

           <div className='fast_coffee'>ООО “ФастКофе”</div>
            <div className='legal_info'>
           <div><div>Свидетельство о регистрации номер 123456789</div>
           <div> Выдано Минским горисполкомом Дата выдачи 20.09.2021 УНП 123456789</div></div>
            <div>Юридический и почтовый адрес: 220030, г. Минск, пл. Сободы, 17</div>
            </div>

            </div>

        <div className='legal_contact'>
            <div className='coffee_address'>
            <img src='/images/envelope2.svg'/>
            <div>hello@fastcoffee.com</div>
            </div>

        <div className='legal_a'>
            <div><a href='#'>Пользовательское соглашение</a></div>
            <div><a href='#'>Согласие на обработку персональных данных</a></div>
            <div><a href='#'>Политика конфиденциальности</a></div>
        </div>

        </div>  
           
        <Link style={{ textDecoration: 'none' }} to='/landing'>
           <button className='partner_btn2'>На главную</button>
        </Link>

        <Footer />
        </div>
          
            
    
    );
}