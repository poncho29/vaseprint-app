import { Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks";

import { Header, Footer } from "../components";
import { useEffect } from "react";
import LayoutAdmin from "../components/layouts/LayoutAdmin";

export const AdminRoutes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/', {
        replace: true
      })
    }
  }, [user]);

  return (
    <>
      <Header />

      <LayoutAdmin>
        <Outlet />
      </LayoutAdmin>

      <Footer />
    </>
  )
}
