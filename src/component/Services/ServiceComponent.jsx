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
    question: 'Is there a free trial available?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.',
    icon: <FaRegCalendarAlt className="text-xl text-gray-600" />,
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time from your account settings.',
    icon: <FaRegListAlt className="text-xl text-gray-600" />,
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'You can cancel your subscription at any time. Your plan will remain active until the end of your billing cycle.',
    icon: <FaRegTimesCircle className="text-xl text-gray-600" />,
  },
  {
    question: 'Can other info be added to an invoice?',
    answer:
      'Yes, you can add custom billing details to your invoices like company name, tax ID, and address.',
    icon: <FaRegFileAlt className="text-xl text-gray-600" />,
  },
  {
    question: 'How does billing work?',
    answer:
      'Billing is done monthly or annually depending on your plan. You’ll receive an invoice via email.',
    icon: <FaRegCreditCard className="text-xl text-gray-600" />,
  },
  {
    question: 'How do I change my account email?',
    answer:
      'Go to your account settings and update your email in the profile section.',
    icon: <FaEnvelope className="text-xl text-gray-600" />,
  },
  {
    question: 'How does support work?',
    answer:
      'We offer 24/7 email and chat support. You can also access our help center for guides and FAQs.',
    icon: <FaRegLifeRing className="text-xl text-gray-600" />,
  },
  {
    question: 'Do you provide tutorials?',
    answer:
      'Yes, we provide video tutorials, documentation, and webinars to help you get started.',
    icon: <FaPlayCircle className="text-xl text-gray-600" />,
  },
];

const ServiceComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
  <div className="w-full flex flex-col py-16 px-4 md:px-20  gap-4">
       <Header
         title="Our "
         subtitle="We Offer"
          emphasis="Services"
         color="#b80000"
       />
      {faqs.map((faq, index) => (
      <div key={index} className="relative border w-full border-gray-300 py-6 rounded-full px-4">
  {/* Absolute Icon */}
  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
    {faq.icon}
  </div>

  <button
    onClick={() => toggleFAQ(index)}
    className="pl-20 w-full text-left flex justify-between items-start gap-4"
  >
    <div className="flex items-start gap-3">
      <span className="font-medium text-lg text-gray-900">{faq.question}</span>
    </div>
    <div className="pt-1 text-gray-600">
      {openIndex === index ? <FaMinus /> : <FaPlus />}
    </div>
  </button>

  {openIndex === index && (
    <p className="pl-20 mt-2 text-md text-gray-700">{faq.answer}</p>
  )}
</div>


      ))}
    </div>
  );
};

export default ServiceComponent;
