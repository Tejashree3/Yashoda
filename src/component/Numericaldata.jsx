import React from "react";

const Numericaldata = () => {
  return (
    <div className="px-6 md:px-20 pt-8 bg-white text-center">
      <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto mb-10">
        We specialize in the supply, fabrication, installation, and
        manufacturing of equipment for the Pharma, Food, and Dairy industries,
        as well as precision engineering components, assemblies, tool room
        activities, and auto parts. With strict quality management and
        end-to-end control—from raw material to final delivery—we ensure
        superior quality, timely service, and competitive pricing.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h3 className="text-6xl font-bold text-black">10+</h3>
          <p className="text-md text-gray-600 mt-1">Man Power</p>
        </div>
        <div>
          <h3 className="text-6xl font-bold text-black">10+</h3>
          <p className="text-md text-gray-600 mt-1">Machines</p>
        </div>
        <div>
          <h3 className="text-6xl font-bold text-black">15+</h3>
          <p className="text-md text-gray-600 mt-1">Products</p>
        </div>
        <div>
          <h3 className="text-6xl font-bold text-black">15+</h3>
          <p className="text-md text-gray-600 mt-1">Services</p>
        </div>
      </div>
    </div>
  );
};

export default Numericaldata;
