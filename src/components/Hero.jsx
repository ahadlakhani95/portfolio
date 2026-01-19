import React from 'react'
import './hero.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from './Typewriter';
import img1 from './../assets/ahad.jpg'
import pdf from './../assets/Ahad_Resume.pdf'
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
                        <a href="https://github.com/ahadlakhani95" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="social_icon" />
                        </a>

                        <a href="https://www.linkedin.com/in/ahad-lakhani-515141241/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social_icon" />
                        </a>
                    </div>

                    {/* Resume Button */}
                    <a
                        href={pdf}
                        download="Ahad_Resume.pdf"
                    >
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
