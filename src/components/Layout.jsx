import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 ml-64">
        <Navbar />

        {/* Scrollable content */}
        <main className="pt-24 pb-6 px-8 min-h-screen">
          {children}
          <Footer />   {/* <= added here */}
        </main>
      </div>
    </div>
  );
}