import React from 'react';
import Adds from './Adds';
import Banner from './Banner';
import Connects from './Connects';
import Features from './Features';
import Statistics from './Statistics';

const Home = () => {
    return (
        <main>
           <Banner/> 
           <Connects/>
           <Adds/>
           <Statistics/>
           <Features/>
        </main>
    );
};

export default Home;