import React, { useState } from "react";
import {
  Globe,
  ShoppingCart,
  Settings,
  BarChart3,
  ArrowUpRight,
  CheckCircle2,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      title: "Company Profile Website",
      description:
        "Build your company’s professional image with an elegant, fast, and fully responsive website.",
      icon: Globe,
      gradient: "from-blue-700 to-blue-800",
      features: [
        "Responsive & modern design",
        "Speed and SEO optimization",
        "Easy content management",
      ],
    },
    {
      title: "Custom Web System",
      description:
        "Tailor-made web-based solutions built to fit your business — from internal dashboards to reservation systems.",
      icon: Settings,
      gradient: "from-blue-800 to-blue-700",
      features: ["API & database integration", "High security", "Multi-user access"],
    },
    {
      title: "E-Commerce Website",
      description:
        "Boost your online sales with a fast, secure, and user-friendly digital store.",
      icon: ShoppingCart,
      gradient: "from-blue-700 to-blue-600",
      features: [
        "Shopping cart & online payments",
        "Product & stock management",
        "Automated sales reports",
      ],
    },
    {
      title: "Maintenance & SEO",
      description:
        "Keep your website running at its best with regular maintenance, system updates, and up-to-date SEO strategies.",
      icon: BarChart3,
      gradient: "from-blue-600 to-blue-700",
      features: [
        "System & plugin updates",
        "Performance & SEO optimization",
        "Regular backups & security checks",
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Background blob */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-blue-700 text-white shadow-lg mb-8 group transition-colors">
            <span className="text-sm font-medium">Website Services</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-6xl">
            Professional Website Solutions for
            <span className="block mt-2 bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
              Businesses and Organizations
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            We help you build a strong digital presence — from design to management, all tailored to your needs.
          </p>
        </div>

        {/* Service Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-700"
            >
              <div className="relative space-y-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                >
                  <service.icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2 text-blue-700 dark:text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
                  <button className="group inline-flex items-center text-sm font-medium text-slate-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 flex flex-col items-center">
          <div className="w-full max-w-2xl p-8 rounded-3xl bg-slate-900 dark:bg-blue-800 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-800/10 dark:from-slate-800/30 dark:to-slate-900/30" />

            <div className="relative space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Ready to Build Your Dream Website?
              </h3>
              <p className="text-slate-400 dark:text-slate-300">
                Contact our team for a free consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 rounded-full bg-white text-slate-900 font-medium hover:shadow-lg hover:shadow-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-8 py-4 rounded-full border-2 border-slate-700 text-white font-medium hover:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-300"
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn transition-colors duration-300">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Schedule a Consultation
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Fill out the form below and our team will reach out to you shortly.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                rows="4"
                placeholder="Tell us about your website needs..."
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium transition-all"
              >
                Send Consultation Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
