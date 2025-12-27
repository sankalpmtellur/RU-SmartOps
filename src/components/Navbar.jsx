import { useLocation, useNavigate } from "react-router-dom";
import { LogOut, Bell, Settings, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const brandCrimson = "#A50034";

    const pageTitleMap = {
        "/dashboard": "System Overview",
        "/occupancy": "Occupancy Intelligence",
        "/air-quality": "Environmental Quality",
        "/heat-island": "Thermal Mapping",
        "/toilets": "Hygiene Compliance",
        "/waste": "Waste Management",
        "/solar": "Renewable Energy",
        "/water": "Resource Consumption",
        "/sports": "Athletic Infrastructure",
        "/trees": "Eco-Canopy Analysis",
        "/traffic": "Mobility & Safety",
        "/buildings": "Structural Audit",
    };

    const title = pageTitleMap[location.pathname] || "Control Center";

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <header className="fixed top-0 left-72 right-0 h-24 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-10 z-40">
            
            {/* Title & Breadcrumb */}
            <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    <span>Main Console</span>
                    <span>/</span>
                    <span style={{ color: brandCrimson }}>{title.split(' ')[0]}</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    {title}
                </h2>
            </div>

            {/* Actions Area */}
            <div className="flex items-center gap-6">

                {/* Profile/Logout Dropdown Look */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLogout}
                    className="flex items-center gap-3 pl-4 pr-5 py-2.5 rounded-2xl border border-slate-300 bg-white hover:bg-red-50 hover:border-red-300 transition-all group"
                >
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <LogOut size={16} />
                    </div>
                    <span className="text-sm font-bold text-slate-600 group-hover:text-red-600 transition-colors">
                        Terminal Exit
                    </span>
                </motion.button>
            </div>
        </header>
    );
}