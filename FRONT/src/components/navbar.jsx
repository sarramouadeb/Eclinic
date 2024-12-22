import React, { useState, useEffect } from "react";
import '../style/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggleNav, setToggleNav] = useState(window.innerWidth > 507);

  // Handle window resize and set toggleNav based on width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 507) {
        setToggleNav(false);
      } else {
        setToggleNav(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth <= 507 ? (
        <div id="">
          {/* Navbar for small screens */}
          <pre
            className="eclinic-logo clinicLogo"
            style={{
              position: "absolute",
              top: "50px", // Adjust for vertical positioning
              margin: 0,
              paddingLeft: '10px',
              paddingTop: '10px',
              fontSize: '4rem'
            }}
          >
             E Clinic
          </pre>
          <nav
            role="navigation"
            className="navbar navbar-expand-lg navbar-light bg-light position-absolute top-0 end-0 p-3"
          >
            {toggleNav && (
              <ul className="navHeader d-flex justify-content-end list-unstyled m-0" style={{ fontWeight: 'bold !important ' }}>
                <li className="mx-3"><a href="#home" className="links">Home</a></li>
                <li className="mx-3"><a href="#aboutUs" className="links">About Us</a></li>
                <li className="mx-3"><a href="#contact" className="links">Contact</a></li>
              </ul>
            )}
          </nav>
        </div>
      ) : (
        <div id="navbar-wrapper">
          {/* E⭒Clinic Logo */}
          <h1><pre 
            className="eclinic-logo eclinicLogo"
            style={{
              position: "absolute",
              top: "50px", // Adjust for vertical positioning
              left: "90px", // Adjust for horizontal positioning
              margin: 0,
              paddingLeft: '20px',
              paddingTop: '10px',
              fontSize: '4rem' 
            }}
            
          >
            E-Clinic
          </pre></h1>

          {/* Navbar for larger screens */}
          <nav
            role="navigation"
            className="position-absolute top-0 end-0 p-3"
            style={{fontSize: '1.5rem'}}
          >
            <ul className="navHeader d-flex justify-content-end list-unstyled m-0">
              <li className="mx-3"><a href="/home" className="links">Home</a></li>
              <li className="mx-3"><a href="/aboutUs" className="links">About us</a></li>
              <li className="mx-3"><a href="/contact" className="links">Contact</a></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
