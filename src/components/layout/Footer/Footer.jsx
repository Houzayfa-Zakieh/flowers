import MyAccount from './components/MyAccount';
import QuickLinks from './components/QuickLinks';
import Information from './components/Information';
import CustomerService from './components/CustomerService';
import AboutOurShop from './components/AboutOurShop';
import BottomFooter from './components/BottomFooter';
import IconsImagesSwiper from './components/IconsImagesSwiper'
const Footer = () => {
  return (
    <>
    <IconsImagesSwiper/>
      <footer className="flex items-center justify-center w-[100%] min-h-[20vh] bg-[#272829] flex-wrap">
        <div className='flex items-center justify-evenly pt-[95px] pb-[50px] gap-[80px] flex-wrap'>
          <MyAccount />
          <QuickLinks />
          <Information />
          <CustomerService />
          <AboutOurShop />
        </div>
        <BottomFooter />
      </footer>
    </>
  )
}

export default Footer
