import BottomHeader from './components/BottomHeader';
import Sider from './components/Sider';
import TopHeader from './components/TopHeader';
import CartBar from './components/CartBar';
import { useEffect } from 'react';
import FixedHeader from './components/FixedHeader';
// import { useEffect } from 'react';
const Header = () => {
  useEffect(() => {
    document.onClick = (event) => {
      if (event.target.id !== "cart") {
        document.querySelector(".cart2").classList.remove("show");

      }
    }
  }, [])

  return (
    <>
      <header className="bg-white">
        <TopHeader />
        <BottomHeader />
        <FixedHeader/>
      </header>      
        <Sider  />
        <CartBar />
    </>
  )
}

export default Header
