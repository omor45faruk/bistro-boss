import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import RecommendsCard from './RecommendsCard';

const Recommends = () => {
    const[recommends,setRecommends]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const recItem = data.filter(item=>item.category === 'popular')
            setRecommends(recItem);
        
        })
    },[])

    console.log(recommends);
    return (
        <div className='mb-10'>
           <SectionTitle header={'CHEF RECOMMENDS'} subheader={'Should Try'}></SectionTitle> 

            
           <div className='grid lg:grid-cols-4 gap-2 sm:grid-cols-2 justify-items-center mx-auto '>
            {
                recommends.map(item=><RecommendsCard key={item._id} item={item} ></RecommendsCard>)
            }
         
        </div>
         
        </div>
    );
};

export default Recommends;