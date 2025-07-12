import logo from "../asset/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c1b] text-white px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}

        <div className="flex justify-center flex-col">
          <img src={logo} className="w-16 h-16 mb-2" alt="" />

          <h2 className="text-2xl font-bold text-[#40afe0] mb-2">
            Yashoda Enterprises
          </h2>

          <p className="text-sm">
            Dealer in Heat Pumps, Industrial Valves, and expert in fabrication &
            machining of standard and non-standard components.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#40afe0]">
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
          <h3 className="text-lg font-semibold mb-4 text-[#40afe0]">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Heat Pump Installation</li>
            <li>Industrial Piping</li>
            <li>AC Installation</li>
            <li>SS & MS Piping</li>
            <li>HVAC Ducting</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#40afe0]">
            Contact Us
          </h3>
          <p className="text-sm mb-2">
            📍 Gat no. 162B, Tower line, Triveni Nagar, Talawade, Pune – 412109
          </p>
          <p className="text-sm mb-2">📞 07776816182</p>
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
