
import hands from '../../../assets/hands.jpg'
import hugs from '../../../assets/hugs.jpg'
export default function SocialResponsiblityComponent () {
    return (
        <section class="w-4/5 md:w-full mx-auto dark:text-white ">
               <div className="flex flex-col w-full md:w-4/5 mx-auto items-center gap-4 mb-8">
                    <h2 className="text-black text-4xl text-center font-bold">Our Services</h2>
                        <p className="text-gray-600 text-center text-md md:text-lg">
                        As a social enterprise, our online study center is dedicated to making a positive impact by focusing on the education and empowerment of orphanages. We reinvest our resources to provide these vulnerable youth with access to quality learning opportunities and support, helping them build a brighter future. Through our commitment to education and social responsibility, we strive to create meaningful change and offer a path to success for those who need it most.
                     </p>
               </div>
                <div className="flex flex-col space-y-16">
                    <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex-col flex lg:flex-row bg-white p-4 shadow-lg xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
                    <div class="lg:w-[50%] xs:w-full mb-4">
                        <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src={hands} alt="billboard image" />
                    </div>
                    <div class="lg:w-[50%] sm:w-full xs:w-full  dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
                        <h2 class="text-3xl font-semibold text-gray-900">Community Development</h2>
                        <p class="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
                        veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
                        sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
                        nobis tempora possimus ullam!</p>
                    </div>
                    </div>
                    <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] p-4 bg-white mx-auto flex-col shadow-lg flex lg:flex-row-reverse xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
                    <div class="lg:w-[50%] xs:w-full mb-4">
                        <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src={hugs} alt="billboard image" />
                    </div>
                    <div class="lg:w-[50%] sm:w-full xs:w-full md:p-4 xs:p-0 rounded-md dark:text-gray-400">
                        <h2 class="text-3xl font-semibold text-gray-900 ">Environmental Sustainability</h2>
                        <p class="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
                        veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
                        sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
                        nobis tempora possimus ullam!</p>
                    </div>
                    </div>
                </div>   
  </section>
    )
}