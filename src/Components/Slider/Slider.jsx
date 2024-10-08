

import React from 'react'
import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

const Slider = () => {

    const images = ['https://images.pexels.com/photos/19872/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/756790/pexels-photo-756790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1766215/pexels-photo-1766215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/16031319/pexels-photo-16031319/free-photo-of-british-flag-on-a-ship-mast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

  return (
    <section className='bg-white mt-10 mx-4 sm:mx-8 md:mx-20 lg:mx-36 z-10'>
            <div className='text-center font-extrabold text-2xl my-8'>Study Destinations</div>
            <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30} // Adjust the spacing as needed
                slidesPerView={1} // Show only one slide by default
                autoplay
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <a href='/#'>
                            <img
                                src={img}
                                alt={`slide-${index + 1}`}
                                className='w-fit h-[500px] mx-auto select-none'
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
  );
};

export default Slider
