import React from "react";
import sofaImage from "../asset/about.png"; // Replace with your image path
import Header from "./commonComponents/Header";

const WhyChooseUs = () => {
  const features = [
    {
      id: "01",
      title: "Precision Manufacturing",
      description:
        " Achieve tight tolerances with our advanced capabilities and experienced technical team.",
    },
    {
      id: "02",
      title: "Quality Assurance",
      description:
        " Stringent quality checks and NABL-certified instruments ensure reliable, high-standard output.",
    },
    {
      id: "03",
      title: "Agile & Customized Solutions",
      description:
        "Flexible manufacturing that responds quickly to customer demands with tailored solutions.",
    },
    {
      id: "04",
      title: "On-Time Delivery",
      description:
        " Get your products delivered promptly without compromising durability",
    },
  ];

  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="pb-20">
        <Header
          title="Why Choose"
          // subtitle="We Offer"
          emphasis="Us"
          color="#b80000"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <div>
          <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto mb-10">
            With a commitment to precision, quality, and customer satisfaction,
            we deliver reliable manufacturing solutions tailored to your needs.
            Our expert team, advanced equipment, and dedication to excellence
            make us a trusted partner in producing hygienic fittings, automotive
            components, and precision parts.
          </p>{" "}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-6xl font-bold text-gray-900 mb-2">
                  {feature.id}
                </h3>
                <p className="font-semibold text-gray-800 mb-1">
                  {feature.title}
                </p>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={sofaImage}
            alt="sofa"
            className="w-full h-[600px] px-10 rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
