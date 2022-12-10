import React from 'react';
import { Button } from 'react-bootstrap';
import NavBar from '../../../Components/Navbar/NavBar';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import PostTitle from '../PostTitle/PostTitle';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <div className='container'>
                <PostTitle></PostTitle>
                <Articles></Articles>

            </div>


        </div>
    );
};

export default Home;