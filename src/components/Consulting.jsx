import React, { useState } from "react";
import {
  Laptop,
  Network,
  Cloud,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesConsulting = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      title: "Business Needs Analysis",
      description:
        "Identify your IT requirements accurately to achieve efficiency and scalability for your business.",
      icon: Laptop,
      gradient: "from-blue-600 to-sky-500",
      features: [
        "System & infrastructure audit",
        "Software requirements mapping",
        "Comprehensive analysis documentation",
      ],
    },
    {
      title: "Digital Transformation Strategy",
      description:
        "Develop your company’s digitalization roadmap to thrive in the Industry 4.0 era.",
      icon: Network,
      gradient: "from-sky-600 to-blue-600",
      features: [
        "Corporate digitalization roadmap",
        "System integration & process automation",
        "IT implementation support",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Enhance business performance with secure and efficient cloud-based solutions.",
      icon: Cloud,
      gradient: "from-blue-500 to-sky-500",
      features: [
        "Migration to AWS / GCP / Azure",
        "Server management & backup",
        "Infrastructure cost optimization",
      ],
    },
    {
      title: "Security & Compliance",
      description:
        "Ensure your business systems are protected and meet global security standards.",
      icon: ShieldCheck,
      gradient: "from-sky-600 to-blue-600",
      features: [
        "Security assessment & penetration testing",
        "ISO 27001 & GDPR compliance",
        "Monitoring & alert systems",
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120%] h-[400px] bg-blue-100/40 dark:bg-blue-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white dark:bg-blue-700 shadow-lg mb-8">
            <span className="text-sm font-medium tracking-wide">
              IT Consulting Services
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            IT Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent">
              Your Digital Business Transformation
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We help you design, optimize, and secure IT systems to ensure your
            business runs efficiently and is ready for the future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/30 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={28} />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="group inline-flex items-center text-sm font-medium text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-all">
                Learn More
                <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="relative bg-gradient-to-r from-slate-900 to-blue-900 dark:from-blue-800 dark:to-slate-900 p-10 rounded-3xl overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent)]" />
            <h3 className="text-2xl font-bold text-white relative z-10">
              Need Professional IT Guidance?
            </h3>
            <p className="text-slate-300 mt-3 relative z-10">
              Consult your IT needs with our team of experts.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-200 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-all"
              >
                Contact Us
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="px-8 py-4 rounded-full border-2 border-white text-white font-medium hover:bg-white/10 transition-all"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn transition-all duration-300">
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
              Tell us about your IT needs — our team is ready to help from
              analysis to implementation.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                rows="4"
                placeholder="Describe your needs..."
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-sky-600 transition-all"
              >
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesConsulting;
