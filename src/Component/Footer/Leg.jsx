import React from 'react';
import Footer from './Footer';
import'./Leg.css';

function Leg() {
  return (
    <div className="res-foot">
       <div className=''>
        <Footer
            bin="logot"
            flip="2972 Westierner"
            tip="Rd, Santa ana"
            rim="Illinois 86486"
        />
        </div>

        <div className='res-fit'>
        <Footer
            bin="Services"
            flip="Sell a house"
            tip="Rent a house"
            rim="Buy/Build a house"
        />

        <Footer
            bin="Support"
            flip="FAQ's"
            tip="Support Center"
            rim="Help Center"
        />

        <Footer
            bin="Socials"
            flip="Instagram"
            tip="Twitter"
            rim="Facebook"
        />
      

       <Footer
            bin="Company"
            flip="About Us "
            tip="Contact Us"
            rim="Our Team"
        />
        </div>
       
    </div>
  )
}

export default Leg;