import * as React from "react";

export type Faq = {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

type Props = Faq & {
  isOpen: boolean;
  onToggle: () => void;
};

export function FaqItem({ id, question, answer, isOpen, onToggle }: Props) {
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
        className="group flex w-full items-center justify-between gap-6 py-4 text-left"
      >
        <span className="text-base md:text-lg text-gray-900">
          {question}
        </span>

        {/* plus icon that rotates to an “x” shape */}
        <span
          className="relative grid size-6 place-items-center"
          aria-hidden="true"
        >
          <span
            className={`absolute h-[2px] w-5 bg-gray-900 transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-gray-900 transition-transform duration-200 ${
              isOpen ? "-rotate-45" : "rotate-90"
            }`}
          />
        </span>
      </button>

      {/* animated content height */}
      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`button-${id}`}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 0}px` : 0
        }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div className="pb-4 text-sm md:text-base leading-relaxed text-[#799c9c]">
          {answer}
        </div>
      </div>
    </div>
  );
}
