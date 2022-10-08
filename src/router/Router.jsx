import { Routes, Route } from "react-router-dom";

import { Home, About } from '../views'
import { Navbar } from "../components";

export const Router = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}
