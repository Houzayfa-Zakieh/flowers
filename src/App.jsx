import '/src/assets/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import UserLayout from './Layouts/UserLayout';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import ProductsInfo from './Pages/ProductsInfo';
import Login from './Pages/Login';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />} />
          </Route>
          <Route element={<UserLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/productsInfo' element={<ProductsInfo />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
