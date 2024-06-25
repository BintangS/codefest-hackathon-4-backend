import React, { createContext, useContext, useState } from 'react';
import {
  AuthContextInterface,
  AuthContextProviderProps
} from './interface';
// import { signa_backend } from '@backend';
// import { AuthClient } from '@dfinity/auth-client';
// import { _SERVICE } from '../../../../../declarations/submid_backend/submid_backend.did';

const AuthContext = createContext({} as AuthContextInterface);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  // const [userProfileData, setUserProfileData] = useState<userProfileDataInterface | null>(null);

  const login = () => {
    if (!isAuthenticated) {
      // setUserProfileData({
      //   email : email,
      //   password : password
      // })
      localStorage.setItem("identityICP", "abcdefghi")
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    // setUserProfileData(null)
    localStorage.removeItem("identityICP")
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
