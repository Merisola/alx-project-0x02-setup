import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ label, size, shape, onClick }) => {
  // Set size classes
  const sizeClasses =
    size === "small"
      ? "px-3 py-1 text-sm"
      : size === "medium"
      ? "px-4 py-2 text-base"
      : "px-5 py-3 text-lg";

  // Combine final classes
  const className = `bg-blue-500 text-white ${sizeClasses} ${shape} hover:bg-blue-600 transition`;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
