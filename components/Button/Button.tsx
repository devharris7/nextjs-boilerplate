import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'reset' | 'submit';
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  theme?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost';
  isLink?: boolean;
  variant?: 'outline' | 'circle' | 'square';
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  type = 'button',
  children,
  theme = 'primary',
  isLink = false,
  variant,
  size = 'md',
  loading,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const childElement = isLink ? <a>{children}</a> : children;

  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={classnames([
          'btn',
          { 'btn-disabled': disabled, loading: loading, [`btn-${variant}`]: variant },
          `btn-${theme}`,
          `btn-${size}`,
        ])}
        onClick={onClick}
      >
        {childElement}
      </button>
    </>
  );
};

export default Button;
