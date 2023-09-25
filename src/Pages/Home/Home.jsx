import React from 'react';
import Banner from '../../component/Header/Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loader = useLoaderData()
    console.log(loader);
    return (
        <div>
           <Banner></Banner>
           <div>
            {
                loader.map(item => <h1>helo</h1>)
            }
           </div>
        </div>
    );
};

export default Home;