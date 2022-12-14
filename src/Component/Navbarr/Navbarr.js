import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Customer from "../Customer/Customer";
import Offer from "../Offer/Offer";
import Residence from "../Residences/Residence";
import Dream from "../Dream/Dream";
import "./Navbarr.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from '../../image/logo3.png'

function Navbarr() {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
          <Container>
            <img src ={Logo} alt="" className="img-Nav" />
            <Navbar.Brand href="#home">IRORUN ESTATE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
              </Nav>
              <Nav className="me-niv">
                <Nav.Link as={Link} to={"/Customer"}>
                  Customer
                </Nav.Link>
                <Nav.Link as={Link} to={"/Offer"}>
                  Offer
                </Nav.Link>
                <Nav.Link as={Link} to={"/Residence"}>
                  Residence
                </Nav.Link>
                <Nav.Link as={Link} to={"/Dream"}>
                  Dream
                </Nav.Link>
                <Nav.Link>
                  <button className="bts">
                     Register
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Offer" element={<Offer />} />
          <Route path="/Residence" element={<Residence />} />
          <Route path="/Dream" element={<Dream />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navbarr;
