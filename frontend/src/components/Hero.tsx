import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="relative h-[100svh]">
      <img
        src="/src/assets/Herobg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 container mx-auto h-full flex items-center px-4 ml-6 gap-100">
        <p className="text-6xl font-[Halenoir] font-bold max-w-[500px] text-left">Revolutionize Your <span className="italic text-[#799C9C]"> Church </span> Administration</p>
        <div className="flex flex-col justify-end">
            <p className="max-w-[400px] text-xl text-right">Simplify church management with our modernized church administration system.</p>
            <Button className="w-[50%] mt-4 bg-black hover:bg-[#5e7f7f] text-white text-md font-[Halenoir] font-medium rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition">Get Started</Button>
        </div>
      </div>
    </section>
  )
}
