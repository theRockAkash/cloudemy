import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import siteIcon from "../assest/images/icons/logo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggle = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = scrollPosition > 50 ? { backgroundColor: 'rgba(28,28,28,1)', transition: '0.3s' } : { backgroundColor: 'transparent', transition: '0.3s' };

  return (
    <header className='main-header' style={{ "position": "fixed", "top": "0", "zIndex": 9, "width": "100%" }}>
      <Navbar expand="md" style={navbarStyle}>
        <NavbarBrand href="/">
          <div className='d-flex align-items-center'>
            <div className='site-logo me-2'>
              <img src={siteIcon} alt='cloudemy' />
            </div>
            <span className='fw-bold fs-2'>Cloudemy Studio</span>
          </div>
        </NavbarBrand>
        {/* Uncomment for collapsible nav links */}
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
};

export default Navigation;
