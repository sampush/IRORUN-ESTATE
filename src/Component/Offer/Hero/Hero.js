import React from 'react'
import './Hero.css'
import myImg from '../Image/images (1).jpg'
const Hero = () => {
  return (
      <>
    <section className='hero'>
        <div className='container'>

        <img src={myImg} alt=""/>
        <div  className='hero-section'>
        
        <h1>Your Dream Home</h1>
        <h2> awaits, all with easy!</h2>

    </div>
            <form  className='flex'>
            
                <div className='box'>
                    <span>City</span>
                    <input type="text" placeholder='New York City' />
                </div>
                <div className='box'>
                    <span>Property</span>
                    <input type="text" placeholder='Duplex house' />
                </div>
                <div className='box'>
                    <span>Price Range</span>
                    <input type="text" placeholder='$12,000 - 25,000' />
                </div>
                <button className='btn'>
                    <i className='fa fa-search'></i> search

                </button>
                
            </form>

        </div>

    </section>
    </>
  )
}

export default Hero