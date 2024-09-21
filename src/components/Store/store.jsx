import React from 'react'
import './store.css';
import store_img from './IMAGE (17).png';   
import support_img from './IMAGE (18).png'


const store = () => {
  return (
    <>
    <div className='store-container'>
      <div className='store-wrapper'>
           <div className='store-text'>
                <h1>Call our store and<br/>takeaway when it<br/> suits you best.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the industry's<br/> standard dummy text ever since the 1500.</p>
                <button>Ph. +61 233 2333</button>
           </div>   
           <img className='store_img' src={store_img} alt='imgs'/>
      </div>
    </div>
    <div className='Support-container'>
        <div className='support-wrapper'>
            <img className='support_img' src={support_img} alt='img'/>
            <div className='support-text'>
                <h1><span className='sss'>Support</span> good food<br/> and local business.</h1>
                <button>Order Now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default store
