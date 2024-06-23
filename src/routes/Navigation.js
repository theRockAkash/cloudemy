import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar color="dark" dark fixed expand="md">
      <NavbarBrand href="/">Your Logo</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className='justify-content-md-end'>
        <Nav className="ml-auto" navbar>
          <NavItem active>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/#Services">Services</Link>
          </NavItem>
          <NavItem>
            <Link to="/#contact">Contact</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    </header>
  );
}

export default Navigation;
