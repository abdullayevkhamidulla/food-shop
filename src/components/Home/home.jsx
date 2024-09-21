import React from 'react'
import './home.css'
import Background from './BG Shape.png'
import Food from './IMAGE (1).png'
import star from './IMAGE (2).png'



const Home = () => {
  return (
    <div className='home'>
    <img className='pattern' src={Background} alt='Bg'/>
      <div className='home-wrapper'>
        <div className='home-text'>
            <h1>Beautiful food & takeaway, <span>delivered</span>  to your door.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
            <button>Place an Order</button>
            <div className='review'>
            <img src={star} alt='star-img'/>
            <div className='reviews'>
            <p>4.8 out of 5</p><bold>based on 2000+ reviews</bold>
            </div>
            
            </div>
        </div>
        <img className='food-img' src={Food} alt='food-img'/>
      </div>
     
    </div>
  )
}

export default Home
