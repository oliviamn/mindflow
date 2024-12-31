'use client';

import { useEffect, useState } from 'react';

interface NavigationPanelProps {
  onFileSelect: (file: string) => void;
}

export default function NavigationPanel({ onFileSelect }: NavigationPanelProps) {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    // For now, we'll list the known HTML files
    setFiles([
      '/html/ChatGPT (2024_12_27 15：56：30).html',
      '/html/DAG存储与执行设计 (2024_12_27 15：56：41).html',
      '/html/DAG存储与重建设计 (2024_12_27 15：57：05).html',
      '/html/Debugging Pytest Async Tests (2024_12_30 10：31：50).html',
      '/html/Workflow Step设计方案 (2024_12_27 15：56：47).html',
    ]);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto">
      <ul className="py-2">
        {files.map((file) => (
          <li 
            key={file}
            onClick={() => onFileSelect(file)}
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 
                     cursor-pointer text-sm font-mono"
          >
            {decodeURIComponent(file.split('/').pop() || '')}
          </li>
        ))}
      </ul>
    </div>
  );
} 