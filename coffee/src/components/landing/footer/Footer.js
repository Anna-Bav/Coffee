import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';




export default function Footer() {
    
    return(
        <div className='footer'>
            <div className='f1'>
            <img src="/images/footer.svg"/>
            </div>
            <div className='f2'>ООО “ФастКофе”</div>
            <HashLink style={{ textDecoration: 'none' }} to='/legal#top'>
                <div className='f3'>Юридическая информация</div>
            </HashLink>
            <HashLink style={{ textDecoration: 'none' }} to='/becomePartner#top'>
                <div className='f3'>Стать партнером</div>
            </HashLink>
            <HashLink style={{ textDecoration: 'none' }} to='/contactUs#top'>
                <div className='f3'>Связаться с нами</div>
            </HashLink>
            <HashLink style={{ textDecoration: 'none' }} to='/review#top'>
            <div className='f3'>Оставить отзыв</div>
            </HashLink>
            <div className='rights'>
            <img src="/images/allRights.svg"/>
            </div>
                     
           
        </div>
          
            
    
    );
}