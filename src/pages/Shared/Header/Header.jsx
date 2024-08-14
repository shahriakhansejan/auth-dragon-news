import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-lg text-[#706F6F] mt-5 mb-2'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;