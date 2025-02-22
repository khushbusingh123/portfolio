import React from 'react'
import './Hero.css'
import hii from '../../assets/hii.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={hii} alt=""  />
      <h1><span>I'm Khushbu Singh ,</span>Frontend Developer </h1>
      <p> I'm a passionate web developer, specialised in frontend development</p>
      <div className="hero-action">
        <div className="hero-connect">
          <a className='anchor-link' offset={50} href='#contact'>
            Connect with me 
          </a>
        </div>

        {/* Link to open resume in a new tab */}
        <a href="https://drive.google.com/file/d/1wKWa07ETiQmtw6C1jZHg4f7TauTUS3B6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  )
}

export default Hero
