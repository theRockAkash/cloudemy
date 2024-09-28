import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import siteIcon from "../assest/images/icons/logo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation(); // React Router's hook to get the current path
  const [activeItem, setActiveItem] = useState('/'); // State to track active menu item
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

  // Update activeItem based on the current path
  useEffect(() => {
    setIsOpen(false)
    setActiveItem(location.pathname)
  }, [location]); 

  const navbarStyle = scrollPosition > 50 ? { backgroundColor: 'rgba(28,28,28,1)', transition: '0.3s' } : { backgroundColor: 'transparent', transition: '0.3s' };

  return (
    <header className='main-header' style={{ "position": "fixed", "top": "0", "zIndex": 9, "width": "100%" }}>
      <Navbar expand="md" style={navbarStyle} className='custom-navbar'>
        <NavbarBrand href="/">
          <div className='d-flex align-items-center'>
            <div className='site-logo me-2'>
              <img src={siteIcon} alt='cloudemy' />
            </div>
            <span className='fw-bold fs-2'>Cloudemy Studio</span>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='justify-content-md-end'>
          <Nav className="ml-auto" navbar>
            <NavItem className={activeItem === '/' ? 'active' : ''}>
              <Link to="/" onClick={() => setActiveItem('Home')}>Home</Link>
            </NavItem>
            <NavItem className={activeItem === '/faq' ? 'active' : ''}>
              <Link to="/faq" onClick={() => setActiveItem('FAQ')}>FAQs</Link>
            </NavItem>
            <NavItem className={activeItem === '/blogs' ? 'active' : ''}>
              <Link to="/blogs" onClick={() => setActiveItem('Blogs')}>Blogs</Link>
            </NavItem>
            <NavItem className={activeItem === '/contact' ? 'active' : ''}>
              <Link to="/contact" onClick={() => setActiveItem('Contact')}>Contact Us</Link>
            </NavItem>
            {/* Uncomment for more nav items */}
            {/* <NavItem className={activeItem === 'About' ? 'active' : ''}>
              <Link to="/about" onClick={() => setActiveItem('About')}>About</Link>
            </NavItem>
            <NavItem className={activeItem === 'Services' ? 'active' : ''}>
              <Link to="/#Services" onClick={() => setActiveItem('Services')}>Services</Link>
            </NavItem>
            <NavItem className={activeItem === 'Contact' ? 'active' : ''}>
              <Link to="/#contact" onClick={() => setActiveItem('Contact')}>Contact</Link>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Navigation;
