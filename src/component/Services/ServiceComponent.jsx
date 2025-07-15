// import React from "react";
// import {
//   FaTools,
//   FaShower,
//   FaBolt,
//   FaHome,
//   FaPaintRoller,
//   FaRulerCombined,
// } from "react-icons/fa";
// import Header from "../commonComponents/Header";

// const services = [
//   {
//     title: "HVAC ",
//     description:
//       "Once you decide to proceed with a renovation project, offers a simple and convenient way to get in touch with us.",
//     icon: <FaTools />,
//   },
//   {
//     title: "VALVE ",
//     description:
//       "Our goal is not just to provide a quick fix but to address the underlying issue to prevent future problems.",
//     icon: <FaShower />,
//   },
//   {
//     title: "PACKING ",
//     description:
//       "They will discuss any available options, provide accurate cost estimates, and answer any questions you may have.",
//     icon: <FaBolt />,
//   },
//   {
//     title: "FABRICATION ",
//     description:
//       "They will listen to your concerns, conduct thorough inspections, and identify any areas that may require attention.",
//     icon: <FaHome />,
//   },
//   {
//     title: "SOLAR ",
//     description:
//       "They will listen to your concerns, conduct thorough inspections, and identify any areas that may require attention.",
//     icon: <FaPaintRoller />,
//   },
//   {
//     title: "ORGANIC FARMS",
//     description:
//       "We will provide you with a detailed explanation of the recommended wood or flooring services.",
//     icon: <FaRulerCombined />,
//   },
// ];

// const ServiceComponent = () => {
//   return (
//     <div className="w-full flex flex-col py-16 px-4 md:px-20  gap-4">
//       <Header
//         title="Our "
//         subtitle="We Offer"
//          emphasis="Services"
//         color="#b80000"
//       />
//       <div className="grid grid-cols-1 md:grid-cols-3 py-16 gap-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="rounded-lg shadow-md p-10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-orange_color group"
//           >
//             <div className="text-2xl mb-4 bg-white rounded-full w-16 h-16 flex items-center justify-center text-orange_color group-hover:text-orange transition-colors duration-300">
//               {service.icon}
//             </div>
//             <div className="">
//               <h3 className="text-3xl pb-4 font-semibold group-hover:text-white flex items-center">
//                 <span className="inline-block w-8 min-h-[2px] mr-4 bg-orange_color group-hover:bg-white transition duration-300"></span>
//                 {service.title}
//               </h3>
//             </div>
//             <p className="text-md text-gray-700 group-hover:text-white/90 transition-colors duration-300">
//               {service.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceComponent;
// components/FAQSection.jsx


import React, { useState } from 'react';
import {
  FaRegCalendarAlt,
  FaRegListAlt,
  FaRegTimesCircle,
  FaRegFileAlt,
  FaRegCreditCard,
  FaEnvelope,
  FaRegLifeRing,
  FaPlayCircle,
  FaPlus,
  FaMinus,
} from 'react-icons/fa';
import Header from "../commonComponents/Header";

const faqs = [
  {
    question: 'HVAC Services',
    answer: `1. AC Installation
2. HVAC Repair
3. Duct Routing
4. Basement Ventilation
5. VRV Systems
6. HVAC Maintenance, Service & AMC
7. Cold Storage Rooms
8. Turnkey Solutions`,
    icon: <FaRegCalendarAlt className="text-xl text-gray-600" />,
  },
  {
    question: 'Valve Types',
    answer: `1. Industrial Valve
2. Ball Valve
3. Gate Valve
4. Globe Valve
5. Butterfly Valve
6. Diaphragm Valve
7. Pressure Reducing Valve (PRV)
8. PTFE Lined Butterfly Valve
9. Check Valve`,
    icon: <FaRegListAlt className="text-xl text-gray-600" />,
  },
  {
    question: 'Pump Solutions',
    answer: `1. Heat Pump
2. Water Pump
3. Heat/Geyser Pump
4. PPRC`,
    icon: <FaRegTimesCircle className="text-xl text-gray-600" />,
  },
  {
    question: 'Packing Materials',
    answer: `1. Air Bubble Roll
2. Stretch Film
3. EPE Foam Roll
4. Angle Board
5. BOPP Tapes
6. Masking Tapes
7. Double Tapes
8. Floor Marking
9. HDPE Tapes`,
    icon: <FaRegFileAlt className="text-xl text-gray-600" />,
  },
  {
    question: 'Fabrication',
    answer: `1. SS Fabrication
2. MS Fabrication
3. Fabrication Work at Site
4. Piping in MS & SS
5. Piping in MS & SS at Site
6. Grating (Grill & Railing)
7. Dosing Systems
8. Vessels & Tanks`,
    icon: <FaRegCreditCard className="text-xl text-gray-600" />,
  },
  {
    question: 'Solar Systems',
    answer: `1. On-grid System
2. Hybrid System
3. Inverter System
4. Roof Top System`,
    icon: <FaEnvelope className="text-xl text-gray-600" />,
  },
  {
    question: 'Organic Farming',
    answer: `1. Ajara Ghansal Rice
2. Indrayani Rice
3. Jowar
4. Finger Millet / Ragi
5. Cashew Nut`,
    icon: <FaRegLifeRing className="text-xl text-gray-600" />,
  },
];

const ServiceComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
 <div className="w-full flex flex-col py-16 px-4 md:px-20 gap-4">
  <Header
    title="Our "
    subtitle="We Offer"
    emphasis="Services"
    color="#b80000"
  />

  {faqs.map((faq, index) => (
    <div
      key={index}
      className="border w-full border-gray-300 py-4 rounded-md px-4"
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full text-left flex justify-between items-start gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 min-w-[3.5rem] rounded-full bg-gray-100 flex items-center justify-center shadow-md">
            {faq.icon}
          </div>
          <span className="font-medium text-lg text-gray-900">
            {faq.question}
          </span>
        </div>
        <div className="pt-2 text-gray-600">
          {openIndex === index ? <FaMinus /> : <FaPlus />}
        </div>
      </button>

      {openIndex === index && (
        <ul className="pl-20 mt-2 text-md text-gray-700 list-disc list-inside space-y-1">
          {faq.answer.split('\n').map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  ))}
</div>

  );
};

export default ServiceComponent;
