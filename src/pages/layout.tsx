import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  toggleDarkMode: () => void;
  darkMode: boolean;
}

export default function Layout({
  children,
  toggleDarkMode,
  darkMode,
}: LayoutProps) {
  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
    >
      <header
        className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <h1
              className="text-lg font-semibold text-indigo-600 dark:text-indigo-400"
            >
              Meeting Minutes Pro
            </h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>
      <main className="py-6">
        {children}
      </main>
    </div>
  );
}
