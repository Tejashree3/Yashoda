import React from "react";
import Header from "../commonComponents/Header";
import AboutUs from "../About";

const AboutComponent = () => {
  return (
    <div className="w-full px-4 py-8 flex flex-col gap-4">
      <AboutUs />{" "}
    </div>
  );
};

export default AboutComponent;
