import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleClassName = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span
          className="inline-flex items-center gap-2 text-sage-600 text-sm font-semibold uppercase tracking-widest"
          aria-hidden="false"
        >
          <span className="inline-block w-8 h-0.5 bg-sage-400 rounded-full" />
          {eyebrow}
          <span className="inline-block w-8 h-0.5 bg-sage-400 rounded-full" />
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-sage-900 leading-tight ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted max-w-2xl leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
