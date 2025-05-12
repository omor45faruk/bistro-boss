import React from 'react';
import Banner from './Banner/Banner';
import Category from "./Category/Category"
import About from './About/About';
import PopularMenu from './PopularMenu/PopularMenu';
import CallUs from './CallUs/CallUs';
import Recommends from './Recommends/Recommends';
import FromMenu from './FromMenu/FromMenu';
import Testimonials from './Testimonials/Testimonials';

 const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <FromMenu></FromMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;