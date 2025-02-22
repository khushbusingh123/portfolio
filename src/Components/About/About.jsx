import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import  hii from '../../assets/hii.png'
const About = () => {
    return (
        <div id ='about' className='about'>
            <div className="about-title">
                <h1>About me </h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={hii} alt=""  />
                </div>
                <div className="about-right">
                   <div className="about-para">
                    <p>  "I am a passionate frontend developer and UI/UX designer, dedicated to crafting visually appealing and user-friendly digital experiences. I have expertise in Figma, Corel, HTML5, CSS3, React.js, and Bootstrap, enabling me to create responsive and interactive web applications." </p>
                   
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }}/></div>
                    <div className="about-skill"><p> Figma</p><hr style={{ width: "70%" }}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{ width: "60%" }}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{ width: "50%" }}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
        </div>
    )
}

export default About
