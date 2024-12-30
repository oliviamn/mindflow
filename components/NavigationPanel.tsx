'use client';

interface NavigationPanelProps {
  onFileSelect: (file: string) => void;
}

export default function NavigationPanel({ onFileSelect }: NavigationPanelProps) {
  // This would typically come from your API or file system
  const demoFiles = [
    'example1.html',
    'example2.html',
    'documentation.html',
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      <ul className="py-2">
        {demoFiles.map((file) => (
          <li 
            key={file}
            onClick={() => onFileSelect(file)}
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 
                     cursor-pointer text-sm font-mono"
          >
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
} 