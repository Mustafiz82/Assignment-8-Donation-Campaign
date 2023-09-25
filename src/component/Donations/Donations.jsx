import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Donation from './Donation';

const Donations = () => {
    const loader = useLoaderData()
    return (
        <div className='mt-24'>
            <div className='grid grid-cols-4 gap-5'>
            {
                loader?.map(item => <Donation key={item.id} item={item}></Donation>)
            }
           </div>
        </div>
    );
};

export default Donations;