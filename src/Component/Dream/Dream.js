import React from "react";
import "./Dream.css";

function Dream() {
  return (
    <div className="Dream-top">
      <div>
        <div className="dreamText">
          <h1>Your dream home</h1>
          <h1>awaits,all wiith ease!</h1>
        </div>
        <diV className="bon">
          <form className="from">
            <div className="bril">
              <div className="box">
                <p>City</p>
                <input type="text" placeholder="New York City" />
              </div>
              <div className="box">
                <p>Property</p>
                <input type="text" placeholder="Duplex house" />
              </div>
              <div className="box">
                <p>Price Range</p>
                <input type="text" placeholder="$12,000 - 25,000" />
              </div>
              <input type="submit" name="" value="Search" />
            </div>
          </form>
        </diV>
      </div>
    </div>
  );
}

export default Dream;
