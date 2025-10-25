import React from "react";
import BackgroundImage from "../assets/images/dental-clinic.jpg";

const WorkingHours = () => (
  <section
  id="working-hours"
  className="working-hours py-5 text-white text-center"
  style={{
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    position: "relative"
  }}
>
  <div className="container position-relative" style={{ zIndex: 2 }}>
    <h2 className="mb-4">Working Hours</h2>
    <div className="row justify-content-center">
      <div className="col-md-6 bg-dark bg-opacity-75 p-4 rounded">
        <ul className="list-unstyled">
          <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
          <li><strong>Saturday:</strong> 9:00 AM - 2:00 PM</li>
          <li><strong>Sunday:</strong> Closed</li>
        </ul>
        <p>For emergencies, call <strong>+91 123 456 7890</strong>.</p>
      </div>
    </div>
  </div>
</section>

);

export default WorkingHours;