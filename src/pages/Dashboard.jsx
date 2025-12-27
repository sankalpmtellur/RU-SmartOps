import { Link } from "react-router-dom";
import { Users, Wind, Sun, Droplets, Trash2, Activity, Trophy, TreePine, Truck, Building2 } from "lucide-react";

const modules = [
  { name: "Classroom Occupancy", value: "Live Status", icon: Users, path: "/occupancy", color: "bg-orange-100 text-orange-700 border-orange-300" },
  { name: "Air Quality Monitor", value: "PM2.5 / PM10", icon: Wind, path: "/air-quality", color: "bg-blue-100 text-blue-700 border-blue-300" },
  { name: "Urban Heat Island", value: "Campus Temp Map", icon: Sun, path: "/heat-island", color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
  { name: "Toilet Hygiene Monitor", value: "Cleanliness Index", icon: Droplets, path: "/toilets", color: "bg-teal-100 text-teal-700 border-teal-300" },
  { name: "Cafeteria Waste Analytics", value: "Daily Waste", icon: Trash2, path: "/waste", color: "bg-red-100 text-red-700 border-red-300" },
  { name: "Solar / Energy Efficiency", value: "Output: kW", icon: Activity, path: "/solar", color: "bg-green-100 text-green-700 border-green-300" },
  { name: "Water Usage Tracker", value: "Liters Today", icon: Droplets, path: "/water", color: "bg-indigo-100 text-indigo-700 border-indigo-300" },
  { name: "Sports Facility Usage", value: "Users Today", icon: Trophy, path: "/sports", color: "bg-purple-100 text-purple-700 border-purple-300" },
  { name: "Tree Canopy Mapping", value: "Drone Coverage", icon: TreePine, path: "/trees", color: "bg-emerald-100 text-emerald-700 border-emerald-300" },
  { name: "Accident / Traffic Blackspot", value: "Alerts", icon: Truck, path: "/traffic", color: "bg-gray-100 text-gray-700 border-gray-300" },
  { name: "Campus Buildings Audit", value: "Energy Rating", icon: Building2, path: "/buildings", color: "bg-slate-100 text-slate-700 border-slate-300" },
];

export default function Dashboard() {
  return (
    <div className="w-full">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">RU SmartOps – Admin Overview</h1>
        <p className="text-gray-500 text-sm mt-1">Live status & insights of all IoT + Impact systems inside Rishihood University</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map(({ name, value, icon: Icon, path, color }) => (
          <Link
            key={name}
            to={path}
            className={`border rounded-xl p-5 shadow-sm hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 ${color}`}
          >
            <div className="flex items-center justify-between">
              <Icon size={32} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{name}</h3>
            <p className="text-sm mt-1 opacity-80">{value}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}