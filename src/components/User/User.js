import React from 'react';
import './User.css';

const User = ({ user }) => {
    const { name, email, phone } = user;
    return (
        <div>
            <div className='user'>
                <h4>Name:{name}</h4>
                <p>Email: {email}</p>
                <p>Phone Number: {phone}</p>
            </div>
        </div>
    );
};

export default User;