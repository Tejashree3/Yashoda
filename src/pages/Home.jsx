import React from "react";
import Navbar from "../component/Navbar";
import TopBar from "../component/TopBar";
import HeroBanner from "../component/HeroBanner";
import CardSection from "../component/CardSection";
import Footer from "../component/Footer";
import AboutUs from "../component/About";
import Contactus from "../component/Contactus";
import VisionMissionValues from "../component/VisionMissionValues";
const Home = () => {
  return (
    <>
      {/* <TopBar/> */}
      <Navbar />
      <HeroBanner />
      {/* <CardSection/> */}
      <AboutUs />
      <VisionMissionValues />
      <Contactus />
      <Footer />
    </>
  );
};

export default Home;
