import FaqAccordion from "../FaqAccordion";
import data from "@/data/faq.json";

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 md:px-0 py-12 md:py-16">
      <p className="text-xs tracking-widest text-gray-500">FAQ</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900">
        Got questions?<br />We have got the answer
      </h2>

      <div className="mt-6 md:mt-8">
        <FaqAccordion items={data} />
        {/* or <FaqAccordion items={data} allowMultiple /> */}
      </div>
    </section>
  );
}
