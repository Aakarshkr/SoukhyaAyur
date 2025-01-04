import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWheelchair,
  faBrain,
  faDumbbell,
  faAppleAlt,
  faSpa,
  faBed,
  faHeartbeat,
  faSyringe,
  faBone,
  faLeaf,
  faChild,
  faEye,
  faEarListen,
  faBabyCarriage,
  faHeadSideVirus,
  faBaby,
} from "@fortawesome/free-solid-svg-icons";
import { GiKneeCap } from "react-icons/gi";

// Conditions data with icons
const conditions = [
  {
    name: "Paralysis",
    description: "Customized therapies to improve mobility, enhance nerve function, and promote recovery.",
    icon: faWheelchair,
  },
  {
    name: "Stress-Related Problems",
    description: "Therapies to relieve stress, enhance mental clarity, and restore emotional balance.",
    icon: faBrain,
  },
  {
    name: "Muscular Pain",
    description: "Relieves muscle tension, enhances circulation, and promotes relaxation.",
    icon: faDumbbell,
  },
  {
    name: "Joint Pain",
    description: "Treatments to reduce inflammation, improve mobility, and alleviate joint discomfort.",
    icon: GiKneeCap, // Use GiKnee from Game Icons to represent joints
  },
  {
    name: "Obesity",
    description: "Weight management therapies to reduce fat, improve metabolism, and promote overall health.",
    icon: faAppleAlt,
  },
  {
    name: "Skin Problems",
    description: "Natural treatments for glowing skin, acne, and other dermatological issues.",
    icon: faSpa,
  },
  {
    name: "Sleep Disturbance",
    description: "Relaxing therapies to promote restful sleep and improve sleep patterns.",
    icon: faBed,
  },
  {
    name: "Varicose Veins",
    description: "Effective treatments for varicose veins and circulatory issues.",
    icon: faHeartbeat,
  },
  {
    name: "Diabetes",
    description: "Therapies to manage blood sugar levels and enhance metabolic health.",
    icon: faSyringe,
  },
  {
    name: "Arthritis",
    description: "Relief from pain and stiffness associated with arthritis through holistic therapies.",
    icon: faBone,
  },
  {
    name: "Chronic Allergy",
    description: "Natural remedies to alleviate allergies and strengthen immunity.",
    icon: faLeaf,
  },
  {
    name: "Cervical & Lumbotone Problems",
    description: "Specialized treatments to address neck and lower back pain.",
    icon: faChild,
  },
  {
    name: "Spondylosis",
    description: "Therapies to reduce stiffness, improve posture, and alleviate pain caused by spondylosis.",
    icon: faBone,
  },
  {
    name: "Eye Disease",
    description: "Ayurvedic treatments to improve vision and address common eye conditions.",
    icon: faEye,
  },
  {
    name: "ENT Diseases",
    description: "Natural remedies for ear, nose, and throat ailments.",
    icon: faEarListen,
  },
  {
    name: "Infertility",
    description: "Holistic treatments to improve fertility and support reproductive health.",
    icon: faBabyCarriage,
  },
  {
    name: "Migraine",
    description: "Customized therapies to relieve migraine pain and reduce frequency.",
    icon: faHeadSideVirus,
  },
  {
    name: "After Delivery Treatment",
    description: "Postnatal care to rejuvenate and restore strength after childbirth.",
    icon: faBaby,
  },
];

// Card component
const ConditionCard = ({ condition }) => {
  const isReactIcon = typeof condition.icon === "function"; // Check if it's a React Icon

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
      <div className="flex justify-center items-center w-full h-48 bg-green-50">
        {isReactIcon ? (
          <condition.icon className="text-green-600 text-6xl" />
        ) : (
          <FontAwesomeIcon icon={condition.icon} className="text-green-600 text-6xl" />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          {condition.name}
        </h3>
        <p className="text-gray-600">{condition.description}</p>
      </div>
    </div>
  );
};

// Conditions list
const Conditions = () => {
  return (
    <section id="conditions" className="py-20 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-12">
          Conditions Treated
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition, index) => (
            <ConditionCard key={index} condition={condition} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
