import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import { Outlet } from 'react-router-dom';
import ProductsInfo from '../components/common/ProductsInfo';
import WishList from '../components/common/WishList';
import AddCart from '../components/common/AddCart';
import GoUpButton from '../components/common/GoUpButton';

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet />
      {children}
      <Footer />
      <ProductsInfo />
      <WishList />
      <AddCart />
      <GoUpButton />
    </>
  )
}

export default UserLayout
