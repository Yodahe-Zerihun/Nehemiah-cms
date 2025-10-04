// FeaturesSection.tsx
import FeatureCard from "@/components/ui/FeatureCard"
import { User, PiggyBank, Calendar, Boxes, LineChart } from "lucide-react"

const CARDS = [
  // place each card explicitly on the grid (desktop up)
  {
    number: 1,
    title: "Member Management & Communication",
    Icon: User,
    placement: "md:col-start-2 md:row-start-2",
  },
  {
    number: 2,
    title: "Finance & Donation Tracking",
    Icon: PiggyBank,
    placement: "md:col-start-3 md:row-start-2",
  },
  {
    number: 3,
    title: "Event & Service Planning",
    Icon: Calendar,
    placement: "md:col-start-1 md:row-start-3",
  },
  {
    number: 4,
    title: "Asset & Resource Management",
    Icon: Boxes,
    placement: "md:col-start-2 md:row-start-3",
  },
  {
    number: 5,
    title: "Analytics & Engagement Insights",
    Icon: LineChart,
    placement: "md:col-start-3 md:row-start-3",
  },
];

export default function FeaturesSection() {
  return (
    <section className="mx-auto max-w-3xl pb-18 px-6 lg:px-16">

      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 auto-rows-min gap-x-6 gap-y-6">
        <p className="mt-4 text-[#799C9C] md:col-start-1 md:col-span-1 md:row-start-2">How it works</p>        

        <h2 className="md:col-start-2 md:col-span-2 md:row-start-1 mt-10 text-left text-xl md:text-2xl font-bold">
        More than a service.<br/>A strategic administration partner.
        </h2>


        {CARDS.map(({ placement, ...card }) => (
          <FeatureCard
            key={card.number}
            {...card}
            className={placement}       // <- positioning
          />
        ))}
      </div>
    </section>
  );
}
