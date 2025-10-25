import React from "react";

const Footer = () => (
  <footer id="contact" className="bg-dark text-white py-5">
    <div className="container text-center">
      <h5 className="mb-4">Preethi Dental Clinic</h5>
      <p className="mb-2">&copy; 2025 Preethi Dental Clinic. All rights reserved.</p>

      <div className="d-flex justify-content-center mb-3">
        <div className="px-3">
          <h6>Contact Us</h6>
          <p className="mb-1">📞 +91 123 456 7890</p>
          <p className="mb-1">✉️ info@preethidental.com</p>
        </div>
        <div className="px-3">
          <h6>Visit Us</h6>
          <p className="mb-1">🏢 123, Main Road, Chennai, India</p>
        </div>
        <div className="px-3">
          <h6>Quick Links</h6>
          <p className="mb-1"><a href="#services" className="text-white text-decoration-underline">Our Services</a></p>
          <p className="mb-1"><a href="#about" className="text-white text-decoration-underline">About Us</a></p>
          <p className="mb-1"><a href="#appointment" className="text-white text-decoration-underline">Book Appointment</a></p>
        </div>
      </div>
</div>
  </footer>
);

export default Footer;
