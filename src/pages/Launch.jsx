import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { HiArrowRight } from "react-icons/hi2";
import { FiGrid, FiBarChart2, FiLock } from "react-icons/fi";

export default function Launch() {
    const brandSaffron = "#D95F23";
    const brandCrimson = "#A50034";

    return (
        <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-orange-100 overflow-x-hidden">

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-orange-50/40 to-transparent rounded-full blur-[120px]" />
                <div className="absolute bottom-[5%] right-[-5%] w-80 h-80 bg-red-50 rounded-full blur-[100px] opacity-70" />
            </div>

            {/* Header */}
            <nav className="relative z-10 flex justify-between items-center px-10 py-8 max-w-7xl mx-auto">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={logo}
                    alt="Rishihood University"
                    className="h-14 w-auto"
                />
                <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">System Active</span>
                </div>
            </nav>

            <main className="relative z-10 flex flex-col items-center justify-center pt-16 pb-20 px-6">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-5xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm mb-8"
                    >
                        <FiLock className="text-xs" style={{ color: brandCrimson }} />
                        <span className="text-[11px] font-bold tracking-widest uppercase text-slate-500">
                            Internal Administrator Gateway
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-[100px] font-black tracking-tight leading-[0.9] mb-8">
                        RU <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#A50034] via-[#D95F23] to-[#D95F23]">SmartOps</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        The central nervous system for institutional progress. Monitor project lifecycles, manage administrative interfaces, and synchronize innovation across <span className="font-semibold text-slate-900 underline decoration-orange-200 underline-offset-4">Rishihood University.</span>
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Link
                            to="/login"
                            style={{ backgroundColor: brandSaffron }}
                            className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-2xl text-white font-bold text-xl shadow-[0_25px_60px_-15px_rgba(217,95,35,0.4)] hover:shadow-[0_30px_70px_-10px_rgba(217,95,35,0.5)] transition-all"
                        >
                            Access Admin Panel
                            <HiArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Admin-Centric Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-28">
                    <FeatureCard
                        icon={<FiGrid />}
                        title="Unified Repository"
                        desc="One central vault for every ongoing project UI and backend system within the university."
                    />
                    <FeatureCard
                        icon={<FiBarChart2 />}
                        title="Institutional Oversight"
                        desc="High-level visibility into project health, deployment status, and cross-departmental synergy."
                        highlight
                    />
                    <FeatureCard
                        icon={<FiLock />}
                        title="Restricted Governance"
                        desc="Exclusive administrative control. Ensuring system integrity and secure project management."
                    />
                </div>

                {/* Footer */}
                <footer className="mt-40 w-full max-w-6xl">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8" />
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[11px] font-medium tracking-widest uppercase">
                        <p>© {new Date().getFullYear()} Rishihood University — SmartOps</p>
                        <div className="flex gap-10">
                            <span className="hover:text-slate-800 transition-colors cursor-pointer tracking-[0.2em]">Security Protocol</span>
                            <span className="hover:text-slate-800 transition-colors cursor-pointer tracking-[0.2em]">System Status</span>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}

function FeatureCard({ icon, title, desc, highlight }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className={`relative p-10 rounded-[32px] border ${highlight
                    ? 'border-orange-100 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]'
                    : 'border-slate-100 bg-white/50 backdrop-blur-sm'
                } transition-all duration-300`}
        >
            <div className="text-3xl mb-6 inline-flex p-4 rounded-2xl bg-slate-50 text-[#A50034]">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">{desc}</p>
        </motion.div>
    );
}