import { FC, ReactNode, createContext, useState } from "react";
import { JwtToken, registerUser, loginUser } from "./user-service";
import axios from "axios";

type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };

type User = {
  isLogged: boolean;
  login: string;
  registerUser: (login: string, password: string, email: string) => Promise<boolean>;
  loginUser: (login: string, password: string) => Promise<boolean>;
  logoutUser: () => void;
}

export const UserContext = createContext<User>({ isLogged: false, 
  login: "", 
  registerUser: (login: string, password: string, email: string) => new Promise<boolean>(() => false), 
  loginUser:  (login: string, password: string) => new Promise<boolean>(() => false),
  logoutUser: () => {}
});

const UserProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [login, setLogin] = useState<string>("");

  const signUpUser = (login: string, password: string, email: string) => {
    return registerUser(login, password, email)
      .then(res => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.token}`;
        setIsLogged(true);
        setLogin(login);
        return true;
      })
      .catch(() => false);
  };

  const logInUser = (login: string, password: string) => {
    return loginUser(login, password)
      .then(res => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.token}`;
        setIsLogged(true);
        setLogin(login);
        return true;
      })
      .catch(() => false);
  };

  const logoutUser = () => {
    axios.defaults.headers.common['Authorization'] = 'Bearer invalid token';
    setIsLogged(false);
  };

  return (
    <UserContext.Provider value={{ isLogged, login, registerUser: signUpUser, loginUser: logInUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;