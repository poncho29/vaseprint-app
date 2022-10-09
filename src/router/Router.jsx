import { Routes, Route } from "react-router-dom";

import { Home, About } from '../views'
import { Header } from "../components";

export const Router = () => {
  return (
    <>
      <Header />

      <div className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="store" element={<div>Tienda</div>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<div>Contacto</div>} />
        </Routes>
      </div>
    </>
  )
}
