// src/components/ServicesSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import services from "../data/servicesData"; // Make sure you're importing the data

const ServicesSection = () => (
  <section id="services" className="container py-5">
    <div className="text-center mb-5">
      <h2 className="fw-bold">Our Dental Services</h2>
      <p className="text-muted">We provide top-quality dental care for a healthy and beautiful smile.</p>
    </div>
    <div className="row g-4">
      {services.map((item, idx) => (
        <div className="col-md-4" key={idx}>
          <div className="card service-card text-center p-4 shadow-sm h-100 d-flex flex-column justify-content-between">
            <div>
              <div className="service-icon fs-2 mb-3">{item.icon}</div>
              <h4 className="service-title">{item.title}</h4>
              <p>{item.shortDesc}</p>
            </div>
            <div>
              <Link to={`/services/${item.id}`}>
                <button className="btn btn-outline-primary mt-3">View More</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
