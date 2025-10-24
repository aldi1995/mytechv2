import React from "react";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "20+", label: "Completed Projects" },
    { value: "24/7", label: "Expert Support" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f9fafc] dark:bg-gray-900 overflow-hidden transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#aaa1_1px,transparent_1px),linear-gradient(to_bottom,#aaa1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)] dark:opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight transition-colors duration-300">
              Bring Your
              <span className="block mt-2 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500">
                Vision to Life
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
              Experience the perfect blend of innovation and excellence through
              our modern solutions designed to elevate your digital presence.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-full bg-blue-900 text-white font-medium hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Start Your Project
              <ArrowUpRight className="ml-2 w-5 h-5 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
