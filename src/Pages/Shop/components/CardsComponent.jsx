import ProductsCard from "../../../components/common/ProductsCard";
import Products1 from '../../../assets/images/products1.webp';

const CardsComponent = () => {
    const productsData = [
        { id: 1, img: Products1, alt: "Products2", offer: "HOT", productTitle: "PREMIUM JOYFUL", price: "$18.00 " },
        { id: 2, img: Products1, alt: "Products1", offer: "10%", productTitle: "PINK FLOWER TREE", price: "$18.00 ", del: "$21.00" },
        { id: 3, img: Products1, alt: "Products4", offer: "HOT", productTitle: "RED ROSE BOUQUET", price: "$20.00" },
        { id: 4, img: Products1, alt: "Products1", offer: "10%", productTitle: "PINK FLOWER TREE", price: "$18.00 ", del: "$21.00" },
        { id: 5, img: Products1, alt: "Products4", offer: "HOT", productTitle: "RED ROSE BOUQUET", price: "$20.00" },
        { id: 6, img: Products1, alt: "Products1", offer: "10%", productTitle: "PINK FLOWER TREE", price: "$18.00 ", del: "$21.00" },
        { id: 7, img: Products1, alt: "Products2", offer: "HOT", productTitle: "PREMIUM JOYFUL", price: "$18.00 " },
        { id: 8, img: Products1, alt: "Products1", offer: "10%", productTitle: "PINK FLOWER TREE", price: "$18.00 ", del: "$21.00" },
        { id: 9, img: Products1, alt: "Products4", offer: "HOT", productTitle: "RED ROSE BOUQUET", price: "$20.00" },
    ]
    return (
        <>

            <div className=' flex ProductsShopContainer items-center justify-center min-h-[20vh]'>
                <div className='flex flex-wrap items-center justify-evenly gap-[30px]'>
                    {productsData.map((products) =>
                        <ProductsCard key={products.id} img={products.img} alt={products.alt} offer={products.offer} productTitle={products.productTitle} price={products.price} del={products.del} DaysTimerNumber={products.DaysTimerNumber} DaysTimer={products.DaysTimer} HrsTimerNumber={products.HrsTimerNumber} HrsTimer={products.HrsTimer} MinsTimerNumber={products.MinsTimerNumber} MinsTimer={products.MinsTimer} SecsTimerNumber={products.SecsTimerNumber} SecsTimer={products.SecsTimer} offerClassName="absolute offer-bg left-0 top-[20px] bg-[#E55472] !font-bold pt-[1px] pb-[1px] pr-[15px] pl-[15px] text-[13px] text-[#fff] rounded-[0 3px 3px 0] " />
                    )}
                </div>
            </div>
        </>
    )
}

export default CardsComponent
