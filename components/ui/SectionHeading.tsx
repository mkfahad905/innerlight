"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

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
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={`flex flex-col gap-3 ${alignClass}`}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
      {eyebrow && (
        <m.span
          className="inline-flex items-center gap-2 text-sage-600 text-sm font-semibold uppercase tracking-widest"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <span className="inline-block w-8 h-0.5 bg-sage-400 rounded-full" aria-hidden="true" />
          {eyebrow}
          <span className="inline-block w-8 h-0.5 bg-sage-400 rounded-full" aria-hidden="true" />
        </m.span>
      )}
      <m.h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-sage-900 leading-tight ${titleClassName}`}
        variants={{
          hidden: { opacity: 0, y: 14 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
      >
        {title}
      </m.h2>
      {subtitle && (
        <m.p
          className="text-lg text-muted max-w-2xl leading-relaxed mt-1"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          {subtitle}
        </m.p>
      )}
      </m.div>
    </LazyMotion>
  );
}
