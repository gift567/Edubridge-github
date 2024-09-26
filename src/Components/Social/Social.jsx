import React from 'react'
import './Social.css'
import kids from '../../assets/kids.jpg'
import kidss from '../../assets/kidss.jpg'
import food from '../../assets/food.jpg'
import linefood from '../../assets/linefood.jpg'
import clothes from '../../assets/clothes.jpg'
const Language = () => {
  return (
    <div >

        <div class="social-container">
        <h2>Our Social Enterprise Respsibilities</h2>
        <p className="text-gray-600 md:text-2xl text-md">
        As a social enterprise, our online study center is dedicated to making a positive impact by focusing on the education and empowerment of orphanages. We reinvest our resources to provide these vulnerable youth with access to quality learning opportunities and support, helping them build a brighter future. Through our commitment to education and social responsibility, we strive to create meaningful change and offer a path to success for those who need it most.
          </p>
          </div>

          <section className='flip'>

<div class="whole-con">
  <div class="box-c">
    <div class="front">
      <div class="content">
      <img src={food} />
        <h3>Food Bank</h3>
      </div>
    </div>
    <div class="back-c">
      <div class="content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
          nam expedita exercitationem?
        </p>
      </div>
    </div>
  </div>
</div>

<div class="whole-con">
  <div class="box-c">
    <div class="front">
      <div class="content">
        <img src={linefood} />
        <h3>Donation of Food</h3>
      </div>
    </div>
    <div class="back-c">
      <div class="content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
          nam expedita exercitationem?
        </p>
      </div>
    </div>
  </div>
</div>

<div class="whole-con">
  <div class="box-c">
    <div class="front">
      <div class="content">
      <img src={clothes} />
        <h3>Donation of Clothes</h3>
      </div>
    </div>
    <div class="back-c">
      <div class="content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
          nam expedita exercitationem?
        </p>
      </div>
    </div>
  </div>
</div>


</section>
   
      
    </div>



  )
}

export default Language
