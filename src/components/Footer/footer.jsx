import React from 'react'
import './footer.css'
import logo from './IMAGE (20).png'
import instagram from './Frame (3).png'
import youtube from './Frame (6).png'
import x from './Frame (7).png'

const footer = () => {
  return (
<footer class="footer-container">
  <div class="footer-wrapper">
    <div class="footer-logo-text">
      <img src={logo} alt="Company Logo" class="footer-logo"/>
      <p>Takeaway & Delivery template <br/>for small - medium businesses.</p>
      
    </div>
    <div class="footer-links">
      <div class="footer-column">
        <h4>COMPANY</h4>  
        <a href="#">Home</a>
        <a href="#">Order</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
       
      </div>
      <div class="footer-column">
        <h4>TEMPLATE</h4>
        
          <a href="#">Style Guide</a>
          <a href="#">Changelog</a>
          <a href="#">Licence</a>
          <a href="#">Webflow University</a>
       
      </div>
      <div class="footer-column">
        <h4>FLOWBASE</h4>
        <a href="#">More Cloneables</a>
      </div>
    </div>
    
  </div>
  <div className='footer_social'>
  <p class="powered-by">Built by <a href="#">Flowbase</a>. Powered by <a href="#">Webflow</a></p>
    <div class="footer-socials">
      <img src={instagram} alt='img'/>
      <img src={youtube} alt='img'/>
      <img src={x} alt='img'/>
    </div>
  </div>
  
</footer>

  )
}

export default footer
