import * as React from "react";
import TestimonialScroller from "@/components/TestimonialScroller";
import data from "@/data/testimonials.json"; // TS: needs resolveJsonModule

export default function TestimonialsSection() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-xs tracking-widest text-gray-500">TESTIMONIAL</p>
        <h3 className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900">
          Stories from our users
        </h3>
      </div>

      <div className="mt-6 md:mt-8">
        <TestimonialScroller items={data} />
      </div>
    </div>
  );
}
