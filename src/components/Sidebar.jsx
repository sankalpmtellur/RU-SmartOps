import { 
  Home, Users, Droplets, Wind, TreePine, 
  Truck, Sun, Trash2, Activity, Trophy, 
  Building2, ShieldCheck 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Dashboard Overview", icon: Home, path: "/dashboard" },
  { name: "Classroom Occupancy", icon: Users, path: "/occupancy" },
  { name: "Air Quality Monitor", icon: Wind, path: "/air-quality" },
  { name: "Urban Heat Island", icon: Sun, path: "/heat-island" },
  { name: "Toilet Hygiene", icon: Droplets, path: "/toilets" },
  { name: "Cafeteria Waste", icon: Trash2, path: "/waste" },
  { name: "Solar Efficiency", icon: Activity, path: "/solar" },
  { name: "Water Usage Tracker", icon: Droplets, path: "/water" },
  { name: "Sports Facility", icon: Trophy, path: "/sports" },
  { name: "Tree Canopy Mapping", icon: TreePine, path: "/trees" },
  { name: "Accident Blackspots", icon: Truck, path: "/traffic" },
  { name: "Campus Buildings", icon: Building2, path: "/buildings" },
];

export default function Sidebar() {
  const location = useLocation();
  const brandCrimson = "#A50034";
  const brandSaffron = "#D95F23";

  return (
    <aside className="w-72 bg-white border-r border-slate-100 h-screen fixed left-0 top-0 z-50 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      
      {/* Branding Header */}
      <div className="h-24 flex flex-col justify-center px-8 border-b border-slate-50">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} style={{ color: brandCrimson }} />
          <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
            Admin Console
          </span>
        </div>
        <h1 className="text-xl font-black tracking-tight text-slate-900 mt-1">
          RU <span style={{ color: brandCrimson }}>SmartOps</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-6 px-4 space-y-1">
        
        {menuItems.map(({ name, icon: Icon, path }) => {
          const active = location.pathname === path;
          
          return (
            <Link
              key={name}
              to={path}
              className="relative block"
            >
              <div
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 group
                ${active 
                  ? "text-slate-900 bg-slate-50 shadow-sm" 
                  : "text-slate-500 hover:text-[#D95F23] hover:bg-orange-50/50"}`}
              >
                {/* Active Indicator Bar */}
                {active && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute left-0 w-1 h-6 rounded-r-full"
                    style={{ backgroundColor: brandCrimson }}
                  />
                )}

                <Icon 
                  size={18} 
                  strokeWidth={active ? 2.5 : 2}
                  style={{ color: active ? brandCrimson : "inherit" }}
                  className="transition-colors group-hover:scale-110 duration-200"
                />
                <span className="tracking-tight">{name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-6 border-t border-slate-50 bg-slate-50/30">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#A50034] to-[#D95F23] flex items-center justify-center text-white text-[10px] font-bold">
            AD
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-900">Administrator</p>
            <p className="text-[10px] text-slate-400 font-medium tracking-tight">Main Campus</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for the sidebar scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #e2e2e2;
        }
      `}} />
    </aside>
  );
}