import React from 'react'
import img from './../../assets/splash_animation.gif'
import './splash.css'
function Splash() {
    return (
        <div className='splash'>
            <img src={img} alt="gif animation" className='splash_img' />
        </div>
    )
}

export default Splash