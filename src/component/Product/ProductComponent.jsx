import Header from "../commonComponents/Header";

import { FaArrowRight } from "react-icons/fa";

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

const ProductComponent = () => {
  return (
    <div className="w-full flex flex-col py-16 px-4 md:px-20  gap-4">
      <Header
        title="Our"
        // subtitle=""
        emphasis="Products"
        color="#b80000"
      />

      <div className=" py-10 px-4">
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {Products.map((Product, idx) => (
            <div
              key={idx}
              className="relative min-w-[220px] md:min-w-[240px] lg:min-w-[250px] h-[380px] rounded-3xl overflow-hidden shadow-md flex-shrink-0 group"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
