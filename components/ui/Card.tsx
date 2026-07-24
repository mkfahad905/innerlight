import type { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export function Card({ children, hover = true, className = "", ...rest }: CardProps) {
  return (
    <div
      className={[
        "bg-beige-50 rounded-3xl border border-sage-200/70 p-7 shadow-[var(--shadow-card)]",
        hover &&
          "transition-all duration-300 hover:border-sage-900 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1.5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}
