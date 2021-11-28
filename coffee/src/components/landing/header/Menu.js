import React from 'react';
import './Menu.css';



export default function Menu({header, items, active, setActive}) {
    return(
        <div className={active ? 'menu active' : 'menu'}
        onClick={() => setActive(false)}>
        
        {/* <div className='blur' /> */}
        <div className="menu_content" onClick={(e) => e.stopPropagation()}>
        {/* <div className="menu_header">{header}</div> */}
        <ul>
          {items.map((item) => (
            <li>
              <a id="A" href={item.href}>
                {item.value}
              </a>
            </li>
          ))}
        </ul>
        <div className="language">
          <div className='lang_point'> 
            <img src='/images/cup.svg'/>
           <div className="lang">RU</div>
          
          </div>
          <div className='lang_point'>
            <img src='/images/circle.svg'/>
           <div className="lang">ENG</div>
            </div>
          <div className='lang_point'>
            <img src='/images/circle.svg'/>
           <div className="lang">PL</div>
            </div>
        </div>
      </div>

      
        
        </div>
    )
}