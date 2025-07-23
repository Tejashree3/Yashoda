import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Header from "./commonComponents/Header";
import emailjs from "@emailjs/browser";

// Toaster Component with Animation
const Toaster = ({ message, onClose }) => (
  <AnimatePresence>
    {message && (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-6 right-6 bg-[#0c0c3c] text-white px-6 py-3 rounded shadow-lg z-50"
      >
        <div className="flex justify-between items-center">
          <span>{message}</span>
          <button className="ml-4 text-white text-xl" onClick={onClose}>
            ×
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Contactus = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showToaster, setShowToaster] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      emailjs
        .send(
          "service_xlfyutf",
          "template_hrpvcbs",
          formData,
          "WjLGYt8TbwYjRGAIh"
        )
        .then(() => {
          setFormData({ fullName: "", email: "", subject: "", message: "" });
          setErrors({});
          setShowToaster(true);
          setTimeout(() => setShowToaster(false), 4000);
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          // Optional: You can show an error toaster here
        });
    }
  };

  return (
    <div className="w-full px-4 pb-8 pt-16 flex flex-col gap-4 relative">
      <Toaster
        message={showToaster ? "Email Received Successfully." : ""}
        onClose={() => setShowToaster(false)}
      />

      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header
          title="Get In"
          subtitle="With Us"
          emphasis="Touch"
          color="#b80000"
        />
      </motion.div>

      <div className="px-4 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            className="w-full h-[600px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3778.9361714415386!2d73.83897777519631!3d18.711675582419293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQyJzQyLjAiTiA3M8KwNTAnMjkuNiJF!5e0!3m2!1sen!2sin!4v1753193032670!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"             
              height="100%"
              width="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-md border"
            ></iframe>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-[#0c0c3c] text-white px-14 py-12 rounded-md shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-14">
              Let’s talk…
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                {/* Name */}
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="fullName"
                  >
                    Your Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className={`w-full px-4 py-2 text-black rounded outline-none ${
                      errors.fullName ? "border border-red-500" : ""
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail Address"
                    className={`w-full px-4 py-2 text-black rounded outline-none ${
                      errors.email ? "border border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="subject"
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full px-4 py-2 text-black rounded outline-none ${
                    errors.subject ? "border border-red-500" : ""
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Here"
                  className={`w-full px-4 py-2 text-black rounded outline-none ${
                    errors.message ? "border border-red-500" : ""
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-orange_color px-6 py-3 text-white font-semibold rounded hover:bg-[#e13e1d] transition"
              >
                SEND NOW
              </button>
            </form>
          </motion.div>
        </div>

        {/* Info Cards Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 text-center mt-16 gap-14"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              icon: <FaMapMarkerAlt className="text-xl" />,
              text: "Gat no. 1542, Jyotiba nagar Road, Sonawane Wasti Chikhali, Pune - 412114",
            },
            {
              icon: <FaEnvelope className="text-xl" />,
              link: "mailto:yashodaenterprises55@gmail.com",
              text: "yashodaenterprises55@gmail.com",
            },
            {
              icon: <FaPhoneAlt className="text-xl" />,
              link: "tel:+918485847595",
              text: "+91 8485847595",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-6 rounded-md shadow-lg items-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <a
                href={card.link || "#"}
                className="bg-[#0c0c3c] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-orange_color"
              >
                {card.icon}
              </a>
              {card.link ? (
                <a href={card.link} className="text-sm hover:underline">
                  {card.text}
                </a>
              ) : (
                <p className="text-sm">{card.text}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contactus;
