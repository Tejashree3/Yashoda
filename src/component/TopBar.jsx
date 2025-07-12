import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="bg-[#0b0c1b] text-white text-sm flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <MdEmail />
          <span>yashodaenterprises55@gmail.com</span>
        </div>
        <div className="flex items-center gap-1">
          <MdLocationOn />
          <span>3567 Melbourn, EA 265, Australia</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <span>Turning big ideas into great products!</span>
        <div className="flex gap-3">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
