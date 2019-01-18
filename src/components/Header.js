import React from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary  menu">
            <Link to="/" className="item">
                Home
            </Link>
            <div className="right menu">
                <Link to="/" className="ui item">
                    Streams
                </Link>
                <GoogleAuth/>
            </div>
        </div>
    )
};

export default Header;