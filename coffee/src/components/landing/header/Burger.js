import React, {useState} from 'react';
import './Burger.css';
import Menu from './Menu'



export default function Burger() {
    const [menuActive, setMenuActive] = useState(false);
    const items = [
        {value: 'О нас', href:'#'},
        {value:'Наши партнеры', href:'#'},
        {value:'Акционные предложения', href:'#'},
        {value:'Отзывы', href:'#'},
        {value:'Планировщик заказов', href:'#'},
        {value:'Связаться с нами', href:'#'},
    ];
    return(
        <div className='burger'>
        <div className='burger_btn' onClick={() => setMenuActive(!menuActive)}>
            <img src='/images/burger_menu.svg'/>
        </div>
            <Menu active={menuActive} setActive={setMenuActive} items={items} />
        </div>
    );
};





 