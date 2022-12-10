import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Assets/logo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'


const NavBar = () => {
    return (
        <div className=''>
            <Navbar bg="#ffffff" expand="lg">
                <Container fluid>
                    <img style={{ marginLeft: '80px' }} src={logo} alt=''></img>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="nav me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', }}
                            navbarScroll
                        >

                            <Badge pill bg="#F2F2F2" style={{
                                width: '380px', backgroundColor: '#F2F2F2', height: '42px'
                            }}>
                                <FontAwesomeIcon className='faEye' icon={faSearch} style={{ color: 'black', marginRight: '10px', height: '14px' }} />
                                < input type="text" placeholder='Search for your favorite groups in ATG' style={{ width: '300px', backgroundColor: '#F2F2F2', border: '0px', height: '30px', fontSize: '14px' }} />
                            </Badge>

                        </Nav>
                        <div className='d-flex'>


                            <Navbar.Brand style={{ fontSize: '16px', fontWeight: '700' }} href="#">  Create account. <span style={{ color: 'blue' }}>It’s free!</span> </Navbar.Brand>

                            <Dropdown className='dropdown' style={{}}>
                                <Dropdown.Toggle variant="" id="dropdown-basic">

                                </Dropdown.Toggle>

                            </Dropdown>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >

    );
};

export default NavBar;