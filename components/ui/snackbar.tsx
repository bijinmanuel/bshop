// components/Snackbar.tsx
import React, { useEffect } from "react";
import { X, Check, AlertCircle, Info, ShoppingCart } from "lucide-react";

export interface SnackbarProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  position?:
    | "top-center"
    | "top-right"
    | "bottom-center"
    | "bottom-right"
    | "bottom-left";
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  isVisible,
  onClose,
  type = "success",
  duration = 3000,
  position = "bottom-center",
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  if (!isVisible) return null;

  const getPositionClasses = (): string => {
    switch (position) {
      case "top-center":
        return "top-4 left-1/2 transform -translate-x-1/2";
      case "top-right":
        return "top-4 right-4";
      case "bottom-right":
        return "bottom-4 right-4";
      case "bottom-left":
        return "bottom-4 left-4";
      case "bottom-center":
      default:
        return "bottom-4 left-1/2 transform -translate-x-1/2";
    }
  };

  const getTypeStyles = (): string => {
    switch (type) {
      case "success":
        return "bg-green-600 text-white";
      case "error":
        return "bg-red-600 text-white";
      case "warning":
        return "bg-yellow-600 text-white";
      case "info":
        return "bg-blue-600 text-white";
      default:
        return "bg-green-600 text-white";
    }
  };

  const getIcon = (): React.ReactNode => {
    switch (type) {
      case "success":
        return <Check className="h-5 w-5" />;
      case "error":
        return <AlertCircle className="h-5 w-5" />;
      case "warning":
        return <AlertCircle className="h-5 w-5" />;
      case "info":
        return <Info className="h-5 w-5" />;
      default:
        return <ShoppingCart className="h-5 w-5" />;
    }
  };

  const animationClasses = position.includes("top")
    ? isVisible
      ? "translate-y-0 opacity-100"
      : "-translate-y-full opacity-0"
    : isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-full opacity-0";

  return (
    <div
      className={`fixed ${getPositionClasses()} z-50 transition-all duration-300 ease-in-out ${animationClasses}`}
    >
      <div
        className={`flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg max-w-sm min-w-[300px] ${getTypeStyles()}`}
      >
        <div className="flex items-center space-x-2 flex-1">
          {getIcon()}
          <span className="text-sm font-medium">{message}</span>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors flex-shrink-0"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Snackbar;
