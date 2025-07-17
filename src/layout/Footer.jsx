import logo from "../asset/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c1b] text-white px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}

        <div className="flex justify-center flex-col">
          <img src={logo} className="w-28  mb-2" alt="" />

          <h2 className="text-2xl font-bold text-ortange_color mb-2">
            Yashoda Enterprises
          </h2>

          <p className="text-sm">
            Dealer in Heat Pumps, Industrial Valves, and expert in fabrication &
            machining of standard and non-standard components.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange_color">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#40afe0">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#40afe0">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#40afe0">
                Services
              </a>
            </li>
            <li>
              <a href="/product" className="hover:text-[#40afe0">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#40afe0">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange_color">
            Our Services
          </h3>
          <ul>
            <li>
              <a href="/services" className="hover:text-[#40afe0]">
                HVAC Services
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#40afe0]">
                Valve Types
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#40afe0]">
                Pump Solutions
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#40afe0]">
                Packing Materials
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#40afe0]">
                Fabrication
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#40afe0]">
                Solar Systems
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#40afe0]">
                Organic Farming
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange_color">
            Contact Us
          </h3>
          <p className="text-sm mb-2">
            📍 Gat no. 1542, Jyotiba nagar Road, Sonawane Wasti Chikhali, Pune - 412114
          </p>
          <p className="text-sm mb-2">📞 08485847595</p>
          <p className="text-sm">✉ yashodaenterprises55@gmail.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Yashoda Enterprises. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
