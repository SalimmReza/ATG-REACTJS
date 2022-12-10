import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleLine } from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'react-bootstrap';
import img from '../../Assets/loginImg.png'
import LoginModal from '../Modal/LoginModal'
import './LoginModal.css'

function SigninModal(props) {

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
                        <h1 style={{ fontSize: '24px', marginBottom: '24px' }}>Sign In</h1>
                        <div >
                            <input className='w-100' type="text" style={{ backgroundColor: '#F7F8FA', borderColor: '#D9D9DB', height: '46px', borderRadius: '2px' }} placeholder='Email' />
                        </div>
                        <div className=''>
                            <input className='w-100' type="text" style={{ backgroundColor: '#F7F8FA', borderColor: '#D9D9DB', height: '46px', borderRadius: '2px' }} placeholder='Password' />
                        </div>


                        <div style={{ marginTop: '19px' }}>
                            <Badge className='w-100 d-flex justify-content-center align-items-center' style={{ height: '40px', }} pill bg="primary">
                                Create Account
                            </Badge>


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
                        <p className='mt-3'>Forgot Password</p>


                    </div>
                    <div class="col login-image">
                        <p style={{ marginTop: '31px' }}>Don’t have an account yet?
                            <span
                                style={{ color: 'blue', cursor: 'pointer' }}>Create new for free!</span> </p>
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

    return (
        <>


            <span style={{ color: 'blue', cursor: 'pointer' }}

                onClick={() => setModalShow(true)}>sign In</span>

            <SigninModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default App;