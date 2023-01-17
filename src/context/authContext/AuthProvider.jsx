import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    localStorage.setItem('uservp', JSON.stringify(user));
    setUser(user);
  }

  const logout = () => {
    localStorage.removeItem('uservp');
    setUser(null);
  }

  useEffect(() => {
    const user = localStorage.getItem('uservp');
    if (!user) return;
    setUser(JSON.parse(user));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}
