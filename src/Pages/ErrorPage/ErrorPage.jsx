import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center text-center'>
            <div className='space-y-5'>
            <h1 className='text-3xl lg:text-5xl'>Oops</h1>
            <h1 className='text-2xl lg:text-3xl'>404 Page not Found</h1>
            <div className='flex justify-center'>
                <Link to="/"><button className='btn btn-primary'>Go Back</button></Link>
            </div>

            </div>
        </div>
    );
};

export default ErrorPage;