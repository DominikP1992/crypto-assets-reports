import useMetaMask from '@/hooks/useMetaMask';
import React, { createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
  account: string | null;
  login: () => Promise<void>;
  isAuth: Boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { account, connectWallet, disconnectWallet } = useMetaMask();
  const login = async () => {
    await connectWallet();
  };

  const logout = () => {
    disconnectWallet();
  };

  return (
    <AuthContext.Provider
      value={{ account, login, isAuth: Boolean(account), logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
