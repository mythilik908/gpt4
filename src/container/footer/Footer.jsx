import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links-logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>OpenAI © 2015–2024</p>
        </div>
        <div className='gpt3__footer-links-div'>
          <h4> ChatGPT </h4>
          <p> For Everyone</p>
          <p> For Teams</p>
          <p> For Enterprises </p>
          <p> Download </p>
        </div>
        <div className='gpt3__footer-links-div'>
          <h4> Company </h4>
          <p> About us</p>
          <p> News </p>
          <p> Our Charter </p>
        </div>
        <div className='gpt3__footer-links-div'>
          <h4> Terms & policies </h4>
          <p> Terms of use</p>
          <p> Privacy policy</p>
          <p> Brand guidelines</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2024 GPT-4. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
