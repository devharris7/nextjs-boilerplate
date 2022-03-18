import React, { HTMLAttributes } from "react";
import classnames from "classnames";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: "button" | "reset" | "submit";
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "contained" | "outlined";
  disabled?: boolean;
}

const Button = ({
  type = "button",
  children,
  variant = "contained",
  size = "md",
  disabled = false,
  onClick,
}: ButtonProps) => {
  // TODO: refactor the following parts with @apply
  const shared = `mr-2 mb-2 font-medium text-center rounded-lg focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 ${
    disabled ? "" : "hover:bg-gray-900"
  }`;

  const sizes = {
    sm: "py-2 px-3 text-sm",
    md: "py-2.5 px-5 text-sm",
    lg: "py-3 px-5 text-base",
  };

  const variants = {
    contained: `text-white bg-gray-800 dark:bg-gray-800 dark:border-gray-700 ${
      disabled ? "" : "dark:hover:bg-gray-700"
    }`,
    outlined: `text-gray-900 border border-gray-800 dark:text-gray-400 dark:border-gray-600 ${
      disabled ? "" : "hover:text-white dark:hover:text-white dark:hover:bg-gray-600"
    }`,
  };

  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={classnames([
          shared,
          sizes[size],
          variants[variant],
          { "cursor-not-allowed": disabled },
        ])}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
