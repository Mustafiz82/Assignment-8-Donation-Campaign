import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Donation from './Donation';

const Donations = ({ search}) => {
    const [filterLoader , setFilterLoader] = useState([])


    const loader = useLoaderData()
    useEffect(()=>{
        const filteredLoader = loader.filter(item => item.category.toLowerCase().includes(search.toLowerCase()))
        setFilterLoader(filteredLoader)

    },[search])

  

    return (
        <div className='mt-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                !search ? (
                    
                    loader?.map(item => <Donation key={item.id} item={item}></Donation>)
                    
                    ) : 
                    filterLoader.map(item => <Donation key={item.id} item={item}></Donation>)
            }
           </div>
        </div>
    );
};

export default Donations;