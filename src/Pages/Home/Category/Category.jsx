import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

 

// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

 const Slider = () => {
    return (
    
      <section>
        <SectionTitle subheader={"From 11:00am to 10:00pm"}
        header={"Order Online "}></SectionTitle>
     
       <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-10"
    >
        <SwiperSlide><img src={img1} alt="" /> 
        <h2 className=' text-2xl uppercase text-center -mt-16 text-white font-semibold'>Salads</h2>
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" />
        
        <h2 className=' text-2xl uppercase text-center -mt-16 text-white font-semibold'>Pizza</h2>
        
         </SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /> 
        <h2 className=' text-2xl uppercase text-center -mt-16 text-white font-semibold'>Soups</h2>
        
        </SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /> 
        
        <h2 className=' text-2xl uppercase text-center -mt-16 text-white font-semibold'>Desserts</h2>

        </SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /> 
        
        <h2 className=' text-2xl uppercase text-center -mt-16 text-white font-semibold'>Salad</h2>
        
        </SwiperSlide>
         
      </Swiper>
     </section>
    );
 };
 
 export default Slider;