import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  href,
  to,
  type = "button",
  disabled = false,
  className = "",
  icon,
  iconPosition = "left",
}) => {
  // Determine style based on variant
  const variantStyles = {
    primary:
      "bg-primary-500 hover:bg-primary-600 text-white border-transparent",
    secondary:
      "bg-secondary-500 hover:bg-secondary-600 text-white border-transparent",
    outline:
      "bg-transparent hover:bg-primary-50 dark:hover:bg-primary-900/10 text-primary-500 border-primary-500",
    ghost:
      "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-transparent",
  };

  // Determine size based on size prop
  const sizeStyles = {
    sm: "text-sm py-1.5 px-3",
    md: "text-base py-2 px-4",
    lg: "text-lg py-2.5 px-5",
  };

  // Combine all styles
  const buttonStyles = `
    inline-flex items-center justify-center
    font-medium rounded-lg border
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  // Content with icon
  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  );

  // Framer Motion props
  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.03 },
    whileTap: { scale: disabled ? 1 : 0.97 },
  };

  // Render as link if href is provided
  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonStyles}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  // Render as router Link if to is provided
  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={buttonStyles}>
          {content}
        </Link>
      </motion.div>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;
