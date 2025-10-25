import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is included
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is included

const Header = () => {
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/appointment');
    } else {
      navigate('/signin');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Preethi Dental
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <Link to="/signin" className="btn btn-light btn-sm">Sign In</Link>
            <Link to="/signup" className="btn btn-warning btn-sm">Sign Up</Link>
            <button onClick={handleAppointmentClick} className="btn btn-outline-light btn-sm">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
