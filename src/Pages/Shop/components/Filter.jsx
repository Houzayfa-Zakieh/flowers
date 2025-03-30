import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Range from "./Range";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <>

      <div className="flex items-start justify-start gap-[20px] flex-col md:w-[280px] mb-[100px]">
        <form method='get' className='relative pb-[20px]'>
          <Input className='pt-[1px] pl-[20px] pr-[65px] outline-[#E55472] text-[14px] h-[45px] border-1 border-solid border-[#f0f0f0]' placeholder="Search your keyword..." />
          <Button className="px-[20px] absolute right-0 top-[10px] cursor-pointer" type="submit" title={<FontAwesomeIcon className='hover:text-[#E55472] text-[#666] text-[16px]' icon={faMagnifyingGlass} />} />
        </form>
        <div className="border-b border-[#ececec] w-[100%] pb-[5px]">
          <h4 className="text-[#010101] text-[18px]">Price</h4>
        </div>
        <Range />
        <div className="border-b border-[#ececec] w-[100%] pb-[5px]">
          <h4 className="text-[#010101] text-[18px]">Categories</h4>
        </div>
        <div className="text-[#666] text-[16px] flex items-start justify-start flex-col gap-[15px]">
          {["Clothing", "Bags", "Shoes", "Jewelry", "Accessories", "Food / Drink Store", "Gift Store", "Accessories", "Watch", "Un categorized", "Other"].map((links, index) =>
            <Link to="#" key={index} className="hover:text-[#e55472] !font-thin">{links}</Link>
          )}
        </div>
        <div className="flex flex-col gap-[20px] pb-[5px] ">
          <div className="border-b border-[#ececec] w-[100%] pb-[5px]">
            <h4 className="text-[#010101] text-[18px]">Color</h4>
          </div>
          <div className="flex gap-2">
            {["#e55472", "#9ac45c", "#6d5cc4", "#fff", "#f00", "#ff0"].map((color, index) => (
              <Link key={index} to="/" className="w-8 h-8 border border-[#666] hover:border-[#E55472] rounded-full" style={{ backgroundColor: color }}></Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[20px] pb-[5px]">
          <div className="border-b border-[#ececec] w-[100%] pb-[5px]">
            <h4 className="text-[#010101] text-[18px]">Size</h4>
          </div>
          <div className="flex gap-[20px]">
            {["S", "M", "L", "XL", "XXL"].map((size, index) => (
              <Link key={index} to="/" className="hover:text-[#e55472] !font-thin text-base text-[#666]">
                {size}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-b border-[#ececec] w-[100%] pb-[5px]">
          <h4 className="text-[#010101] text-[18px]">Tags</h4>
        </div>
        <div className="text-[#666] text-[16px] !w-[100%] flex flex-wrap gap-[10px]">
          {["Popular", "/ Design /", "/ Ux /", "Usability /", "Develop /", "Icon /", "Car /", "Service /", "Repairs /", "Auto Parts /", "Oil /", "Dealer /", "Oil Change /", "Body Color /"].map((tags, index) =>
            <Link to="#" key={index} className="hover:text-[#e55472] !font-thin">{tags}</Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Filter
