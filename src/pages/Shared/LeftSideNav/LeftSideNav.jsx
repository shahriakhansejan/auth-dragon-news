import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h2 className='text-xl font-semibold'>All Category</h2>
            {
                categories.map(category => <Link to={`/category/${category.id}`} className='block pl-10 py-4 text-xl font-medium' key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

LeftSideNav.propTypes = {
    
};

export default LeftSideNav;