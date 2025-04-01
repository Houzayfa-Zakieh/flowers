import GoBackToLastPage from "../../components/common/GoBackToLastPage";

import { useEffect } from "react";
import SwiperComponent from "./components/SwiperComponent";
import ProductsInfo from "./components/ProductsInfo";
import RelatedProducts from "./components/RelatedProducts";

const Products = () => {
  useEffect(() => {
    document.title = "Fiama - Flower Shop eCommerce HTML Template";
  });
  return (
    <>
      <GoBackToLastPage pageName="Products" pageTitle="Products" />
      <div className="container mx-auto py-[50px] gap-[20px] w-[100%] flex items-start justify-center">
        <div className="w-[50%]">
          <SwiperComponent />
        </div>
        <div className="w-[50%]">
          <ProductsInfo />
        </div>
      </div>
      <RelatedProducts />


    </>
  );
};

export default Products;
