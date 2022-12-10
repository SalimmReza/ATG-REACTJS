import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';

import DropdownButton from 'react-bootstrap/DropdownButton';
import group from "../../../Assets/group.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleLine } from '@fortawesome/free-solid-svg-icons'
import './PostTitle.css'

const PostTitle = () => {
    return (

        <div>
            <div className='d-flex justify-content-between' style={{ marginTop: '47px' }}>
                <div className='d-flex all-posts'  >
                    <h5 style={{ marginRight: '20px', fontWeight: '400px' }}>All Post(32)</h5>
                    <p style={{ marginRight: '20px', color: '#8A8A8A' }}>Article</p>
                    <p style={{ marginRight: '20px', color: '#8A8A8A' }}>Event</p>
                    <p style={{ marginRight: '20px', color: '#8A8A8A' }}>Education</p>
                    <p style={{ marginRight: '20px', color: '#8A8A8A' }}>Job</p>

                </div>
                <div className='d-flex ' style={{ fontWeight: '500px' }}>

                    <Dropdown className='two-button' style={{ backgroundColor: '#EDEEF0', color: 'black', borderRadius: '5%' }}>
                        <Dropdown.Toggle variant="Write a Post" id="dropdown-basic" >
                            Write a Post
                        </Dropdown.Toggle>

                    </Dropdown>
                    <button className=' two-button' style={{ backgroundColor: '#2F6CE5', color: 'white', borderRadius: '6%', border: "0px" }}>
                        <FontAwesomeIcon icon={faPeopleLine}></FontAwesomeIcon>
                        Join Group</button>

                    <Dropdown className='filter' style={{ backgroundColor: '#EDEEF0', color: 'black', borderRadius: '5%' }}>
                        <Dropdown.Toggle variant="Write a Post" id="dropdown-basic" >
                            Write a Post
                        </Dropdown.Toggle>

                    </Dropdown>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default PostTitle;