import React from 'react'
import product from './IMAGE (3).png'
import menu_items from './IMAGE (4).png';
import takeout from './IMAGE (5).png';
import delivery from './IMAGE (6).png'
import './hero.css'

const hero = () => {
  return (
    <>
    <div className='home-fresh'>
    <div className='fresh-wrapper'>
        <div className='fresh-text'>
            <h1>The home of <br/>fresh products</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
            <button>Learn about us</button>
        </div>
        <img className='fresh_img' src={product} alt='imgs'/>
    </div>
    </div>
    <div className='works'>
        <div className='works-wrapper'>
            <h1>   How it works.</h1>
            <div className='works-cards'>
                <div className='works-item'>
                    <img src={menu_items} alt='img'/>
                    <h3>Adapt your menu items</h3>
                    <p>Easily adapt your menu using the webflow CMS and allow customers to browse your items.</p>
                </div>
                <div className='works-item'>
                    <img src={takeout} alt='img'/>
                    <h3>Accept online orders & takeout</h3>
                    <p>Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</p>
                </div>
                <div className='works-item'>
                    <img src={delivery} alt='img'/>
                    <h3>Manage delivery or takeout</h3>
                    <p>Manage your own logistics and take orders simply through the ecommerce system.</p>
                </div>
            </div>
        </div>  
    </div>
  </>
  )
}

export default hero
