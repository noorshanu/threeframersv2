"use client";

import { useState, type ReactNode } from "react";

type AccordionItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-dark bg-surface-elevated">
      <button
        type="button"
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`}
          aria-hidden
        >
          <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6">
            <path
              d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5">
            <p className="text-grey-2">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type AccordionProps = {
  items: ReadonlyArray<{ question: string; answer: string }>;
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
}

export function HighlightQuote({
  quote,
  highlight,
  highlightClass,
}: {
  quote: string;
  highlight: string;
  highlightClass: string;
}) {
  if (!highlight) {
    return <>{quote}</>;
  }

  const parts = quote.split(highlight);
  const nodes: ReactNode[] = [];

  parts.forEach((part, index) => {
    nodes.push(part);
    if (index < parts.length - 1) {
      nodes.push(
        <span key={index} className={highlightClass}>
          {highlight}
        </span>
      );
    }
  });

  return <>{nodes}</>;
}
