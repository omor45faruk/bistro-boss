import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const link=<div className='uppercase '> 
  
  <NavLink to={'/'} className='mr-5'>Home</NavLink>
  <NavLink to={'/contact'} className='mr-5'>Contact Us</NavLink>
  <NavLink className='mr-5'>Dashboard</NavLink>
  <NavLink to={'/our-menu'} className='mr-5'>Our Menu</NavLink>
  <NavLink className='mr-5'>Our Shop</NavLink>
  
  </div>

    return (
 <div className="navbar bg-base-100 fixed z-10 bg-opacity-30 text-white max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <div className="btn btn-ghost grid grid-cols-1">
      <span className='uppercase text-xl font-serif '>Bistro Boss</span>
      <span className='uppercase font-mono '>Restaurant</span>
      
      </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
      
  </div>
</div>
    );
};

export default NavBar;