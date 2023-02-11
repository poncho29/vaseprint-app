import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks";

import { Header, Footer, LayoutAdmin } from "../components";

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
