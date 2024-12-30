'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import NavigationPanel from '@/components/NavigationPanel';
import ContentPanel from '@/components/ContentPanel';

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  
  return (
    <div className="flex h-screen">
      {/* Left Navigation Panel */}
      <div className="w-64 border-r border-gray-200 dark:border-gray-800 flex flex-col">
        <SearchBar />
        <NavigationPanel onFileSelect={setSelectedFile} />
      </div>

      {/* Main Content Panel */}
      <div className="flex-1 overflow-auto">
        <ContentPanel selectedFile={selectedFile} />
      </div>
    </div>
  );
}
