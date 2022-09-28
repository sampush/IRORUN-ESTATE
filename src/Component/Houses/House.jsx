import React from 'react';
import './House.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { GeoAlt } from 'react-bootstrap-icons';
import { HouseFill } from 'react-bootstrap-icons';
import { Cart } from 'react-bootstrap-icons';





function House(props) {
  return (
    <div className='house-body'>
        <div>
            <img className='house-img'src={props.img} alt="" />
          </div>
      <p className='address'><GeoAlt /> {props.address}</p>

      <div className='house-details'>
        <p><HouseFill /> {props.num_rooms}</p>
        <p><Cart/> {props.distance}</p>
      </div>

      <div className='house-cta'>
    <Button>Book Now</Button>
      <span>{props.price}</span>
      </div>
      
    </div>
  );
}

export default House;
