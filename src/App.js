import React from 'react'
import './App.css';
import Customer from './Component/Customer/Customer';
import Offer from './Component/Offer/Offer';
import Dream from './Component/Dream/Dream'
import Residence from './Component/Residences/Residence';
import Navbarr from './Component/Navbarr/Navbarr';
import Leg from './Component/Footer/Leg';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
     
      <Navbarr/>
      <Dream/>
      <Offer/>
      <Residence/>
      <Customer/>
      <Leg/>
    </div>
  );
}

export default App;
