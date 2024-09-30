
import React from 'react'
import Navbar from '../Navbar/Navbar'
import eventd from '../../assets/eventd.jpg'
import './Event.css'
import {ArrowRightOutlined} from "@ant-design/icons";
import events from '../../assets/events.png'
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../../Footer';

const Events = () => {
  return (
    <div>
      <Navbar/>

      <div className='event'>
      <div className="event-text">
        <h2>Lorem ipsum dolor sit amet, consectetur adipispquia. Voluptas dolorem eaque cum voluptatibus?</h2>
        <h1>Welcome to our Events Section we hope you attend our events</h1>
        <p>At our ty education tail pnd enjoyable</p>
        <button className='btn'>Book Now</button>
      </div>
    </div>



    <div className="py-14 mx-auto w-5/6 h-screen">
            <div className="">
                <div className="">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 items-center mb-6">
                        <div className="flex flex-col space-y-6 col-span-4">
                            <h1 className="text-xl md:text-2xl text-center md:text-left tracking-wider">EduBridge Events</h1>
                            <span className="font-extrabold text-3xl text-center md:text-7xl md:text-left">
                               Register for our Upcoming Events now !
                            </span>
                        </div>
                        <div className="h-90 col-span-2 my-8">
                            <img src={events} className="h-full object-contain"/>
                        </div>
                    </div>
                    <div className="md:w-4/6">
                        <span className="text-gray-600 md:text-2xl text-md leading-7">
                            As an Online Study center ,social enterprise and study abroad agency,
                            our center combines a commitment to educational excellence with a strong dedication to social impact.
                            We offer personalized, high-quality learning experiences tailored to individual needs while supporting global educational opportunities that promote cross-cultural understanding. By reinvesting our profits into community-driven initiatives, we ensure that every
                            student's success also contributes to meaningful, positive change in the world.
                         </span>
                        <button className="bg-black text-white px-4 py-2 rounded-lg mt-10 hover:bg-gray-700 flex items-center hover:gap-2">
                            Learn more
                            <ArrowRightOutlined className="text-sm ml-2"/>
                        </button>
                    </div>
                </div>

            </div>

        </div>

      <div class="event-whole">
        <div class="item-container">
            <div class="img-container">
            <img src={eventd}/>
            </div>

            <div class="body-container">
                <div class="overlay"></div>

                <div class="event-info">
                    <p class="title">Bubbe's Book Club</p>
                    <div class="separator"></div>
                    <p class="info">Bellmore, NY</p>
                    <p class="price">Free</p>

                    <div class="additional-info">
                        <p class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            Grand Central Terminal
                        </p>
                        <p class="info">
                            <i class="far fa-calendar-alt"></i>
                            Sat, Sep 19, 10:00 AM EDT
                        </p>

                        <p class="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening <span>more...</span>
                        </p>
                    </div>
                </div>
                <button class="action">Book it</button>
            </div>
        </div>

        <div class="item-container">
            <div class="img-container">
                <img src={eventd}/>
            </div>

            <div class="body-container">
                <div class="overlay"></div>

                <div class="event-info">
                    <p class="title">The Overstory</p>
                    <div class="separator"></div>
                    <p class="info">New York, NY</p>
                    <p class="price">29$</p>

                    <div class="additional-info">
                        <p class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            245 W 52nd St, New York
                        </p>
                        <p class="info">
                            <i class="far fa-calendar-alt"></i>
                            Sat, Sep 19, 10:00 AM EDT
                        </p>

                        <p class="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening <span>more...</span>
                        </p>
                    </div>
                </div>
                <button class="action">Book it</button>
            </div>
        </div>

        <div class="item-container">
            <div class="img-container">
            <img src={eventd}/>
            </div>

            <div class="body-container">
                <div class="overlay"></div>

                <div class="event-info">
                    <p class="title">The NY Festival</p>
                    <div class="separator"></div>
                    <p class="info">New York, NY</p>
                    <p class="price">70$</p>

                    <div class="additional-info">
                        <p class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            245 W 52nd St, New York
                        </p>
                        <p class="info">
                            <i class="far fa-calendar-alt"></i>
                            Sat, Sep 19, 10:00 AM EDT
                        </p>

                        <p class="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening <span>more...</span>
                        </p>
                    </div>
                </div>
                <button class="action">Book it</button>
            </div>
        </div>

        <div class="item-container">
            <div class="img-container">
            <img src={eventd}/>
            </div>

            <div class="body-container">
                <div class="overlay"></div>

                <div class="event-info">
                    <p class="title">Tech Bubble Conf</p>
                    <div class="separator"></div>
                    <p class="info">New York, NY</p>
                    <p class="price">35$</p>

                    <div class="additional-info">
                        <p class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            245 W 52nd St, New York
                        </p>
                        <p class="info">
                            <i class="far fa-calendar-alt"></i>
                            Sat, Sep 19, 10:00 AM EDT
                        </p>

                        <p class="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening <span>more...</span>
                        </p>
                    </div>
                </div>
                <button class="action">Book it</button>
            </div>
        </div>
    </div>
    

    <div class="formbold-main-wrapper">

  <div class="formbold-form-wrapper">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
   
        <div class="formbold-input-flex">
          <div>
              <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Jane"
              class="formbold-form-input"
              />
              <label for="firstname" class="formbold-form-label"> First name </label>
          </div>
          <div>
              <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Cooper"
              class="formbold-form-input"
              />
              <label for="lastname" class="formbold-form-label"> Last name </label>
          </div>
        </div>

        <div class="formbold-input-flex">
          <div>
              <input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              class="formbold-form-input"
              />
              <label for="email" class="formbold-form-label"> Mail </label>
          </div>
          <div>
              <input
              type="text"
              name="phone"
              id="phone"
              placeholder="(319) 555-0115"
              class="formbold-form-input"
              />
              <label for="phone" class="formbold-form-label"> Phone </label>
          </div>
        </div>

        <div class="formbold-textarea">
            <textarea
                rows="6"
                name="message"
                id="message"
                placeholder="Write your message..."
                class="formbold-form-input"
            ></textarea>
            <label for="message" class="formbold-form-label"> Message </label>
        </div>

        <div class="formbold-input-file">
          <div class="formbold-filename-wrapper">
            {/* <span class="formbold-filename">
              website-information-architecture.pdf

              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1670_1541)">
              <path d="M9.00005 7.93906L12.7126 4.22656L13.7731 5.28706L10.0606 8.99956L13.7731 12.7121L12.7126 13.7726L9.00005 10.0601L5.28755 13.7726L4.22705 12.7121L7.93955 8.99956L4.22705 5.28706L5.28755 4.22656L9.00005 7.93906Z" fill="#536387"/>
              </g>
              <defs>
              <clipPath id="clip0_1670_1541">
              <rect width="18" height="18" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </span> */}

            {/* <span class="formbold-filename">
              website-logo.png

              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1670_1541)">
              <path d="M9.00005 7.93906L12.7126 4.22656L13.7731 5.28706L10.0606 8.99956L13.7731 12.7121L12.7126 13.7726L9.00005 10.0601L5.28755 13.7726L4.22705 12.7121L7.93955 8.99956L4.22705 5.28706L5.28755 4.22656L9.00005 7.93906Z" fill="#536387"/>
              </g>
              <defs>
              <clipPath id="clip0_1670_1541">
              <rect width="18" height="18" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </span> */}

            <p>Submit your Grade 12 certificate below</p>
          </div>
          <label for="upload" class="formbold-input-label">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1670_1531)">
              <path d="M12.3568 6.4644L7.64349 11.1786C7.5639 11.2554 7.50041 11.3474 7.45674 11.4491C7.41307 11.5507 7.39008 11.6601 7.38912 11.7707C7.38815 11.8814 7.40924 11.9911 7.45114 12.0935C7.49304 12.1959 7.55492 12.289 7.63316 12.3672C7.71141 12.4455 7.80445 12.5073 7.90686 12.5492C8.00928 12.5912 8.11901 12.6122 8.22966 12.6113C8.34031 12.6103 8.44966 12.5873 8.55133 12.5436C8.653 12.5 8.74495 12.4365 8.82182 12.3569L13.536 7.64356C14.0049 7.17468 14.2683 6.53875 14.2683 5.87565C14.2683 5.21255 14.0049 4.57661 13.536 4.10773C13.0671 3.63885 12.4312 3.37544 11.7681 3.37544C11.105 3.37544 10.469 3.63885 10.0002 4.10773L5.28599 8.8219C4.89105 9.20701 4.57652 9.6667 4.36062 10.1743C4.14473 10.6819 4.03178 11.2274 4.02832 11.779C4.02487 12.3306 4.13097 12.8774 4.34049 13.3877C4.55 13.8979 4.85876 14.3615 5.24884 14.7516C5.63892 15.1416 6.10256 15.4503 6.61287 15.6597C7.12318 15.8692 7.67 15.9752 8.2216 15.9717C8.77321 15.9681 9.31862 15.8551 9.82621 15.6391C10.3338 15.4232 10.7934 15.1086 11.1785 14.7136L15.8927 10.0002L17.071 11.1786L12.3568 15.8927C11.8151 16.4344 11.172 16.8641 10.4643 17.1573C9.75649 17.4505 8.99791 17.6014 8.23182 17.6014C7.46574 17.6014 6.70716 17.4505 5.99939 17.1573C5.29162 16.8641 4.64853 16.4344 4.10682 15.8927C3.56512 15.351 3.13542 14.7079 2.84225 14.0002C2.54908 13.2924 2.39819 12.5338 2.39819 11.7677C2.39819 11.0016 2.54908 10.2431 2.84225 9.5353C3.13542 8.82753 3.56512 8.18443 4.10682 7.64273L8.82182 2.9294C9.60767 2.17041 10.6602 1.75043 11.7527 1.75992C12.8451 1.76942 13.8902 2.20762 14.6627 2.98015C15.4353 3.75269 15.8735 4.79774 15.883 5.89023C15.8925 6.98271 15.4725 8.03522 14.7135 8.82106L10.0002 13.5369C9.76794 13.7691 9.49226 13.9532 9.18887 14.0788C8.88548 14.2045 8.56032 14.2691 8.23195 14.2691C7.90357 14.269 7.57843 14.2043 7.27507 14.0786C6.97171 13.9529 6.69607 13.7687 6.46391 13.5365C6.23174 13.3043 6.04759 13.0286 5.92196 12.7252C5.79633 12.4218 5.7317 12.0966 5.73173 11.7683C5.73177 11.4399 5.79649 11.1148 5.92219 10.8114C6.04788 10.508 6.2321 10.2324 6.46432 10.0002L11.1785 5.28606L12.3568 6.4644Z" fill="#07074D"/>
              </g>
              <defs>
              <clipPath id="clip0_1670_1531">
              <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              Attach files
              <input type="file" name="upload" id="upload"/>
          </label>
        </div>

        <button class="formbold-btn">
            Send Message
        </button>
    </form>
  </div>
</div>


<Subscribe/>
<Footer/>


    </div>
  )
}

export default Events
