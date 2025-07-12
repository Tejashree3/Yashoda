import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Add a short delay for smoother visual flow (optional)
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // enables smooth scroll
      });
    }, 100); // Delay of 100ms helps with smoother transitions

    return () => clearTimeout(timeout); // Clean up on unmount
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow transition-opacity duration-300 ease-in-out">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
