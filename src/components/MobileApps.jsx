import React, { useState } from "react";
import {
  Smartphone,
  Code2,
  Rocket,
  Settings2,
  ArrowUpRight,
  CheckCircle2,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesMobile = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      title: "Android & iOS Applications",
      description:
        "Build professional mobile apps to reach users on both Android and iOS platforms seamlessly.",
      icon: Smartphone,
      gradient: "from-blue-700 to-blue-800",
      features: [
        "Native & Hybrid Development",
        "Modern and intuitive UX design",
        "High performance optimization",
      ],
    },
    {
      title: "Custom Business Apps",
      description:
        "Tailored mobile solutions to support your business operations — from workflow automation to management systems.",
      icon: Settings2,
      gradient: "from-blue-800 to-blue-700",
      features: [
        "API & backend system integration",
        "Data security & encryption",
        "Real-time activity monitoring",
      ],
    },
    {
      title: "Prototyping & UI/UX Design",
      description:
        "We help bring your app ideas to life with beautiful and user-friendly interface designs.",
      icon: Code2,
      gradient: "from-blue-700 to-blue-600",
      features: [
        "Interactive design using Figma",
        "Efficient user flow planning",
        "User experience testing",
      ],
    },
    {
      title: "App Publishing & Maintenance",
      description:
        "From uploading to Play Store/App Store to ongoing maintenance — we help manage your app completely.",
      icon: Rocket,
      gradient: "from-blue-600 to-blue-700",
      features: [
        "App submission & revision support",
        "Version updates & bug fixing",
        "Server & API maintenance",
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg mb-8 group transition-colors">
            <span className="text-sm font-medium">Mobile App Services</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-6xl">
            Modern Mobile App Solutions for
            <span className="block mt-2 bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
              Your Business & Innovation
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            We deliver high-quality mobile applications with elegant design,
            fast performance, and exceptional user experience.
          </p>
        </div>

        {/* Services Grid */}
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
                      <CheckCircle2 className="w-4 h-4 mr-2 text-blue-700 dark:text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
                  <button className="group inline-flex items-center text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
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
          <div className="w-full max-w-2xl p-8 rounded-3xl bg-slate-900 dark:bg-slate-100 text-center relative overflow-hidden transition-colors">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-800/10" />

            <div className="relative space-y-6">
              <h3 className="text-2xl font-bold text-white dark:text-slate-900">
                Need a Custom Mobile App?
              </h3>
              <p className="text-slate-400 dark:text-slate-500">
                Discuss your ideas with our development team today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium hover:shadow-lg hover:shadow-white/10 dark:hover:shadow-slate-800/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-8 py-4 rounded-full border-2 border-slate-700 dark:border-slate-400 text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300"
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
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn border border-slate-200 dark:border-slate-700 transition-colors">
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
              Tell us about your app idea — our team will help you from concept to launch.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                rows="4"
                placeholder="Describe your app requirements..."
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
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

export default ServicesMobile;
