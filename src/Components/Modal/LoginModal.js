import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleLine } from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'react-bootstrap';
import img from '../../Assets/loginImg.png'
import SignInModal from '../Modal/SignInModal.js'
import './LoginModal.css'
import '../../Pages/Home/PostTitle/PostTitle.css'

function LoginModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ backgroundColor: '#EFFFF4' }} closeButton>
                <Modal.Title style={{ fontSize: '14px', color: '#008A45' }} id="contained-modal-title-vcenter">
                    Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="row">
                    <div class="col">
                        <h1 style={{ fontSize: '24px', marginBottom: '24px' }}>Create Account</h1>
                        <div className='d-flex '>
                            <input className='name' placeholder='First Name' style={{ backgroundColor: '#F7F8FA', borderColor: '#D9D9DB', height: '46px', borderRadius: '2px', }} type="text" />
                            <input className='name' placeholder='Last Name' type="text" style={{ backgroundColor: '#F7F8FA', borderColor: '#D9D9DB', height: '46px', borderRadius: '2px', }} />
                        </div>

                        <div >
                            <input className='w-100' type="text" style={{ backgroundColor: '#F7F8FA', borderColor: '#D9D9DB', height: '46px', borderRadius: '2px' }} placeholder='Email' />
                        </div>
                        <div className=''>
                            <input className='w-100' type="text" style={{ backgroundColor: '#F7F8FA', borderColor: '#D9D9DB', height: '46px', borderRadius: '2px' }} placeholder='Password' />
                        </div>
                        <div className='w-100'>
                            <input className='w-100' type="text" style={{ backgroundColor: '#F7F8FA', borderColor: '#D9D9DB', height: '46px', borderRadius: '2px' }} placeholder='Confirm Password' />
                        </div>

                        <div className='d-flex' style={{ marginTop: '19px' }}>
                            <Badge className='w-100 d-flex justify-content-center align-items-center' style={{ height: '40px', }} pill bg="primary">
                                Create Account
                            </Badge>

                            <span className='or-signin'
                                style={{ color: 'blue', cursor: 'pointer', marginLeft: '10px', marginRight: '10px', width: '100px' }}>Or SignIn!</span>
                        </div>
                        <div>
                            <Button style={{ marginTop: '24px' }}
                                className='w-100' variant="outline-secondary">
                                <img style={{ height: '16px', marginRight: '10px', color: 'black' }} src='https://cdn-icons-png.flaticon.com/512/5968/5968764.png' alt="" />
                                Sign up with Facebook</Button>
                        </div>
                        <div>
                            <Button style={{ marginTop: '8px' }}
                                className='w-100' variant="outline-secondary">
                                <img style={{ height: '16px', marginRight: '10px', }} src='https://cdn-icons-png.flaticon.com/512/300/300221.png' alt="" />
                                Sign up with Google</Button>
                        </div>


                    </div>
                    <div class="col login-image">
                        <p style={{ marginTop: '31px' }}>Already have an account? <SignInModal></SignInModal> </p>
                        <img style={{ marginTop: '24px' }} src={img} alt=''></img>
                        <p style={{ fontSize: '11px' }}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                </div>
            </Modal.Body>

        </Modal >
    );
}

function App() {
    const [modalShow, setModalShow] = React.useState(false);
    const [signInShow, setSignInShow] = React.useState(false);

    return (
        <>
            <button
                style={{ backgroundColor: "#2F6CE5", color: 'white', border: '0px', borderRadius: '2px' }}
                className='two-button' variant="primary" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faPeopleLine}></FontAwesomeIcon>
                Join Group
            </button>


            <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />



        </>
    );
}

export default App;