import { createContext, useContext, useMemo } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { auth } from "@/plugins/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const login = async ({email, password}) => {
    const response = await setPersistence(auth, browserLocalPersistence).then(() => signInWithEmailAndPassword(auth, email, password))
    
    setUser(response.user);
    redirect("/dashboard");
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    redirect("/login");
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
  };