import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import fetureImg from '../../../assets/home/featured.jpg'
const FromMenu = () => {
    return (
//         <div   style={
//             {
//                 backgroundImage:"url('/src/assets/home/featured.jpg')",
                
//                 backgroundSize :"cover",   backgroundPosition: "center",
                 
//             }}  className='min-h-screen     content-center place-items-center    '>
//           <div className='text-black'>
//           <SectionTitle  header={'FROM OUR MENU'} subheader={'Check it Out'}>

// </SectionTitle>



//    <div className='flex gap-10 items-center  '>
//    <img className='w-96  ' src={fetureImg} alt="" /> 
//     <div className='w-96'>
//         <p>March 20, 2023</p>
//         <h2 className='uppercase text-xl  '>WHERE CAN I GET SOME?</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

//         <button className='btn btn-ghost border-b-2'>Read more</button>
//     </div>
//    </div>
//           </div>
         
//         </div>


<div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url('/src/assets/home/featured.jpg')",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content ">
    <div className=" ">
         <div className='text-white'>
         <SectionTitle  header={'FROM OUR MENU'} subheader={'Check it Out'}> </SectionTitle>


   <div className='flex gap-10 items-center  max-sm:flex-col
 '>
  <img className='w-96  ' src={fetureImg} alt="" /> 
   <div className='w-96'>
       <p>March 20, 2023</p>
       <h2 className='uppercase text-xl  '>WHERE CAN I GET SOME?</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

       <button className='btn btn-ghost border-b-2'>Read more</button>
   </div>
  </div>
         </div>
       
    </div>
  </div>
</div>



    );
};

export default FromMenu;