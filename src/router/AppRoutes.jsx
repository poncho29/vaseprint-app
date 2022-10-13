import { Outlet } from "react-router-dom"

import { Header } from "../components";

export const AppRoutes = () => {
  return (
    <>
      <Header />

      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
