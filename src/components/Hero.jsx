import React from 'react'
import './hero.css'
import { FaLocationDot } from "react-icons/fa6";
import Typewriter from './Typewriter';
import img1 from './../assets/ahad.jpg'

const Hero = () => {
    return (
        <div id='home'>
            {/* <div>
               
            </div>
            <div className='Location'>
             
            </div> */}
            <div className="hero">
                <div className="hero_part1">
                    <h1>Hey , I'm <span className='color'>Ahad</span> </h1>
                    <h3>  <FaLocationDot /> Bhavnagar,Gujarat</h3>

                    <Typewriter />

                </div>
                <div className="hero_part2">
                    <div className="hero_img"></div>
                </div>
            </div>


        </div>
    )
}

export default Hero