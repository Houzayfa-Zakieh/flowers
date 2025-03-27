import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import { Outlet } from 'react-router-dom';

const UserLayout = ({children}) => {
  return (
    <>
        <Header/>
        <Outlet/>
        {children}
        <Footer/>
    </>
  )
}

export default UserLayout
