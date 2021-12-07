import React,  { useState } from 'react';
import './BecomePartner.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Header from '../landing/header/Header';
import Burger from '../landing/header/Burger';
import Footer from '../landing/footer/Footer';
import Input from '../Input';




export default function BecomePartner() {
    const [org, setOrg] = useState()  
    const [orgDirty, setOrgDirty] = useState(false);
    const [orgError, setOrgError] = useState('Поле обязательно для заполнения');

    
    const blurHandler = (e) => {
        switch (e.target.name) {
          case 'org':
              setOrgDirty(true)  
           
        }
    }
    return(
        <div  className='partner'>
            <Header />
                       
           <div className='partner_logo'>
           <img src='/images/partner.svg'/>
           </div>

           <div className='partner_text'>
           Для сотрудничества с нами заполните форму заявки:
           </div>
           
           
            {(orgDirty && orgError) && <div  style={{color:'red', textAlign:'center'}}>{orgError}</div>}
           <Input onBlur = {e => blurHandler(e)} name='org' type='text' placeholder={"Наименование организации/ИП"} />

           <Input placeholder={'УНП'} />
           <Input placeholder={'Контактный номер телефона'} />
           <Input placeholder={'E-mail'} />
           <Input type='text' placeholder='Количество кофеен' />
           <textarea placeholder="Введите текст"/>

           <div className='agree'>
           <img src='/images/square.svg'/>  
           <div>Я согласен на <span>обработку персональных данных</span></div>
           </div>
          
           <button className='partner_btn1'>Отправить</button>
           <HashLink style={{ textDecoration: 'none' }} to='/landing#top'>
           <button className='partner_btn2'>На главную</button>
           </HashLink>

        <Footer />
        </div>
          
            
    
    );
}