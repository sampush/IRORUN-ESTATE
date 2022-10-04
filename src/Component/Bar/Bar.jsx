import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar} from 'react-bootstrap';
import './Bar.css';

function Bar() {
  return (
    <div className="">
        <Navbar bg="myRed" varient ="dark">
            <Navbar.Brand>
                Logo
            </Navbar.Brand>
        </Navbar>
    </div>
  )
}

export default Bar