import { motion } from "framer-motion";
import images from "../../data/gallery.json";
import { useNavigate } from "react-router-dom";
import Header from "../commonComponents/Header";

const GalleryComponent = ({ isHomePage = false }) => {
  const displayedImages = isHomePage ? images.slice(0, 3) : images;
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 py-8 flex flex-col gap-4">
      <Header
        title="Gallery"
        subtitle="Our Workshop & Machines"
        //   emphasis="Now"
        color="#b80000"
      />

      <div className="grid gap-6 grid-cols-1 md:px-20 py-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayedImages.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg h-64"
          >
            {/* Image as background */}
            <img
              src={img.link}
              alt={img.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
            />

            {/* Animated overlay on hover */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-3 flex items-end"
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div>
                <h3 className="text-lg font-semibold">{img.title}</h3>
                <p className="text-sm">{img.description}</p>
              </div>
            </motion.div>
          </div>
        ))}

        {isHomePage && images.length > 3 && (
          <div
            onClick={() => navigate("/gallery")}
            className="flex items-center justify-center bg-gray-900 text-white rounded-lg h-64 cursor-pointer hover:bg-gray-800 transition"
          >
            <span className="text-lg font-medium">View More</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryComponent;
