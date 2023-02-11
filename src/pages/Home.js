import React from 'react';
import Header from '../components/Header';
import Category from '../components/Category';
import Items from '../components/Items';

function Home() {   

    return(
        <div>
            <Header />
            <Items /> 
            <Category />
        </div>
    )
}

export default Home;