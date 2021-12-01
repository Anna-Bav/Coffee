import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

 

export default function Login() {
    return(
        <div className='login'>
           <div className='login_header'>
               <Link to='/landing'>
           <img src='/images/back.svg'/>
           </Link>
           <img className='close' src='/images/close.svg'/>
           </div>
           <div className='login_logo'>
           <img src='/images/logo.svg'/>
           </div>
           <div className='login_reg'>
               <div className='hover'>Авторизация</div>
               <div className='hover'>Регистрация</div>
           </div>

        </div>
    )
}

