// import React from "react";
// import Header from "../commonComponents/Header";
// import { FaArrowRight } from "react-icons/fa";

// const services = [
//   {
//     title: "Custom fence design",
//     image: "/images/fence-design.jpg",
//   },
//   {
//     title: "Fence repair",
//     image: "/images/fence-repair.jpg",
//   },
//   {
//     title: "Fence installation",
//     image: "/images/fence-installation.jpg",
//   },
//   {
//     title: "Staining & sealing",
//     image: "/images/staining.jpg",
//   },
//   {
//     title: "Maintenance services",
//     image: "/images/maintenance.jpg",
//   },
// ];

// const ServiceComponent = () => {
//   return (
//     <div className="w-full flex flex-col py-16 px-4 md:px-20  gap-4">
//       <Header
//         title="Services"
//         subtitle="We Offer"
//         // emphasis="Touch"
//         color="#b80000"
//       />


//     <div className=" py-10 px-4">
//       <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
//         {services.map((service, idx) => (
//           <div
//             key={idx}
//             className="relative min-w-[220px] md:min-w-[240px] lg:min-w-[250px] h-[380px] rounded-3xl overflow-hidden shadow-md flex-shrink-0 group"
//           >
//             <img
//               src={service.image}
//               alt={service.title}
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
//             <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
//               {service.title}
//             </div>
//             {/* <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm p-2 rounded-full">
//               <FaArrowRight className="text-white text-sm" />
//             </div> */}
//           </div>
//         ))}
//       </div>
//     </div>










//     </div>
//   );
// };

// export default ServiceComponent;




import React from 'react';
import {
  FaTools,
  FaShower,
  FaBolt,
  FaHome,
  FaPaintRoller,
  FaRulerCombined,
} from 'react-icons/fa';
import Header from '../commonComponents/Header';

const services = [
  {
    title: 'Renovation Services',
    description:
      'Once you decide to proceed with a renovation project, offers a simple and convenient way to get in touch with us.',
    icon: <FaTools />,
  },
  {
    title: 'Plumbing Services',
    description:
      'Our goal is not just to provide a quick fix but to address the underlying issue to prevent future problems.',
    icon: <FaShower />,
  },
  {
    title: 'Electrical Services',
    description:
      'They will discuss any available options, provide accurate cost estimates, and answer any questions you may have.',
    icon: <FaBolt />,
  },
  {
    title: 'Home Maintenance',
    description:
      'They will listen to your concerns, conduct thorough inspections, and identify any areas that may require attention.',
    icon: <FaHome />,
  },
  {
    title: 'Painting and Drywall',
    description:
      'They will listen to your concerns, conduct thorough inspections, and identify any areas that may require attention.',
    icon: <FaPaintRoller />,
  },
  {
    title: 'Wood & Flooring',
    description:
      'We will provide you with a detailed explanation of the recommended wood or flooring services.',
    icon: <FaRulerCombined />,
  },
];

const ServiceComponent = () => {
  return (
 <div className="w-full flex flex-col py-16 px-4 md:px-20  gap-4">
       <Header
         title="Services"
         subtitle="We Offer"
          // emphasis="Touch"
         color="#b80000"
       />
      <div className="grid grid-cols-1 md:grid-cols-3 py-16 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md p-10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-orange-500 group"
          >
<div className="text-2xl mb-4 bg-white rounded-full w-16 h-16 flex items-center justify-center text-orange-500 group-hover:text-orange transition-colors duration-300">
              {service.icon}
            </div>
             <div className="">
            <h3 className="text-3xl pb-4 font-semibold group-hover:text-white flex items-center">
              <span className="inline-block w-8 min-h-[2px] mr-4 bg-orange-500 group-hover:bg-white transition duration-300"></span>
              {service.title}
            </h3>
          </div>
            <p className="text-md text-gray-700 group-hover:text-white/90 transition-colors duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComponent;
