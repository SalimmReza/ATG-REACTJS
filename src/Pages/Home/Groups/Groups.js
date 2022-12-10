import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Groups = () => {
    return (
        <div className='p-5'>
            <FontAwesomeIcon className='' icon={faLocationDot}></FontAwesomeIcon>
            <input
                style={{ marginLeft: '10px', marginBottom: '20px', borderTopWidth: '0px', borderRightWidth: '0px', borderLeftWidth: '0px', }}
                type="text" placeholder='Noida, India'
            />

            <p>Your location will help us serve better and extend a personalised experience.</p>

        </div>
    );
};

export default Groups;