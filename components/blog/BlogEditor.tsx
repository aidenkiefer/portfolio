'use client';

import { useState } from 'react';
import { Edit, Save, X } from 'lucide-react';

interface BlogEditorProps {
  slug: string;
  initialContent: string;
  onSave: (content: string) => Promise<void>;
}

export function BlogEditor({ slug, initialContent, onSave }: BlogEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    try {
      await onSave(content);
      setIsEditing(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setContent(initialContent);
    setIsEditing(false);
    setError(null);
  };

  if (!isEditing) {
    return (
      <button
        onClick={() => setIsEditing(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2 text-xs font-medium text-text-secondary bg-background border border-border rounded-md opacity-30 hover:opacity-100 hover:border-accent-primary hover:text-accent-primary transition-all duration-200 ease-out shadow-sm"
        title="Edit this post"
      >
        <Edit className="h-3 w-3" />
        <span className="hidden sm:inline">Edit</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-auto">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-text-primary">Editing: {slug}</h2>
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary bg-background border border-border rounded-md hover:border-accent-primary hover:text-accent-primary transition-all duration-200 ease-out disabled:opacity-50"
            >
              <X className="h-4 w-4" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-accent-primary border border-accent-primary rounded-md hover:bg-accent-primary/90 transition-all duration-200 ease-out disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-md border border-accent-secondary bg-accent-secondary/10 text-sm text-accent-secondary">
            {error}
          </div>
        )}

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-[calc(100vh-200px)] font-mono text-sm p-4 rounded-md border border-border bg-background text-text-primary focus:outline-none focus:border-accent-primary transition-colors duration-200 resize-none"
          placeholder="Edit blog post content..."
        />
      </div>
    </div>
  );
}
