import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData()
    return (
        <div>
            <h2 className="text-3xl font-bold">tShirt: {tShirts.length}</h2>
        </div>
    );
};

export default Home;