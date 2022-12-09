import React from 'react';
import { Button } from 'react-bootstrap';
import NavBar from '../../../Components/Navbar/NavBar';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <div className='container'>
                <Articles></Articles>
            </div>


        </div>
    );
};

export default Home;