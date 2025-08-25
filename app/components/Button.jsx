import React from "react";

const Button = ({
  children,
  disabled = false,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  const buttonClasses = ` ${className}`;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
