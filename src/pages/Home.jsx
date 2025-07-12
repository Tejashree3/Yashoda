import React from "react";
import TopBar from "../component/TopBar";
import HeroBanner from "../component/HeroBanner";
import CardSection from "../component/CardSection";
import AboutUs from "../component/About";
import Contactus from "../component/Contactus";
import VisionMissionValues from "../component/VisionMissionValues";
import GalleryComponent from "../component/Gallery/GalleryComponent";
import Numericaldata from "../component/Numericaldata";
const Home = () => {
  return (
    <>
      <HeroBanner />
      {/* <CardSection/> */}
      <AboutUs />
      <Numericaldata/>
      <VisionMissionValues />
      <GalleryComponent isHomePage={true} />
      {/* <Contactus /> */}
    </>
  );
};

export default Home;
