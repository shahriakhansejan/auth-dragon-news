import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Latest from './Latest';

const Home = () => {
    return (
        <div>
            <Header/>
            <Latest/>
            <Navbar/>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='order-2 md:order-1'><LeftSideNav/></div>
                <div className='md:col-span-2 order-3 md:order-2 border'><h1 className='text-4xl'>News coming soon</h1></div>
                <div className='order-1 md:order-3'><RightSideNav/></div>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;