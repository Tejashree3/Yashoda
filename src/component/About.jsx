import React from "react";
import image1 from "../asset/about.png"; // top city image
import image2 from "../asset/about.png"; // bottom worker image
import Button from "./commonComponents/Button";
import { useLocation, useNavigate } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/about");
  };
  return (
    <>
      <section className="w-full bg-[#fff] py-16 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Images */}
        <div className="relative shadow-xl w-full md:w-1/2">
          <img
            src={image1}
            alt="City"
            className="w-full h-[100vh] object-cover rounded-md shadow-md"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 px-6 text-left">
          <p className="text-sm uppercase text-[#1d1d4f] tracking-widest mb-8">
            ● Welcome to Yashoda Enterprises
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d4f] leading-tight mb-12">
            Organization
            <br />
            <span className="block mt-4">formed in 2021.</span>
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            <span className="inline-block w-3 h-3 bg-orange_color mr-2 align-middle"></span>
            The business scope of our company includes the material supply,
            production, installation, fabrications, and manufacturing of Pharma,
            Food, dairy processing equipment, precision engineering components,
            assemblies & sub-assemblies, tool room activities, precision machine
            parts & auto parts. We follow complete Quality Management to ensure
            a universal standards of products.
          </p>
          <p className="text-gray-600 text-lg">
            Meticulous quality control norms are followed from raw material to
            the final delivery of the products. With this, we assure you that,
            we will provide you unmatched timely service, competitive price &
            quality assurance for the product supplied by us.
          </p>

          {location.pathname !== "/about" && (
            <Button onClick={handleRedirect}>About More</Button>
          )}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
