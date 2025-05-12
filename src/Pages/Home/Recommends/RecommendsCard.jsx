import React from 'react';

const RecommendsCard = ({item}) => {
    console.log(item)
    const{name,recipe,image}=item;
    return (
        <div className="card bg-base-100 w-72 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-neutral mt-5 uppercase text-orange-500 ">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default RecommendsCard;