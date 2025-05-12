import React from 'react';
 
const About = () => {
    return (
        <div className='h-96 max-w-screen-xl mx mx-auto content-center mb-10' style={
            {
                backgroundImage:"url('/src/assets/home/chef-service.jpg')",
                backgroundSize :"cover"
            }
        }>

          <div className='text-center text-black bg-white w-4/5 mx-auto h-3/5 place-items-center content-center'> 
           <div className='w-5/6 space-y-4 '>
           <h2 className='text-3xl uppercase'>Bistro Boss</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
           </div>
          </div>

        </div>
    );
};

export default About;