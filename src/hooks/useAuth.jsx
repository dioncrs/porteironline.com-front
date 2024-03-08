import { createContext, useContext, useMemo, useState } from "react";
import { redirect } from "react-router-dom";
import { signIn, logoutUser } from "@/services/UserService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async ({email, password}) => {    
    const currentUser = await signIn(email, password);    
    setUser(currentUser);
    redirect("/dashboard");
  };

  const logout = async () => {
    await logoutUser(auth);
    setUser(null);
    redirect("/login");
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      setUser
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
  };