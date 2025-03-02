import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-content-wrapper'> 
            <div className='footer-map'>
                <iframe
                    title="Google Map of North Georgia String Studio"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5975.133051754979!2d-84.18126292481813!3d34.1624956119016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59b64f695281f%3A0xf524aa13aee4b670!2s2450%20Atlanta%20Hwy%2C%20Cumming%2C%20GA%2030040!5e1!3m2!1sen!2sus!4v1740839875680!5m2!1sen!2sus"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className='footer-text-wrapper'>
                <div className='footer-side-title'>Contact Us</div>
                <div className='footer-side-text'>(770) 886-3333</div>
                <div className='footer-side-text'>info@NorthGeorgiaStringsStudio.com</div>
                <div className='footer-side-text'>2450 Atlanta Highway, Suite 1701<br/>Cumming, Georgia, 30040</div>
            </div>
            
        </div>
        <hr width="60%" size="1" color='#767056'></hr>
        <div className='footer-bottom'> © 2025 Copyright; North Georgia Strings Studio </div>
    </div>
  )
}

export default Footer
