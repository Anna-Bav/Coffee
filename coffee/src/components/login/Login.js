import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import Input from '../Input';
 

export default function Login(props) {
    // const {popup ,setPopup ,  setPopupReg,popupReg} = props
    // function toggleReg(){
    //     setPopupReg(!popupReg)
    //     setPopup(!popup)
    // }
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
               <Link to='/login'><div className='hover'>Авторизация</div></Link>
               <Link to='/registration'><div className='hover'>Регистрация</div></Link>
           </div>

           <Input placeholder={'Логин'} />
           <Input placeholder={'Пароль'} />


        </div>
    )
}

