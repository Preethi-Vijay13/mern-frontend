import React from "react";
import IconExperience from "../assets/images/icon-experience.jpg";
import IconCare from "../assets/images/icon-care.jpg";
import IconTechnology from "../assets/images/icon-technology.jpg";
import IconPricing from "../assets/images/icon-pricing.jpg";

const reasons = [
  { img: IconExperience, title: "Experienced Professionals", desc: "Our team consists of highly skilled and experienced dentists." },
  { img: IconCare, title: "Patient-Centered Care", desc: "We prioritize your comfort and provide personalized care." },
  { img: IconTechnology, title: "Advanced Technology", desc: "We use modern tools for accurate diagnoses and treatments." },
  { img: IconPricing, title: "Affordable Pricing", desc: "Flexible payment options for everyone." },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" className="why-choose-us bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-5">Why Choose Preethi Dental?</h2>
      <div className="row">
        {reasons.map((item, index) => (
          <div className="col-md-3 text-center" key={index}>
            <img src={item.img} alt={item.title} className="img-fluid mb-3" width="300" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

