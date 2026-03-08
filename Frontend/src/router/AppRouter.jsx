import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "../component/ScrollToTop";
import Navbar from "../layout/Navbar"; 
import Home from "../pages/Home";
import About from "../pages/AboutUs";
import ContactMe from "../pages/ContactMe";
import Projects from "../pages/Projects";
import ProtectedRoute from "../component/ProtectedRoute";
import AdminLogin from "../admin/AdminLogin"; 
import AdminDashboard from "../pages/AdminDashboard"; 
const NavbarWrapper = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/admin", "/admin/dashboard"];
  
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return !shouldHideNavbar ? <Navbar /> : null;
};

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <NavbarWrapper />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/projects" element={<Projects />} />   
        <Route path="/admin" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}