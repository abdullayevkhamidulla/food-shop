import React from 'react'
import order from './Frame (1).png'
import './order.css'

const Order = () => {
  return (
    <div className='Order'>
        <div className='order-wrapper'>
            <img src={order} alt='imgs'/>
            <div className='order-text'>
                <h1>Order online with<br/> our simple checkout.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the industry's <br/>standard dummy text ever since the 1500.</p>
                <button>See our FAQ</button>
            </div>
        </div>
    </div>
  )
}

export default Order
