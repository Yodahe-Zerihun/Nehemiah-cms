export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full mx-auto">
      <div className="max-w-6xl mx-auto px-4 py-4 text-center text-slate-200 text-sm font-[Halenoir] font-light">
        <p>&copy; {new Date().getFullYear()} Nehemiah Creative Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}