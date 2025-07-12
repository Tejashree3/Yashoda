import React from "react";
import Header from "../commonComponents/Header";

const ServiceComponent = () => {
  return (
    <div className="w-full px-4 py-8 flex flex-col gap-4">
      <Header
        title="Services"
        subtitle="We Offer"
        // emphasis="Touch"
        color="#b80000"
      />
      <div className="px-4 md:px-20 py-16 ">Services</div>
    </div>
  );
};

export default ServiceComponent;
