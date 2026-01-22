'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_USERNAME = 'aidenjkiefer';
const ADMIN_PASSWORD = 'KIAI3538';
const ADMIN_STORAGE_KEY = 'admin_mode';

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if admin mode is stored in localStorage
    const stored = localStorage.getItem(ADMIN_STORAGE_KEY);
    if (stored === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem(ADMIN_STORAGE_KEY, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem(ADMIN_STORAGE_KEY);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
