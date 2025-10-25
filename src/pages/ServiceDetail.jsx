import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import services from "../data/servicesData";

const ServiceDetail = () => {
  const { id } = useParams(); // Extracting the service ID from the URL
  const navigate = useNavigate(); 

  // Finding the service based on the ID from the services data
  const service = services.find((s) => s.id === id);

  // If the service is not found, display an error message
  if (!service) {
    return (
      <div className="container py-5 text-center">
        <h2>Service not found</h2>
        <button
          onClick={() => navigate("/services")} 
          className="btn btn-primary mt-3"
        >
          Go back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row align-items-start">
        <div className="col-md-6 mb-4">
          <img
            src={service.image}
            alt={service.title}
            className={`${service.imageClass} img-fluid rounded shadow`} // Apply the image class
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{service.icon} {service.title}</h2>
          <p className="lead">{service.detail}</p>
          <hr />
          <h5 className="fw-bold mt-4">🧑‍⚕️ Doctor In Charge</h5>
          <p>
            <strong>{service.doctor.name}</strong> ({service.doctor.specialization})<br />
            Experience: {service.doctor.experience}<br />
            Qualifications: {service.doctor.qualifications}<br />
            
          </p>

          <h5 className="fw-bold mt-4">⭐ Customer Feedback</h5>
          <ul className="list-unstyled">
            {service.feedback.map((comment, i) => (
              <li key={i} className="mb-2">🗨️ {comment}</li>
            ))}
          </ul>

          <h5 className="fw-bold mt-4">Rating: <span className="text-warning">{service.rating} ★</span></h5>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
