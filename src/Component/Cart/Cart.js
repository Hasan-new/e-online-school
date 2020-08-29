import React from 'react';

const Cart = (props) => {
    let total = 0;
    const cart = props.course;
    total = cart.reduce((total, prd) => total + prd.price, 0)

    return (

        <div className="cart" style={{ width: '16rem',displayOverflow:'scroll' }}>
            <h5>Course Purchased: </h5>

            {
                cart.map(cartItem => <div className="card col-md-12 mb 3" style={{ width: '16rem' }}>
                    <div className="card-body">
                        <img className="image-fluid" style={{ width: '100%' }} src={cartItem.picture} alt="" />
                        <h5 className="card-title">  {cartItem.name}</h5>
                        <p className="card-text">$  {cartItem.price}</p>
                    </div>
                </div>
                )
            }
            <h4>Total: $ {total} </h4>
            <button onClick={ () => alert('you don not have enough money 😁😁')} className="btn btn-success">Check Out</button>
        </div>)
}


export default Cart;
