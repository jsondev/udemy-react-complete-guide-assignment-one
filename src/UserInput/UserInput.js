import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className='UserInput'>
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>Username</span>
                </div>
                <input type='text' className='form-control' onChange={props.changed} value={props.username} placeholder='Username' />
            </div>
        </div>
    );
}

export default UserInput;