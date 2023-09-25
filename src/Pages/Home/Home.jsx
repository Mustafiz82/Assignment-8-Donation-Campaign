import React from 'react';
import Banner from '../../component/Header/Banner';
import Donation from '../../component/Donations/Donation';
import Donations from '../../component/Donations/Donations';

const Home = () => {
    
    // console.log(loader); 
    return (
        <div>
           <Banner></Banner>
           {/* <Donations></Donations> */}
           <Donations></Donations>
           
        </div>
    );
};

export default Home;