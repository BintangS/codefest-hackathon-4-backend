// import { _SERVICE } from '../../../../../declarations/signa_backend/signa_backend.did';
// import { AuthClient } from '@dfinity/auth-client';
import { Principal } from '@dfinity/principal';
import { ReactNode } from 'react';

export interface AuthContextProviderProps {
  children: ReactNode;
}

export interface AuthContextInterface {
//   profile: UserInterface | null | undefined;
//   authClient: AuthClient | undefined;
  isAuthenticated: boolean | undefined;
//   createProfile: (name: string) => Promise<void>;
  login: (email:string, password:string) => void;
  logout: () => void;
}

export interface UserInterface {
  id: Principal;
  userName: string;
  createdAt: bigint;
}

export interface PersistentStorage {
  getItem(key : string): string | null
  setItem(key : string, value: string): void
  removeItem(key : string): void
}

export class LocalStorageClass implements PersistentStorage {
  getItem(key: string) {
    const item = localStorage.getItem(key)
    return item
  }
  setItem(key: string, value: string) {
    localStorage.setItem(key, value)    
  }
  removeItem(key: string): void {
    localStorage.removeItem(key)
  }
}
