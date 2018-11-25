import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className='UserOutput card'>
            <div className='card-body'>
                <h5 className='card-title'>
                    {props.username}
                </h5>
                <h6 className='card-subtitle mb-2 text-muted'>{props.subtitle}</h6>
                <p>{props.description}</p>
                <a href='#' className='card-link'>{props.link}</a>
            </div>
        </div>
    );
}

export default UserOutput;