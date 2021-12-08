import React, {useState, useEffect} from 'react';
import './Registration.css';
import {Link} from 'react-router-dom';
import Input from '../Input';
 

export default function Registration(props) {
    const [email, setEmail] = useState()  
    const [password, setPassword] = useState()
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    // const [emailMessage, setEmailMessage] = useState('Введите e-mail, указанный при регистрации')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)


    useEffect( () => {
        if (emailError || passwordError) {
            setFormValid (false)
        } else {
            setFormValid (true)
        }
        }, [emailError, passwordError])

        const emailHandler = (e) => {
            setEmail(e.target.value)
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Неверный e-mail');
        } else {
            setEmailError('')
        }
        }

        const passwordHandler = (e) => {
            setPassword(e.target.value)
            if(e.target.value.length < 8 ) {
                setPasswordError('Неверный пароль')
                if(!e.target.value) {
                    setPasswordError('Пароль не может быть пустым')
                }
            } else {
                setPasswordError ('')
            }
        }

        const blurHandler = (e) => {
            switch (e.target.name) {
              case 'email':
                  setEmailDirty(true)  
                  break
             case 'password':
                 setPasswordDirty(true)
                 break
            } 
         }


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
               <Link to='/registration'> <div className='hover'>Регистрация</div></Link>
           </div>

           {/* <Input placeholder={'E-mail'} />
           <Input placeholder={'Пароль'} /> */}

        <input onChange = {e => emailHandler(e)} value={email} onBlur = {e => blurHandler(e)} className="partner_input" name='email' type='email' placeholder='E-mail' />

        {/* {(emailMessage) && <div style={{color: 'rgb(196, 196, 196, 0.5)', fontSize:'10px'}}>{emailMessage}</div>} */}
        {(emailDirty && emailError) && <div style={{color:'#EF3125', fontSize:'10px'}}>{emailError}</div>}
        


        <input onChange = {e => passwordHandler(e)} value={password} onBlur = {e => blurHandler(e)} className="partner_input" name='password'  type='password' placeholder='Пароль' />
        {(passwordDirty && passwordError) && <div style={{color:'#EF3125', fontSize:'10px'}}>{passwordError}</div>}


            <div className='loyal'>
                <div className='loyal1'><img src='/images/square_mini.svg'/></div>
                <div className='loyal2'>Автоматически подключаться к программам лояльности заведений </div>
            </div>

            <button disabled={!formValid} className='reg_btn'>
            Зарегистрироваться
        </button>
        </div>
    )
}