import React from 'react'
import './hero.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from './Typewriter';
import img1 from './../assets/ahad.jpg'

const Hero = () => {
    return (
        <div id='home'>
            <div className="hero">
                <div className="hero_part1">
                    <h1>Hey , I'm <span className='color'>Ahad</span></h1>
                    <h3><FaLocationDot /> Bhavnagar, Gujarat</h3>

                    <Typewriter />

                    {/* Social Icons */}
                    <div className="hero_socials">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="social_icon" />
                        </a>

                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social_icon" />
                        </a>
                    </div>

                    {/* Resume Button */}
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="resume_btn">Download Resume</button>
                    </a>
                </div>

                <div className="hero_part2">
                    <div className="hero_img"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
