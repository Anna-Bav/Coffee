import React from 'react';
import './Order.css'



export default function Order() {
    return(
        <div className='order'>
           <div className='order_btn'>
               <button>Разместить заказ</button>
            </div> 
           <div className='order_descr'>
               <div className='point'>
                    <img src='/images/corn.svg'/>
                    <div className='text_1'>Приложение для заказа кофе онлайн</div>
                </div>
                <div className='point'>
                    <img src='/images/corn.svg'/>
                    <div className='text_1'>Решение для тех, кто не любит очереди</div>
                </div>
                <div className='point'>
                    <img src='/images/cup_coffee.svg'/>
                    <div className='text_2'>Ваш любимый кофе без ожиданий, очередей и лишних коммуникаций с бариста</div>
                </div>
                <div className='point'>
                    <img src='/images/cup_coffee.svg'/>
                    <div className='text_2'>Широкий список кофеен-партнеров</div>
                </div>
                <div className='point'>
                    <img src='/images/cup_coffee.svg'/>
                    <div className='text_2'>Минимизация контактов в условиях пандемии COVID-19</div>
                </div>
                <div className='point'>
                    <img src='/images/cup_coffee.svg'/>
                    <div className='text_2'>Настройка кофе под ваши пожелания</div>
                </div>
                <div className='point'>
                    <img src='/images/cup_coffee.svg'/>
                    <div className='text_2'>Планировщик ваших заказов</div>
                </div>
                <div className='point'>
                    <img src='/images/cup_coffee.svg'/>
                    <div className='text_2'>Онлайн-оплата банковской картой</div>
                </div>
          
            </div> 

        </div>
    )
}