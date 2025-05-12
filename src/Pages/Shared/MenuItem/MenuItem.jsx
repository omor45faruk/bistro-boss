import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({item,menuItemBtn}) => {
  
        const{name,recipe,image,price}=item;
    return (
        <div className='flex gap-7 mb-5  justify-center'>
            <img className='w-20 rounded-b-full rounded-tr-full' src={image} alt="" />
            <div className='w-1/2 '><h2 className='uppercase font-semibold'>{name} ---------------------</h2>
            <p className='text-gray-500' >{recipe}</p></div>
            <p className='text-orange-400'> {price} $ </p>

            
        </div>
    );
};

export default MenuItem;