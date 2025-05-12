import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [review,setReview]=useState();


    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReview(data));
    },[])
    console.log(review);
    return (
        <div>
            <SectionTitle header={'TESTIMONIALS'} subheader={'What Our Clients Say'}>

            </SectionTitle>

            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
{/* {
    review.map(item=>{
         
       
    })
}
                  */}
                {/* {
                    review.map(review=>
                       {
                        <SwiperSlide key={review._id}>

                        <div className='p-32 '>
                        <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                            <p>{review.details}</p>
                            <h2 className='text-3xl text-orange-400'>{review.name}</h2>


                        </div>
                        </SwiperSlide>
                       }
                    )
                } */}
                
        
         
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;