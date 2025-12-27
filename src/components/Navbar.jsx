import { useLocation, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    // Convert pathname → readable page title
    const pageTitleMap = {
        "/dashboard": "Dashboard Overview",
        "/occupancy": "Classroom Occupancy",
        "/air-quality": "Air Quality Monitor",
        "/heat-island": "Urban Heat Island Tracker",
        "/toilets": "Toilet Hygiene Monitor",
        "/waste": "Cafeteria Waste Analytics",
        "/solar": "Solar / Energy Efficiency",
        "/water": "Water Usage Tracker",
        "/sports": "Sports Facility Usage",
        "/trees": "Tree Canopy Mapping",
        "/traffic": "Accident / Traffic Blackspot",
        "/buildings": "Campus Buildings Audit",
    };

    const title = pageTitleMap[location.pathname] || "RU SmartOps";

    const handleLogout = () => {
        // Clear data later if needed
        navigate("/login");
    };

    return (
        <header className="fixed top-0 left-64 right-0 h-20 bg-white border-b shadow-sm flex items-center justify-between px-8 z-40">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

            <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-lg shadow"
            >
                <LogOut size={18} />
                Logout
            </button>
        </header>
    );
}
