import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaIndustry, FaLeaf, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

import banner1 from "../asset/background.png";
import banner2 from "../asset/background.png";
import banner3 from "../asset/background.png";
import CardSection from "./CardSection";
import Button from "./commonComponents/Button";

const banners = [banner1, banner2, banner3];

const HeroBanner = () => {
  return (
    <>
      {/* HERO BANNER */}
      <div className="relative h-[100vh]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={2000}
          pagination={{ clickable: true }}
          navigation={true}
          className="h-full"
        >
          {banners.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-cover bg-center h-[90vh] flex items-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="bg-black bg-opacity-50 w-full h-full flex items-center px-6 md:px-20">
                  <motion.div
                    className="max-w-xl text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    key={index}
                  >
                    <p className="text-sm text-[#40afe0] mb-2 font-semibold">
                      WE PROVIDE BEST SATISFIED WORK
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                      We turn vision <br />
                      <span className="text-blue-300">Factory</span> Solutions
                    </h1>
                    <p className="mt-4 text-sm">
                      Industrial Revolution, in modern history, the process of
                      change from an agrarian and handicraft economy to one
                      dominated by industry and machine manufacturing.
                    </p>
                    <Button>Learn More</Button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <CardSection />
      </div>

      {/* SPACER BELOW CARDS */}
      <div className="mt-32"></div>
    </>
  );
};

export default HeroBanner;
