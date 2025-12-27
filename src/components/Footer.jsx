export default function Footer() {
  const brandCrimson = "#A50034";

  return (
    <footer className="w-full mt-auto py-8 px-10 border-t border-slate-100 bg-white/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
            Institutional <span style={{ color: brandCrimson }}>Intelligence</span>
          </p>
          <p className="text-xs font-medium text-slate-500 mt-1">
            © {new Date().getFullYear()} RU SmartOps • Rishihood University
          </p>
        </div>

        {/* Center: Impact Tagline */}
        <div className="hidden lg:block">
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    System Synchronised
                </span>
            </div>
        </div>

        {/* Right Side: Version & Links */}
        <div className="flex flex-col items-center md:items-end">
          <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
            <button className="hover:text-slate-900 transition-colors tracking-[0.3em]">Privacy</button>
            <button className="hover:text-slate-900 transition-colors tracking-[0.3em]">Guidelines</button>
          </div>
          <p className="text-[10px] font-medium text-slate-300">
            Internal Version 2.4.0-A
          </p>
        </div>
      </div>
    </footer>
  );
}