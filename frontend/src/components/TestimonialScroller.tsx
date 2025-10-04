import * as React from "react";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = { items: Testimonial[]; title?: string; };

export default function TestimonialScroller({ items, title }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    ref.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6">
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-6">
          {title}
        </h2>
      )}

      <div className="relative">
        {/* Left button */}
        <button
          type="button"
          onClick={() => scrollBy(-400)}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 z-10
            hidden md:grid h-10 w-10 place-items-center rounded-full border bg-white shadow
            hover:bg-gray-50 focus:outline-none focus:ring-[#799c9c]/20 text-[#799c9c]
          "
          aria-label="Scroll testimonials left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Scroll container */}
        <div
          ref={ref}
          className="
            overflow-x-auto overscroll-x-contain
            [scrollbar-width:none] [-ms-overflow-style:none]
            snap-x snap-mandatory
            scroll-smooth
            pl-1
          "
          // hide scrollbar (Firefox + WebKit)
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-4 md:gap-6 pr-4">
            {items.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>

        {/* Right button */}
        <button
          type="button"
          onClick={() => scrollBy(400)}
          className="
            absolute right-0 top-1/2 -translate-y-1/2 z-10
            hidden md:grid h-10 w-10 place-items-center rounded-full border bg-white shadow
            hover:bg-gray-50 focus:outline-none focus:ring-[#799c9c]/20 text-[#799c9c]
          "
          aria-label="Scroll testimonials right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
