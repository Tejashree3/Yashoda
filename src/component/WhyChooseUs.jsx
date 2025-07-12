import React from "react";
import sofaImage from "../asset/about.png"; // Replace with your image path
import Header from "./commonComponents/Header";

const WhyChooseUs = () => {
  const features = [
    {
      id: "01",
      title: "Fast & Free Shipping",
      description: "Get your products delivered quickly and for free.",
    },
    {
      id: "02",
      title: "24/7 Support",
      description: "Our support team is here to help you anytime.",
    },
    {
      id: "03",
      title: "Hassle Free Returns",
      description: "Return products easily if you’re not satisfied.",
    },
    {
      id: "04",
      title: "Easy to Shop",
      description: "A seamless and simple shopping experience.",
    },
  ];

  return (
    <section className=" py-16 px-6 md:px-20">
        <div className="pb-20">

           <Header
        title="Why Choose us"
        // subtitle="We Offer"
        emphasis="Us"
        color="#b80000"
      />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <div>
          <h2 className="text-5okxl font-semibold mb-6 text-gray-800">
            Why Choose Us
          </h2>
 <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto mb-10">
        At Renovex we are committed to revolutionizing the construction industry
        with innovative, sustainable, and{" "}
        cost-effective solutions.
      </p>          <div className="grid grid-cols-2 gap-6">
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
                <p className="text-sm text-gray-500">
                  {feature.description}
                </p>
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
