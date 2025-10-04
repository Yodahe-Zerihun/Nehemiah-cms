import * as React from "react";

export type Testimonial = {
  id: string;
  rating: number;          // 1..5
  quote: string;
  name: string;
  title?: string;
  avatarUrl?: string;
};

export default function TestimonialCard({
  rating,
  quote,
  name,
  title,
  avatarUrl,
}: Testimonial) {
  return (
    <article
      className="
        snap-start shrink-0 w-[320px] sm:w-[360px] md:w-[420px]
        rounded-2xl border border-[#799C9C] bg-white
        p-5 md:p-6 shadow-sm
      "
      aria-label={`Testimonial by ${name}`}
    >
      {/* Stars */}
      <div className="mb-4 flex" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={`h-5 w-5 ${i < rating ? "fill-amber-300" : "fill-gray-200"}`}
            aria-hidden="true"
          >
            <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 leading-relaxed">{quote}</p>

      {/* Person */}
      <div className="mt-5 flex items-center gap-3">
        <img
          src={avatarUrl || "/avatars/placeholder.png"}
          alt=""
          className="h-9 w-9 rounded-full object-cover ring-1 ring-gray-200"
          loading="lazy"
        />
        <div>
          <div className="text-sm font-medium text-gray-900 text-left">{name}</div>
          {title && <div className="text-xs text-gray-500 text-left">{title}</div>}
        </div>
      </div>
    </article>
  );
}
