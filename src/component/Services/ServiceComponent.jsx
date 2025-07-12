import React from "react";
import {
  FaTools,
  FaShower,
  FaBolt,
  FaHome,
  FaPaintRoller,
  FaRulerCombined,
} from "react-icons/fa";
import Header from "../commonComponents/Header";

const services = [
  {
    title: "Renovation Services",
    description:
      "Once you decide to proceed with a renovation project, offers a simple and convenient way to get in touch with us.",
    icon: <FaTools />,
  },
  {
    title: "Plumbing Services",
    description:
      "Our goal is not just to provide a quick fix but to address the underlying issue to prevent future problems.",
    icon: <FaShower />,
  },
  {
    title: "Electrical Services",
    description:
      "They will discuss any available options, provide accurate cost estimates, and answer any questions you may have.",
    icon: <FaBolt />,
  },
  {
    title: "Home Maintenance",
    description:
      "They will listen to your concerns, conduct thorough inspections, and identify any areas that may require attention.",
    icon: <FaHome />,
  },
  {
    title: "Painting and Drywall",
    description:
      "They will listen to your concerns, conduct thorough inspections, and identify any areas that may require attention.",
    icon: <FaPaintRoller />,
  },
  {
    title: "Wood & Flooring",
    description:
      "We will provide you with a detailed explanation of the recommended wood or flooring services.",
    icon: <FaRulerCombined />,
  },
];

const ServiceComponent = () => {
  return (
    <div className="w-full flex flex-col py-16 px-4 md:px-20  gap-4">
      <Header
        title="Services"
        subtitle="We Offer"
        // emphasis="Touch"
        color="#b80000"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 py-16 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md p-10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-orange_color group"
          >
            <div className="text-2xl mb-4 bg-white rounded-full w-16 h-16 flex items-center justify-center text-orange_color group-hover:text-orange transition-colors duration-300">
              {service.icon}
            </div>
            <div className="">
              <h3 className="text-3xl pb-4 font-semibold group-hover:text-white flex items-center">
                <span className="inline-block w-8 min-h-[2px] mr-4 bg-orange_color group-hover:bg-white transition duration-300"></span>
                {service.title}
              </h3>
            </div>
            <p className="text-md text-gray-700 group-hover:text-white/90 transition-colors duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComponent;
