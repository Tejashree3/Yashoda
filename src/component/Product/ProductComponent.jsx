import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../commonComponents/Header";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import products from "../../data/product";

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
  const [selectedProduct, setSelectedProduct] = useState(null);
useEffect(() => {
  if (selectedProduct) {
    document.body.style.overflow = "hidden"; 
  } else {
    document.body.style.overflow = "auto"; 
  }

  return () => {
    document.body.style.overflow = "auto"; 
  };
}, [selectedProduct]);
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
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 pb-8 scrollbar-hide"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((Product, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              className="relative snap-start min-w-[220px] md:min-w-[240px] lg:min-w-[250px] h-[380px] rounded-3xl overflow-hidden shadow-md flex-shrink-0 group transition-transform cursor-pointer"
              onClick={() => setSelectedProduct(Product)}
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

      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-4">
          <button
            className="absolute top-6 right-6 text-white text-2xl bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
            onClick={() => setSelectedProduct(null)}
          >
            <FaTimes />
          </button>
          <motion.img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="max-w-full max-h-[90vh] rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default ProductComponent;
