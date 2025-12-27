import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Launch from "./pages/Launch";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// import Occupancy from "./pages/Occupancy";
// import AirQuality from "./pages/AirQuality";
// import Toilets from "./pages/Toilets";
// import Waste from "./pages/Waste";
// import Solar from "./pages/Solar";
// import Water from "./pages/Water";
// import Sports from "./pages/Sports";
// import HeatIsland from "./pages/HeatIsland";
// import Traffic from "./pages/Traffic";
// import Trees from "./pages/Trees";
// import Buildings from "./pages/Buildings";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Launch />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
                {/* <Route path="/occupancy" element={<Layout><Occupancy /></Layout>} />
        <Route path="/air-quality" element={<Layout><AirQuality /></Layout>} />
        <Route path="/toilets" element={<Layout><Toilets /></Layout>} />
        <Route path="/waste" element={<Layout><Waste /></Layout>} />
        <Route path="/solar" element={<Layout><Solar /></Layout>} />
        <Route path="/water" element={<Layout><Water /></Layout>} />
        <Route path="/sports" element={<Layout><Sports /></Layout>} />
        <Route path="/heat-island" element={<Layout><HeatIsland /></Layout>} />
        <Route path="/traffic" element={<Layout><Traffic /></Layout>} />
        <Route path="/trees" element={<Layout><Trees /></Layout>} />
        <Route path="/buildings" element={<Layout><Buildings /></Layout>} /> */}

            </Routes>
        </BrowserRouter>
    );
}