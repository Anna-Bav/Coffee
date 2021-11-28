import React from 'react';
import './Header.css'
import Burger from './Burger';


export default function Header() {
    return(
        <div className='header_wrap'>
            <div className='header_inner'>
                <Burger />
                <div className='logo'>
                <img src='/images/logo.svg'/>
                </div>
                <div className='user'>
                <img src='/images/user.svg'/>
                </div>
            </div>

        </div>
    )
}