import React from "react";
import image1 from "../asset/about.png"; // top city image
import image2 from "../asset/about.png"; // bottom worker image
import Button from "./commonComponents/Button";
import Header from "./commonComponents/Header";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#fff] py-16 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side - Images */}
      <div className="relative w-full md:w-1/2">
        <img
          src={image1}
          alt="City"
          className="w-full h-[100vh] object-cover rounded-md shadow-md"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 px-6 text-left">
        <Header
          title="Welcome"
          subtitle="to our website"
          emphasis="Now"
          color="#b80000"
        />
        <p className="text-sm uppercase text-[#1d1d4f] tracking-widest mb-8">
          ● Welcome to Industrify
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d4f] leading-tight mb-12">
          Great Experience <br />
          <span className="block mt-4">for Industrial Solutions</span>
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          <span className="inline-block w-3 h-3 bg-[#40afe0] mr-2 align-middle"></span>
          Industrify is a leading international infrastructure group. They
          finance, develop, build and maintain innovative and efficient
          infrastructure that underpins daily life.
        </p>
        <p className="text-gray-600 text-lg">
          It provides infrastructure consultancy, facilities management,
          property management, energy and healthcare services. The key sectors
          served include education, health and defence.
        </p>

        <Button>About More</Button>
      </div>
    </section>
  );
};

export default AboutUs;
