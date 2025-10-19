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
      title: "Analisis Kebutuhan Bisnis",
      description:
        "Kami bantu Anda mengidentifikasi kebutuhan IT untuk efisiensi dan skalabilitas bisnis.",
      icon: Laptop,
      gradient: "from-blue-600 to-sky-500",
      features: [
        "Audit sistem & infrastruktur IT",
        "Mapping kebutuhan software",
        "Dokumentasi hasil analisis",
      ],
    },
    {
      title: "Strategi Transformasi Digital",
      description:
        "Tingkatkan daya saing bisnis Anda dengan strategi digital yang relevan dan berkelanjutan.",
      icon: Network,
      gradient: "from-sky-600 to-blue-600",
      features: [
        "Roadmap digitalisasi perusahaan",
        "Integrasi sistem & otomasi proses",
        "Pendampingan implementasi IT",
      ],
    },
    {
      title: "Cloud & Infrastruktur",
      description:
        "Optimalkan performa bisnis dengan solusi berbasis cloud yang aman dan efisien.",
      icon: Cloud,
      gradient: "from-blue-500 to-sky-500",
      features: [
        "Migrasi ke cloud AWS / GCP / Azure",
        "Manajemen server & backup",
        "Optimasi biaya infrastruktur",
      ],
    },
    {
      title: "Keamanan & Kepatuhan",
      description:
        "Pastikan sistem bisnis Anda terlindungi dari ancaman dengan pendekatan keamanan menyeluruh.",
      icon: ShieldCheck,
      gradient: "from-sky-600 to-blue-600",
      features: [
        "Security assessment & penetration test",
        "Kepatuhan ISO 27001 & GDPR",
        "Sistem monitoring & alert",
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-slate-50">
      {/* Background blob */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg mb-8 group">
            <span className="text-sm font-medium">Layanan IT Consulting</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Konsultasi IT untuk
            <span className="block mt-2 bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent">
              Transformasi Digital Bisnis Anda
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Kami bantu Anda merancang, mengoptimalkan, dan mengamankan sistem IT
            agar bisnis berjalan lebih efisien dan siap menghadapi era digital.
          </p>
        </div>

        {/* Grid Services */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative space-y-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                >
                  <service.icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-100">
                  <button className="group inline-flex items-center text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
                    Pelajari Lebih Lanjut
                    <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 flex flex-col items-center">
          <div className="w-full max-w-2xl p-8 rounded-3xl bg-slate-900 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-sky-600/10" />

            <div className="relative space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Butuh Pendampingan IT Profesional?
              </h3>
              <p className="text-slate-400">
                Konsultasikan kebutuhan IT Anda dan temukan solusi terbaik untuk
                bisnis Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 rounded-full bg-white text-slate-900 font-medium hover:shadow-lg hover:shadow-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Hubungi Kami
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-8 py-4 rounded-full border-2 border-slate-700 text-white font-medium hover:bg-slate-800 transition-all duration-300"
                >
                  Jadwalkan Konsultasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-700"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Jadwalkan Konsultasi
            </h3>
            <p className="text-slate-600 mb-6">
              Ceritakan kebutuhan IT Anda — tim kami siap membantu dari analisis
              hingga implementasi.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Nomor Telepon"
                className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                rows="4"
                placeholder="Ceritakan kebutuhan Anda..."
                className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-sky-600 transition-all"
              >
                Kirim Permintaan Konsultasi
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesConsulting;
