import GoBackToLastPage from "../../components/common/GoBackToLastPage";

import { useEffect } from "react";
import SwiperComponent from "./components/SwiperComponent";
import ProductsInfo from "./components/ProductsInfo";
import RelatedProducts from "./components/RelatedProducts";
import ChangingDev from "./components/ChangingDev";

const Products = () => {
  useEffect(() => {
    document.title = "Fiama - Flower Shop eCommerce HTML Template";
  });
  return (
    <>
      <GoBackToLastPage pageName="Products" pageTitle="Products" />
      <div className="container mx-auto py-[50px] gap-[20px] w-[100%] flex-wrap lg:flex-nowrap flex items-center lg:items-start justify-center">
        <SwiperComponent />
        <ProductsInfo />
      </div>
      <div className="container mx-auto py-[50px]">
        <ChangingDev />
      </div>
      <RelatedProducts />


    </>
  );
};

export default Products;
