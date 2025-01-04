import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FacilityCarousel from "../components/FacilityCarousal";
import AboutUs from "../components/AboutUs";
import AyurvedicLifestyle from "../components/lifestyle";
import Treatment from "../components/Treatment";
import InteractiveElements from "../components/InterativeElements";
import Faqs from "../components/Faqs";
import Testimonials from "../components/Testimonial";
import Enquire from "../components/Enquire";

const HomePage = () => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate("/facilities#treatments");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header>
        <FacilityCarousel />
      </header>

      <main className="flex-grow mt-4">
        {/* About Section */}
        <section id="about-us">
          <AboutUs />
        </section>

        {/* Treatments Section */}
        <Treatment showAll={false} handleShowMore={handleShowMore} />

        {/* Ayurvedic Lifestyle Section */}
        <section id="ayurvedic-lifestyle" className="bg-gray-50">
          <AyurvedicLifestyle />
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="bg-gray-50">
          <Faqs />
        </section>

        {/* Interactive Elements Section */}
        <section id="interactive-elements">
          <InteractiveElements />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Enquiry Section */}
        <section id="enquiry" className="bg-gray-50">
          <Enquire />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
