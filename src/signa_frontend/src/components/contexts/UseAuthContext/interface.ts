import { AuthClient } from '@dfinity/auth-client';
import { Principal } from '@dfinity/principal';
import { ReactNode } from 'react';

export interface AuthContextProviderProps {
  children: ReactNode;
}

export interface userProfileDataInterface {
  email : string,
  password : string
}

export interface UserInterface {
  id: Principal;
  userName: string;
  createdAt: bigint;
}

export interface AuthContextInterface {
  isAuthenticated: boolean | undefined;
  profile: UserInterface | null | undefined;
  login: () => void;
  logout: () => void;
  createProfile: (name: string) => Promise<void>;
  authClient: AuthClient | undefined;
}

export interface UserInterface {
  id: Principal;
  userName: string;
  createdAt: bigint;
}
