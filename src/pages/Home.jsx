import React from "react";
import TopBar from "../component/TopBar";
import HeroBanner from "../component/HeroBanner";
import CardSection from "../component/CardSection";
import AboutUs from "../component/About";
import Contactus from "../component/Contactus";
import VisionMissionValues from "../component/VisionMissionValues";
const Home = () => {
  return (
    <>
      <HeroBanner />
      {/* <CardSection/> */}
      <AboutUs />
      <VisionMissionValues />
      <Contactus />
    </>
  );
};

export default Home;
