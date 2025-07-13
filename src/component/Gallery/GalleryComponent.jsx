import { motion } from "framer-motion";
import images from "../../data/gallery"; // No .json since it's now a JS file
import { useNavigate } from "react-router-dom";
import Header from "../commonComponents/Header";
import Button from "../commonComponents/Button";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const GalleryComponent = ({ isHomePage = false }) => {
  const displayedImages = isHomePage ? images.slice(0, 4) : images;
  const navigate = useNavigate();

  return (
    <motion.div
      className="w-full flex flex-col py-16 px-4 md:px-20 gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header
          title="Our"
          subtitle="Our Workshop & Machines"
          color="#b80000"
          emphasis="Gallery"
        />
      </motion.div>

      {/* Image Grid with staggered animation */}
      <motion.div
        className="grid gap-6 grid-cols-1 pt-16 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {displayedImages.map((img, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative group overflow-hidden rounded-lg shadow-xl h-72"
          >
            <img
              src={img.link}
              alt={img.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
            />

            {/* Hover overlay remains motion.div */}
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
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      {isHomePage && images.length > 3 && (
        <motion.div
          className="flex justify-center items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button onClick={() => navigate("/gallery")}>View more</Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GalleryComponent;
