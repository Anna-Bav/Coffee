import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';




export default function Footer() {
    
    return(
        <div className='footer'>
            <div className='f1'>
            <img src="/images/footer.svg"/>
            </div>
            <div className='f2'>ООО “ФастКофе”</div>
            <Link style={{ textDecoration: 'none' }} to='/legal'>
                <div className='f3'>Юридическая информация</div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/becomePartner'>
                <div className='f3'>Стать партнером</div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/contactUs'>
                <div className='f3'>Связаться с нами</div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/review'>
            <div className='f3'>Оставить отзыв</div>
            </Link>
            <div className='rights'>
            <img src="/images/allRights.svg"/>
            </div>
           
           
           
        </div>
          
            
    
    );
}