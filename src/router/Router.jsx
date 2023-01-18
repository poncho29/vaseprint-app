import { Routes, Route, Navigate } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { AdminRoutes } from "./AdminRoutes";
import { Home, About, Blog } from '../views'
import AdminProducts from "../views/admin/AdminProducts";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppRoutes />}>
          <Route index element={<Home />} />
          <Route path="store" element={<div>Tienda</div>} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<div>Contacto</div>} />          
        </Route>

        <Route path="/admin" element={<AdminRoutes />}>
          <Route index element={<AdminProducts />} />
        </Route>

        <Route path="/*" element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
