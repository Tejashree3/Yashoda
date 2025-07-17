import React, { useState } from "react";
import Header from "./commonComponents/Header";
import vision from "../asset/aboutus/vision.png";
import mission from "../asset/aboutus/mission.png";
import values from "../asset/aboutus/values.png";

const VisionMissionValues = () => {
  const sections = [
    {
      title: "OUR MISSION",
      description:
        "To lead the transformation of the assembly manufacturing industry through sustainable practice, ethical growth and cutting edge innovation that benefit both people and planet.",
      subpoints: [
        "Quality and precision focus",
        "Sustainablity and Innovation focus",
        "Customer Centric focus",
        "Growth and Global React focus",
        "Operations Excellence focus",
      ],
      image: mission,
    },
    {
      title: "OUR VISION",
      description:
        'To be recognized as a global leader "IN THE DESIGN AND CONSULTING SUPPLY CHAIN, TRADING " in Water, Heat, Food Technologies as per required customized solutions.',
      subpoints: [],
      image: vision,
    },
    {
      title: "OUR VALUES",
      description:
        "Integrity, Responsibility, Accountability, Customer Focus and Quality.",
      subpoints: [
        "Integrity: Maintaining ethical conduct, adhering to regulations, and building long-term customer relationships are crucial.",
        "Responsibility: Ensuring client satisfaction, environmental stewardship, workplace safety, and community involvement are important aspects of a responsible company.",
        "Accountability: Taking ownership of actions and decisions, promoting transparency, and maintaining high ethical standards are essential.",
        "Customer Focus: Understanding and meeting client needs, providing excellent service, and building strong relationships are vital.",
        "Quality: Striving for high-quality products and services, implementing rigorous quality control measures, and delivering on promises are key.",
        "Safety: Prioritizing workplace safety, preventing injuries, and ensuring a safe working environment is crucial for both employees and the company's reputation. Innovation: Continuously seeking new and improved ways to design, engineer, and fabricate products , Development , to stay competitive and meet evolving client needs. Collaboration: Working effectively with clients, suppliers, and employees to achieve common goals and deliver successful projects. Excellence: Striving for the highest standards in all aspects of the business, from design and engineering to manufacturing , Supply and customer service.",
      ],
      image: values,
    },
  ];
  const [openAccordions, setOpenAccordions] = useState(
    Array(sections.length).fill(false)
  );

  const toggleAccordion = (index) => {
    setOpenAccordions((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };
  const bgColors = ["bg-[#7a0f08]", "bg-[#fd6b0a]", "bg-[#349ca3]"];

  return (
    <div className="flex flex-col py-16 px-4 md:px-20 ">
      <div className="pb-16">
        <Header
          title="Mission Vision & Values"
          subtitle="Our Workshop & Machines"
          //   emphasis="Now"
          color="#b80000"
        />
      </div>
        <div className="hidden md:block">

      {sections.map((section, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 w-full  items-center"
        >
          {index % 2 === 0 ? (
            <>
              <div
                className={`text-white  px-10 md:px-16 py-20 flex flex-col justify-center shadow-2xl rounded-xl ${bgColors[index]}`}
              >
                <h2 className="text-2xl md:text-6xl font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-sm md:text-lg">{section.description}</p>
                {section.subpoints.length > 0 && (
                  <div className="block ">
                    <button
                      className="mt-4 text-sm underline text-white"
                      onClick={() => toggleAccordion(index)}
                    >
                      {openAccordions[index] ? "Hide details" : "Show details"}
                    </button>

                    {openAccordions[index] && (
                      <ul className="pl-6 mt-2 text-sm text-gray-100 list-disc list-inside space-y-1">
                        {section.subpoints.map((item, i) => (
                          <li key={i}>
                            {i + 1}. {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center p-6">
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-100 md:h-100 object-contain"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center p-6">
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-100 md:h-100 object-contain"
                />
              </div>

              <div
                className={`text-white  px-10 md:px-16 py-20 flex flex-col justify-center shadow-2xl rounded-xl ${bgColors[index]}`}
              >
                <h2 className="text-2xl md:text-6xl font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-sm md:text-lg">{section.description}</p>

                {section.subpoints.length > 0 && (
                  <div className="block ">
                    <button
                      className="mt-4 text-sm underline text-white"
                      onClick={() => toggleAccordion(index)}
                    >
                      {openAccordions[index] ? "Hide details" : "Show details"}
                    </button>

                    {openAccordions[index] && (
                      <ul className="pl-6 mt-2 text-sm text-gray-100 list-disc list-inside space-y-1">
                        {section.subpoints.map((item, i) => (
                          <li key={i}>
                            {i + 1}. {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/*           )} */}
              </div>
            </>
          )}
        </div>
      ))}
</div>
<div className="block md:hidden">
{sections.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={`flex flex-col md:grid md:grid-cols-2 w-full items-center mb-10 ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image Always First in Mobile */}
            <div className="w-full flex items-center justify-center p-6">
              <img
                src={section.image}
                alt={section.title}
                className="h-100 md:h-100 object-contain"
              />
            </div>

            {/* Content Box */}
            <div
              className={`text-white px-6 md:px-16 py-8 md:py-20 flex flex-col justify-center shadow-2xl rounded-xl w-full ${bgColors[index]}`}
            >
              <h2 className="text-2xl md:text-6xl font-bold mb-4">
                {section.title}
              </h2>
              <p className="text-sm md:text-lg">{section.description}</p>

              {/* Accordion if subpoints exist */}
              {section.subpoints.length > 0 && (
                <div className="mt-4">
                  {/* Desktop: always show */}
                  <ul className="hidden md:block pl-10 mt-2 text-md text-gray-200 list-disc list-inside space-y-1">
                    {section.subpoints.map((item, i) => (
                      <li key={i}>
                        {i + 1}. {item}
                      </li>
                    ))}
                  </ul>

                  {/* Mobile: toggle accordion */}
                  <div className="block md:hidden">
                    <button
                      className="mt-4 text-sm underline text-white"
                      onClick={() => toggleAccordion(index)}
                    >
                      {openAccordions[index] ? "Hide details" : "Show details"}
                    </button>

                    {openAccordions[index] && (
                      <ul className="pl-6 mt-2 text-sm text-gray-100 list-disc list-inside space-y-1">
                        {section.subpoints.map((item, i) => (
                          <li key={i}>
                            {i + 1}. {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
</div>
      
    </div>
  );
};

export default VisionMissionValues;
