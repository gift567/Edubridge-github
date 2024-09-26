import React from 'react'
import Navbar from '../Navbar/Navbar';
import Booking from '../Booking/Book';
import hero from '../../assets/hero.jpg'
import team from '../../assets/team.png'
import eff from '../../assets/eff.png'
import './AboutInfo.css'
import hats from '../../assets/hats.png'
import Footer from '../../Footer';
import Subscribe from '../Subscribe/Subscribe';

const AboutInfo = () => {
  return (

    
    <div>

<Navbar/>
 <div className='about-con'>

        <h1>About Us</h1>
    <p>
    At our online study center, we pride ourselves on delivering personalized, high-quality education tailored to each student's unique needs, 
    ensuring they receive the most effective support possible. Our cutting-edge technology and expert instructors provide an engaging and interactive learning experience, making complex subjects accessible and enjoyable
    </p>

     </div>


        <div className="box-con">
   <img src={hats}/>
        <div className="box-con-txt">
            <h1>EduBridge Education Center</h1>
            <p>This Lorem ipsum dolor sit, amet consectetur #lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut quaerat assumenda perferendis a dolore natus
                asperiores quas, necessitatibus culpa, nulla soluta nisi! Unde placeat quia reprehenderit labore pariatur atque?
                adipisicing elit. Null Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, hic explicabo ea iusto nulla 
                itaque aliquid ipsa architecto consectetur nobis repellat nemo. A ut nostrum aliquam, perferendis quasi vel? Tempora.
                a ad accusamus sapiente non molestiae rerum. Libero, beatae architecto mollitia enim provident voluptates cum.
     container with Lorem ipslum, dolor sit amet consectetur adipisicing elit. Dolorem nostrum quam vel at voluptates saepe sunt mole
     stiae commodi, quo iste esse similique aut quisquam e
     xcepturi incidunt. Ab possimus distinctio quidem!an image and text. The layout adjusts
                  to fit landscape orient
                  ations and various screen sizes.</p>
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
