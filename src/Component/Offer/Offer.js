import React from "react";
import "./Offer.css";
import logo from "../../image/asplash.jpg";
import lom4 from "../../image/house4.png";
import Public from "./Public/Public";

function Offer() {
  return (
    <div className="cont">
      <div className="dime">
        <h1>What We offer</h1>
      </div>
      

      <div className="groom">
        <div className="koop">
          <img src={logo} alt="" />
        </div>
        <diV className="pig">
          <Public
            imgh={lom4}
            paap="House"
            pip="Hunting"
            kik=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Alias nulla eum voluptatem, eveniet quidem exercitationem
            animi totam laborum possimus enim iure ducimus ipsum doloribus
            dolorem."
          />
          <Public
            imgh={lom4}
            paap="Home Sales"
            pip="and Lease"
            kik=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Alias nulla eum voluptatem, eveniet quidem exercitationem
            animi totam laborum possimus enim iure ducimus ipsum doloribus
            dolorem."
          />
          <Public
            imgh={lom4}
            paap="Service"
            pip="Apartments"
            kik=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Alias nulla eum voluptatem, eveniet quidem exercitationem
            animi totam laborum possimus enim iure ducimus ipsum doloribus
            dolorem."
          />
          <Public
            imgh={lom4}
            paap="Property"
            pip="Management"
            kik=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Alias nulla eum voluptatem, eveniet quidem exercitationem
            animi totam laborum possimus enim iure ducimus ipsum doloribus
            dolorem."
          />
        </diV>
      </div>
    </div>
  );
}

export default Offer;
