"use client";
import { getCookies } from "@/actions/getCookies/action";
import { createContext, useState, ReactNode, useEffect, Dispatch } from "react";
import { useJwt } from "react-jwt";

type useProviderProps = {
  children: ReactNode;
};

type LoggedUser = {
  id: string;
  email: string;
  username: string;
};

interface UserContextType {
  setToken: Dispatch<string>;
  loggedUser: LoggedUser | null;
}

export const UserContext = createContext<UserContextType>({
  setToken: () => "",
  loggedUser: { id: "", email: "", username: "" } || {},
});

export const UserProvider = ({ children }: useProviderProps) => {
  const [token, setToken] = useState<string | any>("");
  const { decodedToken: loggedUser } = useJwt<LoggedUser>(token);

  const getToken = async () => {
    const data = await getCookies();
    setToken(data);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <UserContext.Provider value={{ loggedUser, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
