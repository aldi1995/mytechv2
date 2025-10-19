import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ menu utama + dropdown
  const menuItems = [
    { title: "Beranda", href: "/" },
    { title: "Tentang Kami", href: "/about" },
    { title: "Team Kami", href: "/team" },
    { title: "Blog", href: "/blog" },
    {
      title: "Layanan",
      children: [
        { title: "Website", href: "/web" },
        { title: "Aplikasi Mobile", href: "/mobileapps" },
        { title: "Konsultasi IT", href: "/consulting" },
        { title: "SaaS", href: "/product" },
        { title: "Harga", href: "/pricing" },
      ],
    },
    {
      title: "Portofolio",
      children: [
        { title: "Website Klien", href: "/portfolio" },
        { title: "Aplikasi Android", href: "/mobile" },
      ],
    },
    { title: "Kontak", href: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              MyTech Indonesia
            </span>
          </Link>

          {/* Navigasi Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item, idx) =>
                item.children ? (
                  <div key={idx} className="relative group">
                    <button className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                      <ChevronDown
                        size={16}
                        className="ml-1 group-hover:rotate-180 transition-transform"
                      />
                    </button>

                    {/* Dropdown fix hover */}
                    <div
                      className="absolute left-0 top-full mt-2 w-52 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="group relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item.title}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-500 transform origin-left transition-transform duration-300 ${
                        location.pathname === item.href
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Tombol menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100/50 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigasi Mobile */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto max-h-screen overflow-y-auto"
            : "opacity-0 pointer-events-none max-h-0 overflow-y-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item, idx) =>
            item.children ? (
              <div key={idx}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  {item.title}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openDropdown === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === idx && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        to={child.href}
                        className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-sm"
                        onClick={closeMenu}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.title}
                to={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "text-blue-600 bg-blue-50"
                    : ""
                }`}
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            )
          )}

          <Link
            to="/contact"
            className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-lg font-medium text-base hover:from-blue-500 hover:to-sky-500 transition-all duration-300 text-center shadow-md hover:shadow-sky-500/25"
            onClick={closeMenu}
          >
            Mulai Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
