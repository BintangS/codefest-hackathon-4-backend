import React, { createContext, useContext, useState } from 'react';
import {
  AuthContextInterface,
  AuthContextProviderProps,
  LocalStorageClass
} from './interface';
// import { signa_backend } from '@backend';
// import { AuthClient } from '@dfinity/auth-client';
// import { _SERVICE } from '../../../../../declarations/submid_backend/submid_backend.did';

const AuthContext = createContext({} as AuthContextInterface);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  const login = (email: string, password: string) => {
    if (email == "steve.harnadi@gmail.com" && password == "admin123") {
      const newLocalStorage = new LocalStorageClass()
      newLocalStorage.setItem("loginStatus", JSON.stringify({
        email : email,
        password : password
      }))
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("loginStatus")
    setIsAuthenticated(false);
  };

  const contextValue = {
    isAuthenticated: isAuthenticated,
    login: login,
    logout: logout
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
