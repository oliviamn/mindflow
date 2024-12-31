'use client';

import { useEffect, useState } from 'react';

interface ContentPanelProps {
  selectedFile: string | null;
}

export default function ContentPanel({ selectedFile }: ContentPanelProps) {
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [viewMode, setViewMode] = useState<'preview' | 'source'>('preview');

  useEffect(() => {
    if (!selectedFile) {
      setContent('');
      return;
    }

    fetch(selectedFile)
      .then(response => {
        if (!response.ok) throw new Error('Failed to load file');
        return response.text();
      })
      .then(text => {
        setContent(text);
        setError('');
      })
      .catch(err => {
        setError('Error loading file');
        console.error(err);
      });
  }, [selectedFile]);

  if (!selectedFile) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a file to view its contents
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header with filename and view toggle */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <h1 className="text-xl font-mono">{selectedFile.split('/').pop()}</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('preview')}
            className={`px-3 py-1 rounded ${
              viewMode === 'preview'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setViewMode('source')}
            className={`px-3 py-1 rounded ${
              viewMode === 'source'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800'
            }`}
          >
            Source
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-auto">
        {viewMode === 'preview' ? (
          <div 
            className="h-full"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        ) : (
          <pre className="p-4 font-mono text-sm whitespace-pre-wrap bg-gray-50 dark:bg-gray-900">
            {content}
          </pre>
        )}
      </div>
    </div>
  );
} 