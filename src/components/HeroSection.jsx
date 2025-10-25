import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section id="home" className="hero bg-light py-5">
    <div className="container text-center">
      <h2 className="display-4">Welcome to Preethi Dental Clinic</h2>
      <p className="lead">Your smile is our priority. We offer the best dental care services to keep your teeth healthy and bright.</p>
      <Link to="/appointment" className="btn btn-warning btn-lg">Book an Appointment</Link>
    </div>
  </section>
);

export default HeroSection;