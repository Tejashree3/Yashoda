import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Header from "./commonComponents/Header";

const Contactus = () => {
  return (
    <div className="w-full px-4 py-8 flex flex-col gap-4">
      <Header
        title="Get In"
        subtitle="With Us"
        emphasis="Touch"
        color="#b80000"
      />
      <div className="px-4 md:px-20 py-16 ">
        {/* Top Section: Map and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Google Map Embed */}
          <div className="w-full h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.5232394156313!2d91.82921157593192!3d22.368358679630915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd891a9252b4f%3A0x78e95a3bb51247d9!2sDewanhat%20Overbridge!5e0!3m2!1sen!2sbd!4v1620568780800!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-md border"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0c0c3c] text-white px-14 py-14 rounded-md shadow-md">
            <h2 className="text-3xl md:text-4xl font-semibold mb-14">
              Lets talk…
            </h2>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
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
                    placeholder="Your Full Name"
                    className="w-full px-4 py-2 text-black rounded outline-none"
                  />
                </div>
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
                    placeholder="E-mail Address"
                    className="w-full px-4 py-2 text-black rounded outline-none"
                  />
                </div>
              </div>

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
                  placeholder="Website"
                  className="w-full px-4 py-2 text-black rounded outline-none"
                />
              </div>

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
                  placeholder="Write Here"
                  className="w-full px-4 py-2 text-black rounded outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#40afe0] px-6 py-3 text-white font-semibold rounded hover:bg-[#e13e1d] transition"
              >
                SEND NOW
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-16 gap-14">
          {/* Address */}
          <div className="flex flex-col rounded-md p-6 shadow-lg items-center group">
            <div className="bg-[#0c0c3c] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#40afe0]">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <p className="text-sm">3567 Melbourn, EA 265, Australia</p>
          </div>

          {/* Email */}
          <div className="flex flex-col p-6 rounded-md shadow-lg items-center group">
            <div className="bg-[#0c0c3c] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#40afe0]">
              <FaEnvelope className="text-xl" />
            </div>
            <p className="text-sm mb-2">info@industrify.com</p>
            <p className="text-sm">admin@industrify.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col p-6 rounded-md shadow-lg items-center group">
            <div className="bg-[#0c0c3c] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#40afe0]">
              <FaPhoneAlt className="text-xl" />
            </div>
            <p className="text-sm">+18-4875828</p>
            <p className="text-sm">+18-4675834</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
