import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Services from "./components/Services";
import Web from "./components/Web";
import MobileApps from "./components/MobileApps";
import Consulting from "./components/Consulting";
import Portfolio from "./components/Portfolio";
import Mobile from "./components/Mobile";
import Product from "./components/Product";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Scroll ke atas setiap ganti route
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

// Layout utama (Navbar + Footer + Tawk.to)
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Tawk.to Script
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/68f4ed4e5eca4d194faab6d3/1j7ubtv00";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// Halaman
const HomePage = () => <Hero />;
const AboutPage = () => <About />;
const ServicesPage = () => <Services />;
const PortfolioPage = () => <Portfolio />;
const ContactPage = () => <Contact />;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/web" element={<Web />} />
          <Route path="/mobileapps" element={<MobileApps />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
