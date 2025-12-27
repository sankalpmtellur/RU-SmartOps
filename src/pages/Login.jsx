import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useState } from "react";
import { FiArrowRight, FiUser, FiKey, FiChevronLeft, FiShield } from "react-icons/fi";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const brandSaffron = "#D95F23";
    const brandCrimson = "#A50034";

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => navigate("/dashboard"), 800);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 font-sans antialiased text-slate-900">

            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#A50034] via-[#D95F23] to-[#A50034]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[480px]"
            >
                {/* Top Navigation outside the card */}
                <div className="mb-6 flex justify-between items-center px-2">
                    <Link to="/" className="group flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-all text-[11px] font-bold uppercase tracking-widest">
                        <FiChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back
                    </Link>
                    <div className="flex items-center gap-2 opacity-60">
                        <FiShield className="text-[10px]" style={{ color: brandCrimson }} />
                        <span className="text-[10px] tracking-[3px] font-black uppercase">Auth Gate</span>
                    </div>
                </div>

                {/* MAIN LOGIN CARD */}
                <div className="bg-white border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] rounded-[32px] overflow-hidden">

                    <div className="p-10 md:p-12">
                        {/* Logo & Header */}
                        <div className="mb-10 text-center">
                            <img src={logo} className="h-16 mx-auto mb-6 object-contain" alt="Rishihood University" />
                            <h1 className="text-3xl font-black tracking-tight text-slate-900 leading-tight">
                                Admin <span style={{ color: brandCrimson }}>SmartOps</span>
                            </h1>
                            <p className="text-slate-400 text-sm font-medium mt-2 uppercase tracking-wider">Secure Access Portal</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleLogin} className="space-y-5">

                            {/* Username Input */}
                            <div className="group">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 ml-1">
                                    Username or Email ID
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiUser className="text-slate-500 group-focus-within:text-[#D95F23] transition-colors" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        placeholder="username or email"
                                        className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-orange-500/5 focus:border-[#D95F23] focus:bg-white transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="group">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 ml-1">
                                    Security Key
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiKey className="text-slate-500 group-focus-within:text-[#D95F23] transition-colors" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-orange-500/5 focus:border-[#D95F23] focus:bg-white transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {/* Login Button */}
                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={loading}
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 py-4.5 px-6 rounded-2xl text-white font-bold text-lg transition-all group shadow-lg mt-6"
                                style={{ background: `linear-gradient(135deg, ${brandCrimson} 0%, ${brandSaffron} 100%)` }}
                            >
                                {loading ? (
                                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <span>Authorize Access</span>
                                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </motion.button>
                        </form>

                        {/* Restricted Area Message */}
                        <div className="mt-10 pt-8 border-t border-slate-100">
                            <p className="text-[10px] text-slate-500 text-center leading-relaxed font-bold uppercase tracking-widest">
                                Authorized Personnel Only <br />
                                <span className="text-slate-500 font-medium">Session monitoring is active</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* External Help Links */}
                <div className="mt-8 flex justify-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">
                    <button className="hover:text-[#A50034] transition-colors">Credential Help</button>
                    <button className="hover:text-[#A50034] transition-colors">Technical Support</button>
                </div>
            </motion.div>
        </div>
    );
}