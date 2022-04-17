import React from 'react';
import notfound from '../../Images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%', height: 'auto' }} src={notfound} alt="" />
        </div>
    );
};

export default NotFound;