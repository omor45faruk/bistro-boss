import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { data, NavLink } from 'react-router-dom';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
const[menu,setMenu]=useState([]);
useEffect (()=>{
    fetch('menu.json')
    .then (res=>res.json())
    .then(data=>{
        const popularItem = data.filter(item=>item.category==='popular');
        setMenu(popularItem)
    })
},[])
console.log(menu)
    return (
        <section>
            <SectionTitle  header={'FROM OUR MENU'} subheader={'Check it out'}>

            </SectionTitle>

        <div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-auto'>
            {
                menu.map(item=><MenuItem key={item._id} item={item} ></MenuItem>)
            }
         
        </div>
       <div className='justify-self-center mb-5'>
       <NavLink className='uppercase  border-b-2  '>view full menu</NavLink>
       </div>
        </section>
    );
};

export default PopularMenu;