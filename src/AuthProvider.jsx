/* eslint-disable react/prop-types */
import  { createContext, useState} from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (credentialResponse) => {
    const decodedUser = jwtDecode(credentialResponse.credential);
    setUser(decodedUser);
    localStorage.setItem("user", JSON.stringify(decodedUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
