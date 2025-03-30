import HomeNav from './HomeNav';
import PagesNav from './PagesNav';
import ShopNav from './ShopNav';
import PortfolioNav from './PortfolioNav';
import NewsNav from './NewsNav';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const BottomHeader = () => {

  const [showHomeMenu, setShowHomeMenu] = useState(false);
  const [showPageMenu, setShowPageMenu] = useState(false);
  const [showShopMenu, setShowShopMenu] = useState(false);
  const [showPortfolioMenu, setShowPortfolioMenu] = useState(false);
  const [showNewsMenu, setShowNewsMenu] = useState(false);

  return (
    <>

      <div className="bottomHeader bg-white border-solid border-t border-[#f0f0f0] flex items-center justify-center">
        <nav className="space-x-6 hidden md:flex pr-[20px] pl-[20px] relative flex items-center justify-around">
          <div className="relative" onMouseEnter={() => setShowHomeMenu(true)} onMouseLeave={() => setShowHomeMenu(false)}>
            <Link to="#" className="text-[#666] !font-thin">HOME</Link>
            {showHomeMenu && <HomeNav />}
          </div>

          <div className="relative" onMouseEnter={() => setShowPageMenu(true)} onMouseLeave={() => setShowPageMenu(false)} >
            <Link to="#" className="text-[#666] hover:text-[#E55472] !font-thin transition-colors">
              PAGES
            </Link>
            {showPageMenu && (
              <div className="absolute top-full z-10  left-1/2 transform -translate-x-1/2">
                <PagesNav />
              </div>
            )}
          </div>


          <div className="relative" onMouseEnter={() => setShowShopMenu(true)} onMouseLeave={() => setShowShopMenu(false)} >
            <Link to="#" className="text-[#666] hover:text-[#E55472] !font-thin transition-colors">
              SHOP
            </Link>
            {showShopMenu && (
              <div className="absolute top-full z-10 left-1/2 transform -translate-x-1/2">
                <ShopNav />
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setShowPortfolioMenu(true)} onMouseLeave={() => setShowPortfolioMenu(false)}>
            <Link to="#" className="text-[#666] hover:text-[#E55472] !font-thin transition-colors">
              PORTFOLIO
            </Link>
            {showPortfolioMenu && (
              <div className="absolute top-full z-10 left-1/2 transform -translate-x-1/2">
                <PortfolioNav />
              </div>
            )}
          </div>


          <div className="relative" onMouseEnter={() => setShowNewsMenu(true)} onMouseLeave={() => setShowNewsMenu(false)}>
            <Link to="#" className="text-[#666] hover:text-[#E55472] !font-thin transition-colors">
              NEWS
            </Link>
            {showNewsMenu && (
              <div className="absolute top-full z-10 left-1/2 transform -translate-x-1/2">
                <NewsNav />
              </div>
            )}
          </div>


          <Link to="#" className="text-[#666] !font-thin">CONTACT</Link>
        </nav>

      </div>
    </>
  )
}

export default BottomHeader
