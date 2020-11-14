import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
 
import { Navbar, Nav, Button } from "react-bootstrap";
const Navbars = () => {
  return (
    <div>
      
      <Navbar bg="transparent" expand="lg">
        
          <Navbar.Brand>
            <img src={logo} alt="" className="nav-logo" />
          </Navbar.Brand>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <div className="account-info" type="button">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  className="bi bi-person-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                  />
                </svg>
              </div>
              <Link to="/">
                <Button variant="outline-danger">Logout</Button>
              </Link>
              
            </Nav>
          </Navbar.Collapse>

      </Navbar>
    </div>
  );
};

export default Navbars;
