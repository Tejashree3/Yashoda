import React from "react";

// Define color styles for different variants
const VARIANT_STYLES = {
  primary: "bg-[#40afe0] hover:bg-blue-600 text-white",
  success: "bg-green-500 hover:bg-green-600 text-white",
  error: "bg-red-500 hover:bg-red-600 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
  outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
};

const Button = ({
  variant = "primary",
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "mt-4 px-6 py-3 font-medium transition rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1";

  // Combine styles manually
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  const variantStyles = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;

  const finalClassName =
    `${baseStyles} ${variantStyles} ${disabledStyles} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
    >
      {children}
    </button>
  );
};

export default Button;
