'use client';

interface ContentPanelProps {
  selectedFile: string | null;
}

export default function ContentPanel({ selectedFile }: ContentPanelProps) {
  if (!selectedFile) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a file to view its contents
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-xl font-mono">{selectedFile}</h1>
      </div>
      <div className="font-mono whitespace-pre-wrap">
        {/* This would be replaced with actual file contents */}
        Sample content for {selectedFile}
      </div>
    </div>
  );
} 