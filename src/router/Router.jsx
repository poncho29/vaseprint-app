import { Routes, Route, Navigate } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { AdminRoutes } from "./AdminRoutes";
import { Home, About, Blog, Contact } from '../views';

import AdminUser from "../views/admin/adminUsers/AdminUser";
import FormUser from "../views/admin/adminUsers/FormUser";

import AdminProducts from "../views/admin/AdminProducts";
import AdminTips from "../views/admin/AdminTips";
import AdminBlog from "../views/admin/AdminBlog";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppRoutes />}>
          <Route index element={<Home />} />
          <Route path="store" element={<div>Tienda</div>} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />          
        </Route>

        <Route path="/admin" element={<AdminRoutes />}>
          <Route index element={<AdminUser />} />
          <Route path="new-user" element={<FormUser/>} />
          <Route path="edit-user/:id" element={<FormUser/>} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="tips" element={<AdminTips />} />
          <Route path="blog" element={<AdminBlog />} />
        </Route>

        <Route path="/*" element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
