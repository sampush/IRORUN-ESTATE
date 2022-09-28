import React from "react";
import "./Customer.css";
import lom4 from "../../image/house4.png"

function Customer() {
  return (
    <div className="contain">
      <div className= "tittle">
        <div >
          <h1>What Our Customers</h1>
          <h1>Says About Us</h1>
          <h1>"</h1>
        </div>

        <div className="swin">
          <div >
            <div>
              <h4>They got me my dream home! I</h4>
              <h4>strongly recommend IRORUN,</h4>
            </div>
            <div>
              <p>
                Full description of the custoer review. Honestly dunna what to
                put here. I'm just trying fill up the space here. Did it work?
              </p>
            </div>
            <div className="pin">
              <div>
                <img src={lom4} alt=" " />
              </div>
              <div>
                <h4>Wade Warren</h4>
                <p>Nurse</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h4>They got me my dream home! I</h4>
              <h4>strongly recommend IRORUN,</h4>
            </div>
            <div>
              <p>
                Full description of the custoer review. Honestly dunna what to
                put here. I'm just trying fill up the space here. Did it work?
              </p>
            </div>
            <div className="pin">
              <div>
                <img src={lom4} alt=" " />
              </div>
              <div>
                <h4>Wade Warren</h4>
                <p>Nurse</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h4>They got me my dream home! I</h4>
              <h4>strongly recommend IRORUN,</h4>
            </div>
            <div>
              <p>
                Full description of the custoer review. Honestly dunna what to
                put here. I'm just trying fill up the space here. Did it work?
              </p>
            </div>
            <div className="pin">
              <div>
                <img src={lom4} alt=" " />
              </div>
              <div>
                <h4>Wade Warren</h4>
                <p>Nurse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
