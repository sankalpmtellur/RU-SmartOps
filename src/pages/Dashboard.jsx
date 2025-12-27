import { Link } from "react-router-dom";
import { 
  Users, Wind, Sun, Droplets, Trash2, Activity, 
  Trophy, TreePine, Truck, Building2, ArrowUpRight, 
} from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  { name: "Classroom Occupancy", value: "84% Capacity", status: "Live", icon: Users, path: "/occupancy", trend: "+12%" },
  { name: "Air Quality Monitor", value: "AQI: 42 (Good)", status: "Optimal", icon: Wind, path: "/air-quality", trend: "Stable" },
  { name: "Urban Heat Island", value: "Avg 28°C", status: "Monitoring", icon: Sun, path: "/heat-island", trend: "-2°C" },
  { name: "Toilet Hygiene", value: "Level: High", status: "Clean", icon: Droplets, path: "/toilets", trend: "100%" },
  { name: "Cafeteria Waste", value: "124kg Total", status: "Analyzing", icon: Trash2, path: "/waste", trend: "-5%" },
  { name: "Solar Efficiency", value: "4.2 kW/h", status: "Generating", icon: Activity, path: "/solar", trend: "+18%" },
  { name: "Water Usage", value: "12.4k Liters", status: "Inflow", icon: Droplets, path: "/water", trend: "Normal" },
  { name: "Sports Facility", value: "42 Active Users", status: "Open", icon: Trophy, path: "/sports", trend: "Peak" },
  { name: "Tree Canopy", value: "64% Coverage", status: "Mapped", icon: TreePine, path: "/trees", trend: "Stable" },
  { name: "Traffic Safety", value: "0 Accidents", status: "Secure", icon: Truck, path: "/traffic", trend: "Safe" },
  { name: "Buildings Audit", value: "Grade: A+", status: "Verified", icon: Building2, path: "/buildings", trend: "Audit-Done" },
];

export default function Dashboard() {
  const brandCrimson = "#A50034";
  const brandSaffron = "#D95F23";

  return (
    <div className="w-full space-y-10">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Real-Time Intelligence</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Institutional <span style={{ color: brandCrimson }}>Overview</span>
          </h1>
          <p className="text-slate-500 text-sm mt-2 font-medium max-w-xl">
            Centralised monitoring of all IoT frameworks and impact-driven research systems across Rishihood University.
          </p>
        </div>
        
        {/* Quick Stats Banner */}
        <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex gap-8 px-8">
            <div className="text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Systems</p>
                <p className="text-xl font-black text-slate-900">11/11</p>
            </div>
            <div className="w-[1px] bg-slate-100 h-10"></div>
            <div className="text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Health</p>
                <p className="text-xl font-black text-green-500">98.2%</p>
            </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map(({ name, value, status, icon: Icon, path, trend }, index) => (
          <motion.div
            key={name}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Link to={path}>
              <div className="h-full bg-white border border-slate-100 p-6 rounded-[24px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all flex flex-col justify-between relative overflow-hidden">
                
                {/* Top: Icon & Status */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-[#D95F23] transition-colors">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Status</span>
                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-tight">{status}</span>
                  </div>
                </div>

                {/* Middle: Content */}
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <p className="text-xl font-black text-slate-900 tracking-tight">
                        {value}
                    </p>
                    <span className="text-[10px] font-bold text-orange-500">{trend}</span>
                  </div>
                </div>

                {/* Footer: Bottom Label */}
                <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">View Analytics</span>
                   <ArrowUpRight size={14} className="text-slate-400" />
                </div>

                {/* Subtle Hover Accent */}
                <div className="absolute top-0 right-0 w-1 h-full bg-[#A50034] translate-x-1 group-hover:translate-x-0 transition-transform"></div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}