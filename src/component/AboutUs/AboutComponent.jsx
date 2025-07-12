import React from "react";
import Header from "../commonComponents/Header";
import AboutUs from "../About";

const AboutComponent = () => {
  return (
    <div className="w-full px-4 py-8 flex flex-col gap-4">
      <Header
        title="Know"
        // subtitle="We Offer"
        emphasis="Us"
        color="#b80000"
      />
<AboutUs/>    </div>
  );
};

export default AboutComponent;
