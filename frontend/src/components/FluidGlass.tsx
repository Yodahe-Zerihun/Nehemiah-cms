// src/components/FluidGlass.tsx
import type { ReactNode } from "react"

type Props = {
  className?: string
  children?: ReactNode
}

export default function FluidGlass({ className = "", children }: Props) {
  return (
    <div
      className={[
        "relative isolate overflow-hidden",
        "rounded-3xl border border-white/20",
        "bg-white/10 backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.15)] ring-1 ring-black/5",
        className,
      ].join(" ")}
    >
      {/* Light blobs / highlights */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/30 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-300/30 blur-2xl" />
        {/* Optional subtle noise / grain */}
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />
      </div>

      <div className="relative">{children}</div>
    </div>
  )
}
