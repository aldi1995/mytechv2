import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/mytech_indonesia/?hl=en", icon: Instagram },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/renaldi-widakdo-387153197/", icon: Linkedin },
  ];

  const quickLinks = [
    { name: "Portfolio", url: "/portfolio" },
    { name: "Pricing", url: "/pricing" },
    { name: "Our Services", url: "/services" },
    { name: "SaaS Products", url: "/product" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-slate-950 dark:from-slate-900 dark:to-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                MyTech Indonesia
              </span>
            </div>
            <p className="text-slate-300 dark:text-slate-400 leading-relaxed">
              Turning digital visions into reality. We create innovative solutions
              that help businesses grow in the digital era.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-5 h-5 text-slate-300 dark:text-slate-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-slate-300 dark:text-slate-400 hover:text-sky-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-300 dark:text-slate-400">
                <Phone className="w-5 h-5 mr-3 text-sky-400" />
                <a
                  href="tel:+6285156928164"
                  className="hover:text-sky-400 transition-colors duration-200"
                >
                  +62 851-5692-8164
                </a>
              </li>

              <li className="flex items-center text-slate-300 dark:text-slate-400">
                <Mail className="w-5 h-5 mr-3 text-sky-400" />
                <a
                  href="mailto:hello@mytech-indonesia.web.id"
                  className="hover:text-sky-400 transition-colors duration-200"
                >
                  hello@mytech-indonesia.web.id
                </a>
              </li>

              <li className="flex items-start text-slate-300 dark:text-slate-400">
                <MapPin className="w-5 h-5 mr-3 text-sky-400 mt-1" />
                <a
                  href="https://www.google.com/maps?q=Jl.+Cipedes+Tengah+No.35,+Sukagalih,+Sukajadi,+Bandung,+Jawa+Barat+40163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors duration-200 leading-relaxed"
                >
                  Jl. Cipedes Tengah No.35, Sukagalih, Sukajadi District,
                  <br />
                  Bandung City, West Java 40163
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Newsletter
            </h3>
            <p className="text-slate-300 dark:text-slate-400">
              Subscribe to our newsletter to receive updates and the latest insights.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 dark:bg-slate-800 border border-white/10 dark:border-slate-700 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-slate-400 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 dark:text-slate-500 text-sm">
              © {currentYear} PT. MYTECH TEKNOLOGI INDONESIA | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
