"use client";
import { getCookies } from "@/actions/getCookies/action";
import { createContext, useState, ReactNode, useEffect } from "react";

type useProviderProps = {
  children: ReactNode;
};

interface UserContextType {
  isAuthenticated: boolean;
}
export const UserContext = createContext<UserContextType>({
  isAuthenticated: false,
});

export const UserProvider = ({ children }: useProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    getCookies()
      .then((token) => {
        if (isAuthenticated === false) {
          setIsAuthenticated(!!token);
        }
      })
      .catch((error) => {
        console.error("Erro ao recuperar cookies:", error);
      });
  }, [getCookies]);

  return (
    <UserContext.Provider value={{ isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};
