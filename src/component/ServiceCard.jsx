const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="relative group overflow-hidden shadow-xl p-6 bg-white text-[#1C1C51] hover:text-white transition-all duration-500">
      {/* Expanding orange background from bottom-right */}
      <div className="absolute bottom-4 right-4 w-4 h-4 bg-orange_color z-0  group-hover:w-full group-hover:h-full group-hover:bottom-0 group-hover:right-0 transition-all duration-500 ease-in-out origin-bottom-right"></div>

      {/* Content */}
      <div className="relative px-6 py-4 z-10">
        <div className="flex items-start flex-col mb-4">
          <div className="text-orange_color pb-4 text-3xl mr-3 group-hover:text-white transition duration-300">
            {icon}
          </div>
          <div className="">
            <h3 className="text-2xl pb-4 font-semibold flex items-center">
              <span className="inline-block w-8 min-h-[2px] mr-4 bg-orange_color group-hover:bg-white  transition duration-300"></span>
              {title}
            </h3>
          </div>
          <div className="">
            <p className="text-md text-gray-600 font-semibold group-hover:text-white transition duration-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
