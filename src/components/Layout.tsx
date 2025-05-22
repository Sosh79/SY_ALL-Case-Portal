
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-12 animate-fade-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
