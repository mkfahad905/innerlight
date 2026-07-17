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
        "bg-white rounded-2xl p-6 shadow-[var(--shadow-card)]",
        hover &&
          "transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1",
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
