"use client";

import type { PropsWithChildren } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type MotionSectionProps = PropsWithChildren<HTMLMotionProps<"section">>;
type MotionDivProps = PropsWithChildren<HTMLMotionProps<"div">>;
type MotionArticleProps = PropsWithChildren<HTMLMotionProps<"article">>;
type MotionAnchorProps = PropsWithChildren<HTMLMotionProps<"a">>;

export function MotionSection({
  children,
  ...props
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      {...props}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </motion.section>
  );
}

export function MotionDiv({ children, ...props }: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </motion.div>
  );
}

export function MotionStagger({
  children,
  ...props
}: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.16 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.04,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({
  children,
  ...props
}: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionArticle({
  children,
  ...props
}: MotionArticleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      {...props}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease },
        },
      }}
    >
      {children}
    </motion.article>
  );
}

export function MotionAnchor({
  children,
  ...props
}: MotionAnchorProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      {...props}
      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease }}
    >
      {children}
    </motion.a>
  );
}

export function MotionPage({ children, ...props }: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={reduceMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.25, ease }}
    >
      {children}
    </motion.div>
  );
}

export function MotionFadeUp({
  children,
  delay = 0,
  ...props
}: MotionDivProps & { delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function MotionScaleIn({
  children,
  ...props
}: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.div>
  );
}

export function MotionWordHeading({
  children,
  className,
}: PropsWithChildren<{ className: string }>) {
  const reduceMotion = useReducedMotion();
  const text = typeof children === "string" ? children : "";

  if (reduceMotion || !text) {
    return <h1 className={className}>{children}</h1>;
  }

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.07,
          },
        },
      }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease },
            },
          }}
        >
          {word}
          {index < text.split(" ").length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </motion.h1>
  );
}
