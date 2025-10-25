import React from "react";
import AboutUs from "../assets/images/about-us.png";

const AboutUsSection = () => (
  <section id="about" className="about py-3">
    <div className="container" style={{ maxWidth: "900px" }}>
      <h2 className="text-center mb-3">About Us</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <p>At Preethi Dental Clinic, we are dedicated to providing exceptional dental care in a warm and welcoming environment.</p>
          <p>With state-of-the-art technology and a patient-centered approach, we strive to deliver the highest quality dental services tailored to your unique needs.</p>
        </div>
        <div className="col-md-6">
          <img src={AboutUs} alt="About Us" className="img-fluid rounded" style={{ maxWidth: "90%", display: "block", margin: "auto" }} />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsSection;