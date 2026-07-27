"use client";

import { useState } from "react";
import type { FAQ } from "@/types";
import { MotionStagger, MotionStaggerItem } from "@/components/ui/Motion";

interface AccordionProps {
  items: FAQ[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <MotionStagger className="flex flex-col gap-2.5 lg:gap-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <MotionStaggerItem
            key={item.id}
            className={`overflow-hidden rounded-3xl border bg-beige-50/95 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sage-900 hover:shadow-[var(--shadow-card-hover)] ${
              isOpen ? "border-sage-900 shadow-[var(--shadow-card-hover)]" : "border-sage-200/70"
            }`}
          >
            <button
              id={`faq-btn-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              onClick={() => toggle(item.id)}
              className="group flex min-h-12 w-full items-center justify-between gap-3 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-inset lg:gap-4 lg:px-7 lg:py-6"
            >
              <span className="font-semibold text-sage-900 text-base sm:text-lg pr-2 group-hover:text-sage-600 transition-colors duration-200">
                {item.question}
              </span>
              {/* Animated plus/minus icon */}
              <span
                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-sage-200/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-all duration-300 ${
                  isOpen ? "rotate-45 bg-sage-900" : "bg-sage-50"
                }`}
                aria-hidden="true"
              >
                <svg
                  className={`w-4 h-4 transition-colors duration-300 ${
                    isOpen ? "text-white" : "text-sage-600"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>

            {/* Smooth expand/collapse using CSS grid trick */}
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-btn-${item.id}`}
              className={`accordion-content ${isOpen ? "open" : ""}`}
            >
              <div>
                <p className="px-5 pb-5 text-sm leading-6 text-muted lg:px-7 lg:pb-7 lg:text-base lg:leading-7">
                  {item.answer}
                </p>
              </div>
            </div>
          </MotionStaggerItem>
        );
      })}
    </MotionStagger>
  );
}
