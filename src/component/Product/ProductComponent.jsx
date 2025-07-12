import { motion } from "framer-motion";
import Header from "../commonComponents/Header";
import { FaArrowRight } from "react-icons/fa";

// Product list
const Products = [
  {
    title: "Custom fence design",
    image: "/images/fence-design.jpg",
  },
  {
    title: "Fence repair",
    image: "/images/fence-repair.jpg",
  },
  {
    title: "Fence installation",
    image: "/images/fence-installation.jpg",
  },
  {
    title: "Staining & sealing",
    image: "/images/staining.jpg",
  },
  {
    title: "Maintenance Products",
    image: "/images/maintenance.jpg",
  },
  {
    title: "Maintenance Products",
    image: "/images/maintenance.jpg",
  },
  {
    title: "Fence installation",
    image: "/images/fence-installation.jpg",
  },
  {
    title: "Staining & sealing",
    image: "/images/staining.jpg",
  },
  {
    title: "Maintenance Products",
    image: "/images/maintenance.jpg",
  },
];

// Framer Motion Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProductComponent = () => {
  return (
    <motion.div
      className="w-full flex flex-col py-16 px-4 md:px-20 gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Header title="Our" emphasis="Products" color="#b80000" />

      <div className="py-10 px-2 md:px-4">
        <motion.div
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 scrollbar-hide"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Products.map((Product, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              className="relative snap-start min-w-[220px] md:min-w-[240px] lg:min-w-[250px] h-[380px] rounded-3xl overflow-hidden shadow-md flex-shrink-0 group transition-transform"
            >
              <img
                src={Product.image}
                alt={Product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {Product.title}
              </div>
              <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm p-2 rounded-full">
                <FaArrowRight className="text-white text-sm" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductComponent;
