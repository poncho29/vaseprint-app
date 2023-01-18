import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (user) => {
    localStorage.setItem('uservp', JSON.stringify(user));
    localStorage.setItem('tokenVsprint', JSON.stringify(user.token));
    setUser(user.user);
    setToken(user.token);
  }

  const logout = () => {
    localStorage.removeItem('uservp');
    localStorage.removeItem('tokenVsprint');
    setUser(null);
    setToken(null);
  }

  useEffect(() => {
    const user = localStorage.getItem('uservp');
    const token = localStorage.getItem('tokenVsprint');
    if (!user && !token) return;

    setUser(JSON.parse(user));
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}
