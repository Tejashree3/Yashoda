import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaIndustry, FaLeaf, FaTools } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const CardSection = () => {
  return (
    <>
      <div className="absolute z-10 left-1/2 -bottom-20 transform -translate-x-1/2 w-full px-6 md:px-20">
        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <ServiceCard
                icon={<FaIndustry size={30} />}
                title="Industrial Solution"
                description="Industry is main lorem ipsum dolor amet, consectetur adipiscing elit."
                isActive={false}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard
                icon={<FaLeaf size={30} />}
                title="Eco Development"
                description="Industry is main lorem ipsum dolor amet, consectetur adipiscing elit."
                isActive={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard
                icon={<FaTools size={30} />}
                title="Modern Technology"
                description="Industry is main lorem ipsum dolor amet, consectetur adipiscing elit."
                isActive={false}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<FaIndustry size={50} />}
            title="Industrial Solution"
            description="Industry is main lorem ipsum dolor amet, consectetur adipiscing elit."
            isActive={false}
          />
          <ServiceCard
            icon={<FaLeaf size={50} />}
            title="Eco Development"
            description="Industry is main lorem ipsum dolor amet, consectetur adipiscing elit."
            isActive={true}
          />
          <ServiceCard
            icon={<FaTools size={50} />}
            title="Modern Technology"
            description="Industry is main lorem ipsum dolor amet, consectetur adipiscing elit."
            isActive={false}
          />
        </div>
      </div>
    </>
  );
};

export default CardSection;
