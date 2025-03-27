import { Link } from 'react-router-dom';

const PagesNav = () => {
  return (
    <div className=" border-t-2 border-[#E55472] z-9999 relative mt-[20px] bg-white shadow-lg p-4 pl-[30px] transition-all duration-300">

      <div className=" pagesNav flex flex-wrap overflow-y-scroll h-[300px] justify-between gap-[60px] xl:flex-nowrap lg:flex-wrap ">

        <div className="flex-1 min-h-[200px] min-w-[200px]">
          <span className="block mb-2 text-lg font-semibold text-[#666] text-[14px] hover:text-[#E55472] bg-[#f7f7f7] p-[5px]">
            Inner Pages
          </span>
          <ul className="space-y-2">
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px]  transition-colors">
                About Us
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                Portfolio
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                Portfolio - 02
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                Portfolio Details
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                FAQ
              </li>
            </Link>
          </ul>
        </div>
      




        <div className="flex-1 min-h-[200px] min-w-[200px]">
          <span className="block mb-2 text-lg font-semibold text-[#666] text-[14px]  hover:text-[#E55472] bg-[#f7f7f7] p-[5px]">
            Inner Pages
          </span>
          <ul className="space-y-2">
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
              Google Map Locations
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
              404
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
              Contact
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
              Coming Soon
              </li>
            </Link>
           
          </ul>
        </div>

        <div className="flex-1 min-h-[200px] min-w-[200px]">
          <span className="block mb-2 text-lg font-semibold text-[#666] text-[14px]  hover:text-[#E55472] bg-[#f7f7f7] p-[5px]">
            Shop Pages
          </span>
          <ul className="space-y-2">
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                Shop
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                Shop Grid
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                Shop Left Sidebar
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                Shop Right Sidebar
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                Shop Details
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex-1 min-h-[200px] min-w-[200px]" >
          <span className="block mb-2 text-lg font-semibold text-[#666] text-[14px]  hover:text-[#E55472] bg-[#f7f7f7] p-[5px]">
            Blog Pages
          </span>
          <ul className="space-y-2">
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                News
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                News Grid
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                News Left Sidebar
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                News Right Sidebar
              </li>
            </Link>
            <Link to="/">
              <li className="text-[#666] hover:text-[#E55472] text-[14px] transition-colors">
                News Details
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PagesNav;
