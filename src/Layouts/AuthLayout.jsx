import { Outlet } from "react-router-dom"
const AuthLayout = ({children}) => {
  return (
    <>
      <Outlet/>
        {children}
    </>
  )
}

export default AuthLayout
