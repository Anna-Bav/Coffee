import React from 'react';
import './Header.css'
import Burger from './Burger';
import {Link} from 'react-router-dom'


 

export default function Header() {
    return(
        <div className='header_wrap'>
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

        </div>
    )
}