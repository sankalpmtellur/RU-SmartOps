import { Home, Users, Droplets, Wind, TreePine, Truck, Sun, Trash2, Activity, Trophy, Building2, Map } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Dashboard Overview", icon: Home, path: "/dashboard" },
  { name: "Classroom Occupancy", icon: Users, path: "/occupancy" },
  { name: "Air Quality Monitor", icon: Wind, path: "/air-quality" },
  { name: "Urban Heat Island", icon: Sun, path: "/heat-island" },
  { name: "Toilet Hygiene Monitor", icon: Droplets, path: "/toilets" },
  { name: "Cafeteria Waste Analytics", icon: Trash2, path: "/waste" },
  { name: "Energy / Solar Efficiency", icon: Activity, path: "/solar" },
  { name: "Water Usage Tracker", icon: Droplets, path: "/water" },
  { name: "Sports Facility Usage", icon: Trophy, path: "/sports" },
  { name: "Tree Canopy Mapping", icon: TreePine, path: "/trees" },
  { name: "Accident Blackspot Study", icon: Truck, path: "/traffic" },
  { name: "Campus Buildings Audit", icon: Building2, path: "/buildings" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r shadow-sm h-screen fixed left-0 top-0 z-50 flex flex-col">
      <div className="h-20 flex items-center justify-center border-b">
        <h1 className="text-xl font-semibold text-red-600">RU SmartOps</h1>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {menuItems.map(({ name, icon: Icon, path }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={name}
              to={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all 
              ${active ? "bg-orange-100 text-orange-700 font-semibold" : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"}`}
            >
              <Icon size={20} />
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}