import React from 'react'
import './Footer.css'

function Footer(props) {
  return (
    <div>
        <div>
          <div>
            <h6 className='dem-bin'>{props.bin}</h6>
          </div>
          
          <div className='dem-prop'>
            <p>{props.flip}</p>
           <p>{props.tip}</p>
           <p>{props.rim}</p>
          </div>
        </div>
    </div>
  )
}

export default Footer;