'use client';

import { useState, FormEvent } from 'react';
import { useAdmin } from './AdminProvider';
import { X } from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminLoginModal({ isOpen, onClose }: AdminLoginModalProps) {
  const { login } = useAdmin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Small delay for UX
    await new Promise(resolve => setTimeout(resolve, 300));

    const success = login(username, password);
    
    if (success) {
      setUsername('');
      setPassword('');
      onClose();
    } else {
      setError('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-md border border-border bg-background p-8 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors duration-200"
        >
          <X className="h-5 w-5" />
        </button>
        
        <h2 className="text-2xl font-semibold text-text-primary mb-6">Admin Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-text-primary mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-200"
              autoFocus
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-200"
              required
            />
          </div>
          
          {error && (
            <p className="text-sm text-accent-secondary">{error}</p>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 rounded-md bg-accent-primary text-white font-medium hover:bg-accent-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
