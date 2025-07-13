import React from "react";
import AboutComponent from "../component/AboutUs/AboutComponent";
import WhyChooseUs from "../component/WhyChooseUs";
import Numericaldata from "../component/Numericaldata";
import Header from "../component/commonComponents/Header";

const About = () => {
  return (
    <>
     <div className="pt-20">
        <Header
          title="Know"
          // subtitle="We Offer"
          emphasis="Us"
          color="#b80000"
        />
      </div>
      <AboutComponent />
      <div className="mb-16">

      <Numericaldata />
      </div>
    </>
  );
};

export default About;
