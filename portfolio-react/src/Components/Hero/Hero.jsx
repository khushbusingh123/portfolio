import React from 'react'
import './Hero.css'
import  hii from '../../assets/hii.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={hii} alt=""  />
      <h1><span>I'm Khushbu Singh ,</span>Frontend Developer </h1>
     <p> I'm a passionate web developer, specialised in frontend development</p>
     <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
   <div className="hero-resume">My resume</div>
     </div>
    </div>
  )
}

export default Hero
