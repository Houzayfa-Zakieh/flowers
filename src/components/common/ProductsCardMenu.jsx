import ProductCardMenuShape from "./ProductCardMenuShape";
import Products1 from '../../assets/images/products1.webp';
const ProductsCardMenu = () => {
    const productsData = [
        { id: 1, img: Products1, alt: "Products1", offer: "HOT", productTitle: "RED ROSE BOUQUET", price: "$16.00 ", paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid, deleniti non et ut dolorem!" },
        { id: 2, img: Products1, alt: "Products2", offer: "12%", productTitle: "RED ROSE BOUQUET", price: "$16.00 ", del: "$19.00", paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid, deleniti non et ut dolorem!" },
        { id: 3, img: Products1, alt: "Products3", offer: "HOT", productTitle: "RED ROSE BOUQUET", price: "$16.00", paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid, deleniti non et ut dolorem!" },
    ]
    return (
        <>
            <div className=' flex ProductsShopContainer items-center justify-center min-h-[20vh]'>
                <div className='flex flex-wrap flex-col items-center justify-evenly gap-[30px]'>
                    {productsData.map((products) =>
                        <ProductCardMenuShape key={products.id} img={products.img} alt={products.alt} offer={products.offer} productTitle={products.productTitle} price={products.price} del={products.del} DaysTimerNumber={products.DaysTimerNumber} DaysTimer={products.DaysTimer} HrsTimerNumber={products.HrsTimerNumber} HrsTimer={products.HrsTimer} MinsTimerNumber={products.MinsTimerNumber} MinsTimer={products.MinsTimer} SecsTimerNumber={products.SecsTimerNumber} SecsTimer={products.SecsTimer} paragraph={products.paragraph} offerClassName="absolute offer-bg left-0 top-[20px] bg-[#E55472] !font-bold pt-[1px] pb-[1px] pr-[15px] pl-[15px] text-[13px] text-[#fff] rounded-[0 3px 3px 0] " />
                    )}
                </div>
            </div>
        </>
    )
}

export default ProductsCardMenu
