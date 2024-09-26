import servicesImage from "../../assets/social_enterprise_image.JPG"
import servicesImage_1 from "../../assets/social_enterprise_image-1.JPG"
import servicesImage_2 from "../../assets/social_enterprise_image-2.JPG"
import servicesImage_3 from "../../assets/social_enterprise_image-3.JPG"
import servicesImage_4 from "../../assets/social_enterprise_image-4.JPG"
import Navbar from "../Navbar/Navbar.jsx"
import donation from "../../assets/donation.JPG"
import tuion from "../../assets/tuion.JPG"
import university_selection from "../../assets/university_selection.JPG";
import application_assistance from "../../assets/application_assistance.JPG";
import { motion } from "framer-motion"
import {
    ArrowRightOutlined,
} from "@ant-design/icons";
import {Input} from "antd";
import {useEffect} from "react";
import Footer from "../../Footer.jsx";
import Hero from "../Hero/Hero.jsx"
import SocialResponsiblityComponent from "../study-abroad/ui/social-responsibility-section.component.jsx";
import ServiceCard from "../services/ui/ServiceCard.jsx";



const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

const SocialEnterprise = () => {
    return (
        <div>
            <Navbar/>
   
          <motion.div
                className="h-screen grid place-items-center"
                style={{
                    backgroundImage: `url(${servicesImage_1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                initial="hidden"
                whileInView="visible"
                variants={variants}
                viewport={{ once: true }}
            >
                <motion.div
                    className="flex flex-col items-center gap-4 top-1/4 md:right-32"
                    initial="hidden"
                    whileInView="visible"
                    variants={variants}
                >
                    <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                        Welcome to our Soclal Enterprise Section<br/> 
                    </h1>

                    <span className="mt-6 text-2xl leading-8 text-gray-200 mx-6 text-center">
                        This is where all our Social Responsilbilities are documented 
                    </span>

                    <a
                        href="#"
                        className="rounded-md   bg-[#d3ad56] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Call Now
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                className="py-24 flex flex-col"
                initial="hidden"
                whileInView="visible"
                variants={variants}
            >
                <div className="flex flex-col mx-auto text-center">
                    <h1 className="text-3xl mb-4">OUR RESPONSIBILITIES</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 w-4/5 mx-auto gap-8 place-items-center">
                    <ServiceCard 
                        title="Donation of Clothes"
                        description="Jasper Consultancy extends a helping hand to students seeking guidance on their educational journey through our Free Counselling services."
                        image={donation}
                    />
                    <ServiceCard 
                        title="Donation of Tuition Fees"
                        description="Jasper Consultancy extends a helping hand to students seeking guidance on their educational journey through our Free Counselling services."
                        image={tuion}
                    />
                    <ServiceCard 
                        title="Donation to the Food Bank"
                        description="Jasper Consultancy extends a helping hand to students seeking guidance on their educational journey through our Free Counselling services."
                        image={servicesImage_4}
                    />
                </div>
                <a
                    href="#"
                    className="rounded-md bg-[#d3ad56] px-3.5 py-2.5 mx-auto text-sm w-fit font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Learn More
                    <ArrowRightOutlined className="text-xs ml-2"/>       
                </a>
            </motion.div>
                <div className="py-12 mb-20 flex flex-col mx-auto">
                    <SocialResponsiblityComponent />

                    <motion.div
                    className="py-10 flex flex-col"
                    initial="hidden"
                    whileInView="visible"
                    variants={variants}
                >
                                <a
                                href="#"
                                className="rounded-md bg-[#d3ad56] mt-10 px-3.5 py-2.5 mx-auto text-sm w-fit font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                               Learn More
                               <ArrowRightOutlined className="text-xs ml-2"/>
                            </a>
                </motion.div>
              </div>

            <Footer/>
        </div>
    );
}

export default SocialEnterprise;