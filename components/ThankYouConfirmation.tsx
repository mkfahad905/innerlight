"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const timeline = [
  {
    step: "Step 1",
    title: "Form Received",
    status: "Completed",
    complete: true,
  },
  {
    step: "Step 2",
    title: "Review by Psychologist",
    status: "In Progress",
    complete: true,
  },
  {
    step: "Step 3",
    title: "WhatsApp Contact",
    status: "Upcoming",
    complete: false,
  },
  {
    step: "Step 4",
    title: "Session Scheduling",
    status: "Upcoming",
    complete: false,
  },
];

interface ThankYouConfirmationProps {
  whatsappUrl: string;
}

function FloatingShape({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      aria-hidden="true"
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -18, 0],
              x: [0, 8, 0],
            }
      }
      transition={{
        duration: 14,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    />
  );
}

function Heading() {
  const reduceMotion = useReducedMotion();
  const words = ["Thank", "You", "for"];

  return (
    <motion.h1
      className="font-display text-3xl font-semibold leading-tight text-sage-900 sm:text-5xl lg:text-6xl"
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {words.map((word) => (
        <motion.span
          key={word}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, ease },
            },
          }}
        >
          {word}
          {"\u00a0"}
        </motion.span>
      ))}
      <motion.span
        className="inline-block italic text-sage-600"
        variants={{
          hidden: { opacity: 0, y: 14 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.85, ease },
          },
        }}
      >
        Reaching Out
      </motion.span>
    </motion.h1>
  );
}

export function ThankYouConfirmation({
  whatsappUrl,
}: ThankYouConfirmationProps) {
  const reduceMotion = useReducedMotion();

  return (
    <main
      className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-8 sm:py-20 lg:px-10"
      aria-label="Thank you confirmation"
      style={{
        background:
          "radial-gradient(circle at 18% 12%, rgba(168,197,176,0.30) 0%, transparent 34%), radial-gradient(circle at 82% 18%, rgba(122,158,135,0.18) 0%, transparent 28%), linear-gradient(160deg, #FAFAF8 0%, #F5F0E8 54%, #EDE8DC 100%)",
      }}
    >
      <FloatingShape
        delay={0}
        className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-sage-200/30 blur-3xl"
      />
      <FloatingShape
        delay={2}
        className="pointer-events-none absolute -right-24 top-32 h-96 w-96 rounded-full bg-sage-300/20 blur-3xl"
      />
      <FloatingShape
        delay={4}
        className="pointer-events-none absolute bottom-12 left-1/2 h-64 w-64 -translate-x-1/2 rounded-[60%_40%_70%_30%/50%_55%_45%_50%] bg-white/40 blur-2xl"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(45,74,62,0.18) 1px, transparent 0)",
          backgroundSize: "34px 34px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-5xl items-center justify-center sm:min-h-[calc(100vh-10rem)]">
        <motion.section
          className="w-full rounded-[2rem] border border-white/60 bg-white/80 px-5 py-9 shadow-[0_24px_80px_-32px_rgba(45,74,62,0.38)] backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <motion.div
              className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-sage-900 text-white shadow-[0_0_0_12px_rgba(122,158,135,0.12),0_22px_52px_-22px_rgba(45,74,62,0.75)]"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease, delay: 0.08 }}
              aria-hidden="true"
            >
              <span className="absolute inset-0 rounded-full bg-sage-500/15 blur-xl" />
              <svg
                className="relative h-11 w-11"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>

            <Heading />

            <motion.p
              className="mt-6 max-w-[550px] text-base leading-8 text-muted sm:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.26 }}
            >
              Your responses have been received. I&rsquo;ll personally review
              your form and contact you on WhatsApp within{" "}
              <strong className="font-semibold text-sage-800">24 hours</strong>.
            </motion.p>

            <motion.div
              className="my-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-sage-200 to-transparent"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.36 }}
              aria-hidden="true"
            />

            <motion.ol
              className="relative flex w-full max-w-2xl flex-col gap-5 text-left"
              role="list"
              aria-label="Journey progress"
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? undefined : "visible"}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 0.38,
                    staggerChildren: 0.11,
                  },
                },
              }}
            >
              <span
                className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-sage-200 via-sage-300 to-transparent"
                aria-hidden="true"
              />
              {timeline.map((item, index) => (
                <motion.li
                  key={item.title}
                  className="group relative flex flex-wrap gap-4 rounded-3xl border border-sage-200/70 bg-beige-50/90 p-5 shadow-[var(--shadow-card)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sage-900 hover:shadow-[var(--shadow-card-hover)] sm:flex-nowrap sm:gap-5 sm:p-6"
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.65, ease },
                    },
                  }}
                >
                  <div
                    className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                      item.complete
                        ? "border-sage-700 bg-sage-900 text-white"
                        : "border-sage-200 bg-beige-50 text-sage-600"
                    }`}
                    aria-hidden="true"
                  >
                    {item.complete ? (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      `0${index + 1}`
                    )}
                  </div>
                  <div className="flex min-w-0 flex-1 basis-[11rem] flex-col gap-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-500">
                      {item.step}
                    </p>
                    <h2 className="font-display text-xl font-semibold leading-snug text-sage-900">
                      {item.title}
                    </h2>
                  </div>
                  <span
                    className={`ml-[4rem] self-start rounded-full px-3 py-1 text-xs font-semibold sm:ml-0 ${
                      item.complete
                        ? "bg-sage-50 text-sage-700"
                        : "bg-beige-100 text-muted"
                    }`}
                  >
                    {item.status}
                  </span>
                </motion.li>
              ))}
            </motion.ol>

            <motion.div
              className="mt-10 max-w-[550px] space-y-3 text-center text-sm leading-7 text-muted sm:text-base"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.88 }}
            >
              <p>
                We&rsquo;ll personally review your information and contact you
                on WhatsApp within 24 hours.
              </p>
              <p>If you have any urgent questions, you can message us directly.</p>
            </motion.div>

            <motion.div
              className="mt-9 flex w-full max-w-md flex-col items-center gap-4"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1 }}
            >
              <motion.a
                id="whatsapp-cta"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white shadow-[0_14px_34px_-16px_rgba(37,211,102,0.78)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                style={{ background: "#25D366" }}
                aria-label="Continue on WhatsApp"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                <svg
                  className="h-6 w-6 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Continue on WhatsApp
              </motion.a>

              <Link
                href="/"
                className="text-sm font-medium text-sage-600 underline underline-offset-4 transition-colors duration-200 hover:text-sage-800"
              >
                Back to Home
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
