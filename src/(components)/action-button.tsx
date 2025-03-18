import React from "react";
import { LoaderIcon } from "lucide-react";

interface ActionButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  color?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export function ActionButton({
  icon,
  onClick,
  color = "bg-indigo-600",
  disabled = false,
  isLoading = false,
}: ActionButtonProps) {
  const baseClasses =
    "p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200";

  const getButtonClasses = () => {
    if (disabled) {
      return `${baseClasses} bg-gray-400 cursor-not-allowed opacity-70`;
    }
    if (isLoading) {
      return `${baseClasses} ${color} opacity-80`;
    }
    return `${baseClasses} ${color} hover:opacity-90 active:scale-95`;
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={getButtonClasses()}
      aria-label="Action button"
    >
      {isLoading ? (
        <LoaderIcon className="h-5 w-5 animate-spin" />
      ) : (
        icon
      )}
    </button>
  );
}
