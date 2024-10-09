import React from 'react'
import Navbar from '../Navbar/Navbar';
import Booking from '../Booking/Book';
import hero from '../../assets/hero.jpg'
import team from '../../assets/team.png'
import eff from '../../assets/eff.png'
import './AboutInfo.css'
import hat from '../../assets/hat.jpg'
import Footer from '../../Footer';
import Subscribe from '../Subscribe/Subscribe';

const AboutInfo = () => {
  return (

    
    <div>

<Navbar/>



<div class="about-section">
        <div class="inner-container">
            <h1>About Us</h1>
            <p class="text">
            Edubridge Education Centre was established in July 2024, As a sister organization to Jasper Consultancy, founded in 2013, Edubridge leverages a strong foundation of expertise and experience.
            </p>
            <div class="skills">
                <span>Preparedness</span>
                <span>Execellence</span>
                <span>Effiency</span>
            </div>
        </div>
    </div>

    <div class="slider">
        <div class="card">
        <img src={team}/>
            <div class="card-content">
                <h2>Our Team</h2>
                <p>This is the first card.</p>
            </div>
        </div>
        <div class="card">
        <img src={eff}/>
            <div class="card-content">
                <h2>Effiency</h2>
                <p>This is the second card.</p>
            </div>
        </div>
        <div class="card">
        <img src={hero}/>
            <div class="card-content">
                <h2>Card 3</h2>
                <p>This is the third card.</p>
            </div>
        </div>
    </div>

    <Booking/>
    <Subscribe/>

    <Footer/>
    
  </div>
  )
}


export default AboutInfo
