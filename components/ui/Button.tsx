import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonBaseProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variantClasses = {
  primary:
    "bg-sage-500 text-white hover:bg-sage-700 focus-visible:ring-sage-500 shadow-md hover:shadow-lg hover:-translate-y-0.5",
  outline:
    "border-2 border-sage-500 text-sage-700 hover:bg-sage-500 hover:text-white focus-visible:ring-sage-500 hover:-translate-y-0.5",
  ghost:
    "text-sage-700 hover:bg-sage-100 focus-visible:ring-sage-500",
};

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm gap-1.5",
  md: "px-7 py-3.5 text-base gap-2",
  lg: "px-9 py-4 text-lg gap-2.5",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...rest
  } = props;

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  if (props.as === "a") {
    const { as: _as, variant: _v, size: _s, ...linkProps } = props;
    return (
      <a {...linkProps} className={classes}>
        {children}
      </a>
    );
  }

  const { as: _as, href: _href, variant: _v, size: _s, ...buttonProps } =
    props as ButtonAsButton & { href?: never };
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
