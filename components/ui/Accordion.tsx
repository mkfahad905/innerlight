"use client";

import { useState } from "react";
import type { FAQ } from "@/types";

interface AccordionProps {
  items: FAQ[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen ? "border-sage-300 shadow-[var(--shadow-card)]" : "border-beige-200"
            }`}
          >
            <button
              id={`faq-btn-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-inset group"
            >
              <span className="font-semibold text-sage-900 text-base sm:text-lg pr-2 group-hover:text-sage-600 transition-colors duration-200">
                {item.question}
              </span>
              {/* Animated plus/minus icon */}
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-sage-500 rotate-45" : "bg-sage-100"
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
                <p className="px-6 pb-6 text-muted leading-relaxed text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
