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

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// ✅ Hanya Hero (tanpa About, Services, Portfolio, Contact)
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
