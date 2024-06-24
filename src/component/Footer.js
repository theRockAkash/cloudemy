import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <section id="footer">
        {/* <div className="social-icons-section pb-5 d-flex align-items-center justify-content-center">
          <Link to="/" className="social-icon" onClick={(e)=>e.preventDefault()}>
            <img
              src="https://kinemaster.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyoutube.422d287a.png&w=256&q=75"
              alt="youtube"
            />
          </Link>
          <Link to="/" className="social-icon" onClick={(e)=>e.preventDefault()}>
            <img
              src="https://kinemaster.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstagram.bdb99058.png&w=256&q=75"
              alt="instagram"
            />
          </Link>
          <Link to="/" className="social-icon" onClick={(e)=>e.preventDefault()}>
            <img
              src="https://kinemaster.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffacebook.a7a9f745.png&w=256&q=75"
              alt="facebook"
            />
          </Link>
        </div> */}
        <p className="copy-des text-center">
          Copyright © 2024 Cloudemy, All rights reserved.
        </p>
        <div className="footer-menu-item d-flex flex-wrap justify-content-center align-items-center">
          {/* <Link to="/"  onClick={(e)=>e.preventDefault()}>
          Terms of Service
          </Link> */}
          <Link to="https://www.cloudemy.in/privacy-policy"  onClick={(e)=>e.preventDefault()}>
          Privacy Policy
          </Link>
          <Link to="https://www.cloudemy.in/about-us"  onClick={(e)=>e.preventDefault()}>
          About Us
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
