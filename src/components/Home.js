import React from 'react'
import "./Home.css"
import Products from './Products'

const Home = () => {
  return (
    <div className="home">
        <div className="home-container">
        <img className="home-image" src="https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg" alt="Holiday gift guides"/>
        <Products/>
        </div>
    </div>
   
  )
}

export default Home
