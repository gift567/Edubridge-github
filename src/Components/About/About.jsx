import library_image from "../../assets/about_pic.png"
import {ArrowRightOutlined} from "@ant-design/icons";


const About = () => {
    return (
        <div className="py-14 mx-auto w-5/6 h-screen">
            <div className="">
                <div className="">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 items-center mb-6">
                        <div className="flex flex-col space-y-6 col-span-4">
                            <h1 className="text-xl md:text-2xl text-center md:text-left tracking-wider">ABOUT US</h1>
                            <span className="font-extrabold text-3xl text-center md:text-7xl md:text-left">
                                That one way stop <br/>to your  Online  Study Center
                            </span>
                        </div>
                        <div className="h-56 col-span-2 my-8">
                            <img src={library_image} alt="library_image" className="h-full object-contain"/>
                        </div>
                    </div>
                    <div className="md:w-4/6">
                        <span className="text-gray-600 md:text-2xl text-md leading-7">
                        At our online study center, we pride ourselves on delivering personalized, high-quality education tailored to each student's unique needs, ensuring they receive the most effective support possible. Our cutting-edge technology and expert instructors provide an engaging and interactive learning experience, making complex subjects accessible and enjoyable
                         </span>
                        <button className="bg-black text-white px-4 py-2 rounded-lg mt-10 hover:bg-gray-700 flex items-center hover:gap-2">
                            Learn more
                            <ArrowRightOutlined className="text-sm ml-2"/>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default About