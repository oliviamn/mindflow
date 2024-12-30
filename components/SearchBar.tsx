'use client';

export default function SearchBar() {
  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-800">
      <input
        type="text"
        placeholder="Search files..."
        className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md 
                 border border-gray-200 dark:border-gray-700
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
} 