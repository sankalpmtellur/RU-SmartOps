import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] flex font-sans antialiased">
      {/* Fixed Sidebar - Width matched to Sidebar.jsx (w-72) */}
      <Sidebar />

      {/* Main Container */}
      <div className="flex-1 ml-72 flex flex-col relative">
        
        {/* Fixed Navbar - Height matched to Navbar.jsx (h-24) */}
        <Navbar />

        {/* Scrollable Content Area 
            - pt-24 matches Navbar height
            - flex-1 ensures main takes up available height for the Footer to push down
        */}
        <main className="pt-24 flex-1 flex flex-col">
          <div className="px-10 py-8 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer - Positioned at the bottom of the scroll flow */}
          <Footer />
        </main>
      </div>

      {/* Global Background Glow (Subtle) */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-orange-50/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
}