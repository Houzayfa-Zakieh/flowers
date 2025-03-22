import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
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
