import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__bannerImage" src="../banner.jpg" alt="banner"/>

                <div className="home__row">
                    <Product id="001" title="Fitbit impulse 2" price={30} image="../fitbit.jpg" rating={5}></Product>
                    <Product id="002" title="Cotton face mask" price={50} image="../mask.png" rating={5}></Product>
                </div>
                <div className="home__row">
                    <Product id="003" title="LED TV ultra Slim full HD" price={500.52} image="../tv.png" rating={5}></Product>
                    <Product id="004" title="New Apple iPhone 12 Mini (64 GB) - Black" price={700} image="../iphone.jpg" rating={5}></Product>
                    <Product id="005" title="Amazon Alexa" price={150} image="../alexa.png" rating={5}></Product>
                </div>
                <div className="home__row">
                    <Product id="006" title="Special Groceries" price={239} image="../groceries.png" rating={5}></Product>
                </div>

            </div>
        </div>
    )
}

export default Home
