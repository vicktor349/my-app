import React from 'react';
import './styles/Home.css';
import Data from './data/Data';

const Home = () => {
    return (
        <div>
            {Data.imgSrc}
            <div className="intro-name">
                <div className="menu-icon">
                </div>
                {/* <h1>{Data.helloMessage}<span className="span-name">{Data.descripName}</span></h1>
                <h1>{Data.descripWork}</h1> */}
            </div>
        </div>
    );
}
 
export default Home;