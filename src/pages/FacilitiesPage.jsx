import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Treatment from "../components/Treatment";
import Conditions from "../components/Conditions";

const FacilitiesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#treatments") {
      const element = document.getElementById("treatments");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-green-50">
      <Conditions />
      <section id="treatments">
        <Treatment showAll={true} />
      </section>
    </div>
  );
};

export default FacilitiesPage;
