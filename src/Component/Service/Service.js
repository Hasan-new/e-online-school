import React, { useState } from 'react';
import fakeData from '../FakeData/fakeData';
import Cart from '../Cart/Cart';

const Service = () => {
    const [course, setCourse] = useState(fakeData);
    const [cart, setCart] = useState ([]);
   
    const addToCart = (cr) => {
        console.log("clicked", cr);
        const newCart = [...cart, cr];
        setCart (newCart);
    } 
    return (
        <div className='d-flex flex-wrap col-xl-12'>
            <div className='d-flex flex-wrap col-md-8'>
            {
                course.map(course =>
                    <div className="card col-sm-3 justify-content-wrap m-3" style={{ width: '18rem' }}>
                        <img src={course.picture} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{course.name}</h5>
                            <p className="card-text"> $ {course.price}</p>
                            <button className="btn btn-info" onClick={() => addToCart(course)}>Enroll Now</button>
                        </div>
                    </div>)
            }

            </div>
            <Cart course={cart} className='col-md-4'></Cart>
        </div>
    );
};

export default Service;