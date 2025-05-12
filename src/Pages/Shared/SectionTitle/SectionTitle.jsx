import React from 'react';

const SectionTitle = ({header,subheader}) => {
    return (
        <div className='text-center my-8 w-2/6 mx-auto '>
            <p className='text-yellow-600 mb-2'>--- {subheader} ---</p>
            
            <h2 className='uppercase max-sm:text-xl text-4xl border-y py-2'>{header}</h2>
        </div>
    );
};

export default SectionTitle;