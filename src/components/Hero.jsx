import React from "react";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const stats = [
    { value: "98%", label: "Kepuasan Klien" },
    { value: "20+", label: "Proyek Selesai" },
    { value: "24/7", label: "Dukungan Ahli" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f9fafc] overflow-hidden">
      {/* Elemen latar animasi */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Lingkaran gradasi biru */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000" />

        {/* Pola grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#aaa1_1px,transparent_1px),linear-gradient(to_bottom,#aaa1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Konten utama */}
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-tight">
              Wujudkan
              <span className="block mt-2 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Visi Anda
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Rasakan perpaduan sempurna antara inovasi dan keunggulan melalui
              solusi modern kami yang dirancang untuk meningkatkan kehadiran
              digital Anda.
            </p>
          </div>

          {/* Tombol CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-full bg-blue-900 text-white font-medium hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center"
            >
              Mulai Proyek Anda
              <ArrowUpRight className="ml-2 w-5 h-5 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Statistik */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <p className="text-3xl font-bold text-slate-900">{value}</p>
                  <p className="mt-2 text-sm text-slate-600">{label}</p>
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
