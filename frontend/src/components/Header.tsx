import FluidGlass from "@/components/FluidGlass"

export default function Header() {
  return (
    <header  className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <FluidGlass className="mx-auto max-w-5xl rounded-full">
        <div className="flex items-center gap-8 px-6 py-3">
          <div className="text-2xl font-[Coolvetica] font-extrabold flex flex-row gap-2">
            <img src="/src/assets/Nehemiah-Logo.png  " alt="logo" className="w-8 text-[#799C9C]" />
            Nehemiah
          </div>
          <nav className="ml-auto hidden md:flex items-center gap-8">
            <a className="hover:opacity-80" href="#">Home</a>
            <a className="hover:opacity-80" href="#">About</a>
            <a className="hover:opacity-80" href="#">Contact</a>
            <button className="rounded-xl px-4 py-2 font-medium bg-zinc-900 text-white shadow hover:shadow-lg transition hover:bg-[#5e7f7f]">
              Get Started
            </button>
          </nav>
        </div>
      </FluidGlass>
    </header>
  )
}
