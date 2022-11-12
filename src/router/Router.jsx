import { Routes, Route } from "react-router-dom";

import { Home, About, Blog } from '../views'
import { AppRoutes } from "./AppRoutes";

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
      </Routes>
    </>
  )
}
