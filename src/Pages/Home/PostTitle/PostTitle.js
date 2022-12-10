import React from 'react';
import { Button, Dropdown, Modal, ModalBody } from 'react-bootstrap';

import DropdownButton from 'react-bootstrap/DropdownButton';
import group from "../../../Assets/group.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleLine } from '@fortawesome/free-solid-svg-icons'
import './PostTitle.css'
import LoginModal from '../../../Components/Modal/LoginModal';

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


                    {/* <button className=' two-button' style={{ backgroundColor: '#2F6CE5', color: 'white', borderRadius: '6%', border: "0px" }}>


                    </button> */}



                    < LoginModal style={{ backgroundColor: '' }}></LoginModal>
                    <Dropdown className='two-button' style={{ backgroundColor: '#EDEEF0', color: 'black', borderRadius: '5%', marginLeft: '10px' }}>
                        <Dropdown.Toggle variant="Write a Post" id="dropdown-basic" >
                            Write A Post
                        </Dropdown.Toggle>

                    </Dropdown>

                    <Dropdown className='filter' style={{ backgroundColor: '#EDEEF0', color: 'black', borderRadius: '5%' }}>
                        <Dropdown.Toggle variant="Write a Post" id="dropdown-basic" >
                            Filter: All
                        </Dropdown.Toggle>

                    </Dropdown>


                </div>
            </div>
            <hr />
        </div>
    );
};

export default PostTitle;