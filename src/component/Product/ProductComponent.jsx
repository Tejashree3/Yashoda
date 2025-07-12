import React from "react";
import Header from "../commonComponents/Header";

const ProductComponent = () => {
  return (
    <div className="w-full px-4 py-8 flex flex-col gap-4">
      <Header
        title="Our Products"
        // subtitle="With Us"
        // emphasis="Touch"
        color="#b80000"
      />
      <div className="px-4 md:px-20 py-16 ">Products</div>
    </div>
  );
};

export default ProductComponent;
