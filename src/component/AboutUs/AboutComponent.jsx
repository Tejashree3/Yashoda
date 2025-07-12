import React from "react";
import Header from "../commonComponents/Header";

const AboutComponent = () => {
  return (
    <div className="w-full px-4 py-8 flex flex-col gap-4">
      <Header
        title="Know"
        // subtitle="We Offer"
        emphasis="Us"
        color="#b80000"
      />
      <div className="px-4 md:px-20 py-16 ">About</div>
    </div>
  );
};

export default AboutComponent;
