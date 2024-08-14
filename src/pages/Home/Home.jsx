import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'><LeftSideNav/></div>
                <div className='col-span-2 border'><h1 className='text-4xl'>News coming soon</h1></div>
                <div className='border'><RightSideNav/></div>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;