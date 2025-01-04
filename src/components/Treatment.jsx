import React, { useState } from "react";
import { assets } from "../assets/assets";


const treatments = [
  {
    name: "ABHYANGAM PODIKIZHI",
    description:
      "A combination of massage and herbal powder treatment to relax the body and mind.",
    img: assets.abhayangam,
  },
  {
    name: "ELAKIZHI",
    description:
      "A massage using herbal poultices to relieve muscle tension and improve blood circulation.",
    img: assets.kizhi,
  },
  {
    name: "NARANGA KIZHI",
    description:
      "Therapy involving the use of warm lemon poultices for pain relief and detoxification.",
    img: assets.kizhi,
  },
  {
    name: "MANAL KIZHI",
    description:
      "A treatment with warm sandbags to alleviate joint pain and improve flexibility.",
    img: assets.kizhi,
  },
  {
    name: "NASYAM",
    description:
      "A nasal therapy that clears the sinuses and improves respiratory function.",
    img: assets.nasya,
  },
  {
    name: "UDVARTHANAM",
    description:
      "A special herbal powder massage for reducing obesity and improving skin texture.",
    img: assets.udvartanam,
  },
  {
    name: "KADIVASTHI",
    description:
      "A treatment focused on the lower back using warm medicated oil to alleviate pain.",
    img: assets.kativasti,
  },
  {
    name: "JANUVASTHI",
    description:
      "A therapy aimed at knee joint health, using a pool of medicated oil to relieve pain.",
    img: assets.januvasti,
  },
  {
    name: "GREEVA VASTHI",
    description:
      "A specialized treatment for the neck, using warm oil to treat cervical problems.",
    img: assets.januvasti,
  },
  {
    name: "PICHU",
    description:
      "A treatment involving cotton soaked in warm oil placed over the affected area for relief.",
    img: assets.pizhichil,
  },
  {
    name: "SHIRODHARA",
    description:
      "A relaxing therapy where a continuous stream of warm oil is poured over the forehead.",
    img: assets.shirodhara,
  },
  {
    name: "MATHRAVASTHI",
    description:
      "A purifying enema treatment using medicated oils to cleanse and nourish the body.",
    img: assets.kizhi,
  },
  {
    name: "KASHYAVASTHI",
    description:
      "A therapeutic enema with herbal decoctions for detoxification and relief from digestive disorders.",
    img: assets.kativasti,
  },
  {
    name: "NAVARA KIZHI",
    description:
      "A rejuvenating therapy using medicinal rice bundles dipped in milk and herbal decoctions.",
    img: assets.nasya,
  },
  {
    name: "NAVARA FACIAL",
    description:
      "A facial treatment using medicinal rice to nourish and rejuvenate the skin.",
    img: assets.abhayangam,
  },
  {
    name: "LEPANAM",
    description:
      "A therapy involving the application of medicinal paste on affected areas for relief.",
    img: assets.abhayangam,
  },
  {
    name: "THALAM",
    description:
      "A therapy where medicated paste is applied to the crown of the head to calm the mind.",
    img: assets.abhayangam,
  },
  {
    name: "NETHRA THARPANAM",
    description:
      "A treatment for eye health where medicated ghee is poured over the eyes.",
    img: assets.abhayangam,
  },
  {
    name: "KASHAYADHARA",
    description:
      "A treatment involving the pouring of herbal decoctions over the body to cleanse and rejuvenate.",
    img: assets.abhayangam,
  },
  {
    name: "PIZHICHIL",
    description:
      "A luxurious therapy where warm medicated oil is poured over the body for relaxation and rejuvenation.",
    img: assets.abhayangam,
  },
  {
    name: "PANCHAKARMA TREATMENTS",
    description:
      "A comprehensive detoxification program that includes five cleansing treatments.",
    img: assets.abhayangam,
  },
];


const TreatmentCard = ({ treatment }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
      <div className="relative w-full h-48 bg-gray-200">
        {!isLoaded && <div className="absolute inset-0 bg-gray-300 animate-pulse" />}
        <img
          src={treatment.img}
          alt={treatment.name}
          className={`w-full h-48 object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          {treatment.name}
        </h3>
        <p className="text-gray-600">{treatment.description}</p>
      </div>
    </div>
  );
};

const Treatment = ({ showAll, handleShowMore }) => {
  const visibleTreatments = showAll ? treatments : treatments.slice(0, 6);

  return (
    <section id="treatments" className="py-20 p-5 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-12">
          Ayurvedic Treatments
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {visibleTreatments.map((treatment, index) => (
            <TreatmentCard key={index} treatment={treatment} />
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-green-700 text-white rounded-lg"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Treatment;