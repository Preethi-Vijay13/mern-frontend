import React from "react";
import "../assets/css/hme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "../components/HeroSection";
import About from "../components/AboutUsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/ServicesSection";
import WorkingHours from "../components/WorkingHours";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div id="home" className="container-fluid px-0">
        <Hero />
      </div>

      <div id="about" className="container py-5">
        <About />
      </div>

      <div id="why-choose-us" className="container py-5">
        <WhyChooseUs />
      </div>

      <div id="services" className="container py-5">
        <Services />
      </div>

      <div id="working-hours" className="container py-5">
        <WorkingHours />
      </div>

      <div id="footer" className="container-fluid px-0 mt-5">
        <Footer />
      </div>
    </>
  );
};

export default Home;
