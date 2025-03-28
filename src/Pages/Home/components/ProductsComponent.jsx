import Products1 from '../../../assets/images/products1.webp';
import Products2 from '../../../assets/images/products2.webp';
import { Link } from 'react-router-dom';
import ProductsCard from '../components/ProductsCard';

const productsData = [
  { id: 1, img: Products1, alt: "Products1", offer: "10%", productTitle: "PINK FLOWER TREE", price: "$18.00 ", del: "$21.00" },
  { id: 2, img: Products1, alt: "Products2", offer: "HOT", productTitle: "PREMIUM JOYFUL", price: "$18.00 " },
  { id: 3, img: Products1, alt: "Products3", offer: "12%", productTitle: "THE WHITE ROSE", price: "$16.00", del: "$19.00" },
  { id: 4, img: Products1, alt: "Products4", offer: "HOT", productTitle: "RED ROSE BOUQUET", price: "$20.00" },
  { id: 5, img: Products1, alt: "Products5", offer: "HOT", productTitle: "HEART'S DESIRE", price: "$15.00" },
  { id: 6, img: Products1, alt: "Products6", offer: "15%", productTitle: "ASSORTED ROSES", price: "$17.00", DaysTimerNumber: "00", DaysTimer: "DAYS", HrsTimerNumber: "00", HrsTimer: "HRS", MinsTimerNumber: "00", MinsTimer: "MINS", SecsTimerNumber: "00", SecsTimer: "SECS" },
  { id: 7, img: Products1, alt: "Products7", offer: "HOT", productTitle: "ROSES SURPRISE", price: "$12.00" },
  { id: 8, img: Products1, alt: "Products8", offer: "12%", productTitle: "TROPICAL PEACE LILY", price: "$14.00", del: "$25.00" },
]

const ProductsComponent = () => {
  return (
    <>
      <div className='ProductsContainer w-[100%] min-h-[20vh] flex items-center justify-center gap-[40px] flex-col'>
        <div className='w-[100%] flex items-center justify-center flex-col gap-[40px]'>
          <div className='flex items-center justify-center flex-col gap-[20px]'>
            <h1 className='text-[#010101] text-[40px] !font-extrabold'>new arrival items</h1>
            <div className='w-[90px] h-[2px] bg-[#E55472]'></div>
          </div>
          <div className='flex items-center justify-center w-full min-h-[20vh] pr-[50px] pl-[50px]'>
            <div className='flex flex-wrap items-center justify-evenly gap-[60px]'>
              {productsData.map((products) =>
                <ProductsCard key={products.id} img={products.img} alt={products.alt} offer={products.offer} productTitle={products.productTitle} price={products.price} del={products.del} DaysTimerNumber={products.DaysTimerNumber} DaysTimer={products.DaysTimer} HrsTimerNumber={products.HrsTimerNumber} HrsTimer={products.HrsTimer} MinsTimerNumber={products.MinsTimerNumber} MinsTimer={products.MinsTimer} SecsTimerNumber={products.SecsTimerNumber} SecsTimer={products.SecsTimer} offerClassName="absolute offer-bg left-0 top-[20px] bg-[#E55472] !font-bold pt-[1px] pb-[1px] pr-[15px] pl-[15px] text-[13px] text-[#fff] rounded-[0 3px 3px 0] " />
              )}
            </div>
          </div>
        </div>
        <div className='flex items-center w-[100%] justify-center gap-[20px] pr-[20px] flex-wrap pt-[40px] pb-[60px]'>
          <div className='w-[590px]'><Link><img src={Products2} className='w-full product2' alt="product" /></Link></div>
          <div className='w-[590px]'><Link><img src={Products2} className='w-full product2' alt="product" /></Link></div>
        </div>
      </div>
    </>
  )
}

export default ProductsComponent
