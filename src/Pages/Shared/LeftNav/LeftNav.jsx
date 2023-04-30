/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const leftNav = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])
    console.log(data)
    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4 mt-3'>
                {
                    data.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default leftNav;