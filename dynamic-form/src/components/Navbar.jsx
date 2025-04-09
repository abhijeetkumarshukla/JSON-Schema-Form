import { Sparkles, Github } from "lucide-react";

const Navbar = () => (
    <nav className="bg-sky-100/60 backdrop-blur-md border-b border-sky-200 text-sky-800 py-4 px-6 shadow-sm">

    <div className="max-w-6xl mx-auto flex items-center justify-between">
      {/* Logo / Title */}
      <div className="flex items-center gap-2 text-2xl font-semibold">
        <Sparkles size={28} className="text-white" />
        Form Wizard
      </div>

      
      <a
        href="https://github.com/abhijeetkumarshukla"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white hover:text-gray-100 transition"
      >
        <Github size={22} />
        <span className="hidden sm:inline">GitHub</span>
      </a>
    </div>
  </nav>
);

export default Navbar;
