import React from "react";
import House from "./Houses/House";
import "./Residence.css";
import house from "../house-img.jpg";


function Residence() {
  return (
    <div className="res-m">
      <h1 className="res-h">Our Popular Residence</h1>
      <div className="res-body">
        <House
          address="Lorem ipsum dolor sit amet consectetur adipisicing."
          num_rooms="3 bedroom"
          distance="30 mins drive from train station"
          price="N500,000"
          img={house}
        />
        <House
          address="Lorem ipsum dolor sit amet consectetur adipisicing."
          num_rooms="3 bedroom"
          distance="30 mins drive from train station"
          price="N500,000"
          img={house}
        />
        <House
          address="Lorem ipsum dolor sit amet consectetur adipisicing."
          num_rooms="3 bedroom"
          distance="30 mins drive from train station"
          price="N500,000"
          img={house}
        />
        <House
          address="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam."
          num_rooms="3 bedroom"
          distance="30 mins drive from train station"
          price="N500,000"
          img={house}
        />
        <House
          address="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam."
          num_rooms="3 bedroom"
          distance="30 mins drive from train station"
          price="N500,000"
          img={house}
        />
        <House
          address="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam."
          num_rooms="3 bedroom"
          distance="30 mins drive from train station"
          price="N500,000"
          img={house}
        />
      </div>
    </div>
  );
}

export default Residence;
