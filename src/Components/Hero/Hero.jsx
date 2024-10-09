import React from 'react'
import './Hero.css'
import right_arrow from '../../assets/right_arrow.png'



const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>We ensure you that we are the Best Study center</h1>
        <p>
        Edubridge Education Centre was established in July 2024,  As a sister organization to Jasper Consultancy, founded in 2013, Edubridge leverages a strong foundation of expertise and experience. 
        </p>
        <button className='btn'>Learn More <img src={right_arrow} alt='' /> </button>
      </div>
    </div>
  )
}

export default Hero
