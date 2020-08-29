import React from 'react';
import logo from '../../e-school_logo.png';
import Service from '../Service/Service';

const Header = () => {
    return (
        <div>
            <img className='d-flex justify-content-center w-50' src={logo} alt="" />
                <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100">
                    <a className="navbar-brand" href="#">Navbar</a>
                </nav>
                <Service></Service>
        </div>
    );
};

export default Header;