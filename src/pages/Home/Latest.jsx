import React from 'react';
import PropTypes from 'prop-types';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Latest = () => {
    return (
        <div className='flex my-7'>
            <button  className="btn btn-secondary btn-md text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                     <Link className='mx-10'>I can be a React component, multiple React components, or just some text....</Link>
                     <Link>I can be a React component, multiple React components, or just some text....</Link>
            </Marquee>
        </div>
    );
};

Latest.propTypes = {
    
};

export default Latest;