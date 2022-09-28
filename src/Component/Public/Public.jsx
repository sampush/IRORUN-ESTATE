import React from 'react'
import "./Public"
import "./Public.css"


function Public(props) {
  return (
    <div className="splin">
      <div className="">
        <img class='imgbo' src={props.imgh} alt=""/>
      </div>

      <div class="mime">
        <h4>{props.paap}</h4>
        <h4>{props.pip}</h4>
        <p>{props.kik}</p>
      </div>
    </div>
  )
}

export default Public