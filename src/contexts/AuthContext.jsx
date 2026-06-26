import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
  const [user, setUser] = useState(null); // null = not logged in
  // on app load, check if a token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // there's a token — fetch the user's info to restore their session
      fetch(`${API_URL}/api/v1/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) setUser(data.user);
        })
        .catch(() => localStorage.removeItem("token"));
    }
  }, []);

  const login = (userData) => setUser(userData);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token"); // clear token on logout
  };
  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
