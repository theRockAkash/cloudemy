import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import siteIcon from "../assest/images/icons/logo.svg"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header style={{"position":"sticky","top":"0", "zIndex":9}}>
      <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">
        <div className='d-flex align-items-center'>
          <div className='site-logo me-2'>
            <img src={siteIcon} alt='cloudemy' />
          </div>
          <span className='fw-bold fs-2'>Cloudemy Studio</span>
        </div>
        
      </NavbarBrand>
      {/* <NavbarToggler onClick={toggle} />
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
      </Collapse> */}
    </Navbar>
    </header>
  );
}

export default Navigation;
