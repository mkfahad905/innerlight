"use client";

import type { PropsWithChildren } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type MotionSectionProps = PropsWithChildren<HTMLMotionProps<"section">>;
type MotionDivProps = PropsWithChildren<HTMLMotionProps<"div">>;
type MotionArticleProps = PropsWithChildren<HTMLMotionProps<"article">>;
type MotionAnchorProps = PropsWithChildren<HTMLMotionProps<"a">>;

function MotionFeatures({ children }: PropsWithChildren) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export function MotionSection({
  children,
  ...props
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionFeatures>
      <m.section
        {...props}
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.7, ease }}
      >
        {children}
      </m.section>
    </MotionFeatures>
  );
}

export function MotionDiv({ children, ...props }: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionFeatures>
      <m.div
        {...props}
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.7, ease }}
      >
        {children}
      </m.div>
    </MotionFeatures>
  );
}

export function MotionStagger({
  children,
  ...props
}: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionFeatures>
      <m.div
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
      </m.div>
    </MotionFeatures>
  );
}

export function MotionStaggerItem({
  children,
  ...props
}: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionFeatures>
      <m.div
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
      </m.div>
    </MotionFeatures>
  );
}

export function MotionArticle({
  children,
  ...props
}: MotionArticleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionFeatures>
      <m.article
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
      </m.article>
    </MotionFeatures>
  );
}

export function MotionAnchor({
  children,
  ...props
}: MotionAnchorProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionFeatures>
      <m.a
        {...props}
        whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.2, ease }}
      >
        {children}
      </m.a>
    </MotionFeatures>
  );
}

export function MotionPage({ children, ...props }: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionFeatures>
      <m.div
        {...props}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.25, ease }}
      >
        {children}
      </m.div>
    </MotionFeatures>
  );
}
