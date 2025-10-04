import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  number: number | string;
  title: string;
  Icon: LucideIcon;           // or: icon: React.ReactNode
  className?: string;
};

export default function FeatureCard({ number, title, Icon, className }: FeatureCardProps) {
  const num = typeof number === "number" ? String(number).padStart(2, "0") : number;

  return (
    <div className={`rounded-2xl max-w-[200px] border border-[#799C9C]/60 bg-white p-5  hover:shadow-md hover:shadow-[#799C9C]/20 ${className ?? ""}`}>
      <div className="flex items-start justify-between">
        <span className="text-lg font-semibold text-[#799C9C]">{num}</span>
        <Icon className="h-5 w-5 text-slate-700" aria-hidden />
      </div>
      <h3 className="mt-6 max-w-[200px] text-left text-lg font-semibold leading-tight text-slate-900">
        {title}
      </h3>
    </div>
  );
}
