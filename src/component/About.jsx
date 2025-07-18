import React from "react";
import image1 from "../asset/about2.jpg"; // top city image
import image2 from "../asset/about2.jpg"; // bottom worker image
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
            <strong>"Yashoda Group"</strong> is a dynamic and diversified
            enterprise specializing in integrated supply chain solutions,
            import-export services, and a broad range of industrial solutions
            and organic products. With a strong communication to quality and
            innovation, we bring together a wide spectrum of offerings under one
            roof through our flagship company,
            <strong>*Yashoda Enterprises*</strong>
          </p>
          <p className="text-sm uppercase text-[#1d1d4f] tracking-widest mb-8">
            ● Our portfolio includes -
          </p>
          <ul className="pl-6 mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>
              Advanced <strong>Water Heat Pump</strong>
            </li>
            <li>
              <strong>HVAC Solutions</strong>
            </li>
            <li>
              <strong>Standard and Non-Standard Fabrication</strong>
            </li>
            <li>
              <strong>Industrial Valves</strong>
            </li>
            <li>
              <strong>Solar Energy Solutions</strong> for improved efficiency
            </li>
            <li>
              A dedicated vertical for <strong>Organic Farming</strong> and
              natural products
            </li>
          </ul>
          <p className="text-gray-600 text-lg">
            At Yashoda Group, our core objective is simple: to deliver reliable,
            high-quality products at competitive prices-offering great value our
            customers trust and appreciate. Whether you're seeking cutting-edge
            industrial solutions or sustainable organic alternatives, we are your
            dependable partner in progress.
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
