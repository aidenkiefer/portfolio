'use client';

import { Edit } from 'lucide-react';
import { useState, useEffect } from 'react';

interface EditButtonProps {
  filePath: string;
}

export function EditButton({ filePath }: EditButtonProps) {
  const [isDevelopment, setIsDevelopment] = useState(false);
  
  useEffect(() => {
    // Only show in development/local environment
    const isDev = process.env.NODE_ENV === 'development' || 
                  window.location.hostname === 'localhost' ||
                  window.location.hostname === '127.0.0.1';
    setIsDevelopment(isDev);
  }, []);

  if (!isDevelopment) {
    return null;
  }

  // Construct GitHub edit URL
  // Uses GitHub username from siteConfig and assumes repo name matches workspace
  // You can set NEXT_PUBLIC_REPO_NAME env var to override, or update the default
  const githubUsername = 'aidenkiefer';
  const repoName = process.env.NEXT_PUBLIC_REPO_NAME || 'website'; // Update this to match your repo name
  const branch = 'main'; // or 'master' depending on your default branch
  const editUrl = `https://github.com/${githubUsername}/${repoName}/edit/${branch}/${filePath}`;

  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2 text-xs font-medium text-text-secondary bg-background border border-border rounded-md opacity-20 hover:opacity-100 hover:border-accent-primary hover:text-accent-primary transition-all duration-200 ease-out shadow-sm backdrop-blur-sm"
      title={`Edit ${filePath} (development only)`}
    >
      <Edit className="h-3 w-3" />
      <span className="hidden sm:inline">Edit</span>
    </a>
  );
}
