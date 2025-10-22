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
      title: "Aplikasi Android & iOS",
      description:
        "Bangun aplikasi mobile profesional untuk menjangkau pengguna di platform Android dan iOS secara bersamaan.",
      icon: Smartphone,
      gradient: "from-blue-700 to-blue-800",
      features: [
        "Native & Hybrid Development",
        "Desain UX modern & intuitif",
        "Optimasi performa tinggi",
      ],
    },
    {
      title: "Aplikasi Bisnis Kustom",
      description:
        "Solusi mobile yang disesuaikan untuk kebutuhan bisnis Anda — dari manajemen operasional hingga otomasi proses.",
      icon: Settings2,
      gradient: "from-blue-800 to-blue-700",
      features: [
        "Integrasi API & sistem backend",
        "Keamanan data & enkripsi",
        "Monitoring aktivitas real-time",
      ],
    },
    {
      title: "Prototyping & UI/UX Design",
      description:
        "Kami bantu Anda mewujudkan ide aplikasi dengan desain antarmuka yang menarik dan ramah pengguna.",
      icon: Code2,
      gradient: "from-blue-700 to-blue-600",
      features: [
        "Desain interaktif berbasis Figma",
        "User flow yang efisien",
        "Uji coba pengalaman pengguna",
      ],
    },
    {
      title: "Publikasi & Maintenance",
      description:
        "Dari proses upload ke Play Store/App Store hingga maintenance berkala, kami bantu kelola aplikasi Anda sepenuhnya.",
      icon: Rocket,
      gradient: "from-blue-600 to-blue-700",
      features: [
        "Bantuan upload & revisi aplikasi",
        "Update versi & bug fixing",
        "Pemeliharaan server & API",
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
            <span className="text-sm font-medium">Layanan Mobile Apps</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-6xl">
            Solusi Aplikasi Mobile Modern untuk
            <span className="block mt-2 bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
              Bisnis & Inovasi Anda
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Kami menghadirkan aplikasi mobile berkualitas tinggi dengan desain
            elegan, performa cepat, dan pengalaman pengguna yang maksimal.
          </p>
        </div>

        {/* Grid Layanan */}
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
          <div className="w-full max-w-2xl p-8 rounded-3xl bg-slate-900 dark:bg-slate-100 text-center relative overflow-hidden transition-colors">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-800/10" />

            <div className="relative space-y-6">
              <h3 className="text-2xl font-bold text-white dark:text-slate-900">
                Ingin Aplikasi Mobile Kustom?
              </h3>
              <p className="text-slate-400 dark:text-slate-500">
                Diskusikan ide Anda dengan tim developer kami hari ini.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium hover:shadow-lg hover:shadow-white/10 dark:hover:shadow-slate-800/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Hubungi Kami
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-8 py-4 rounded-full border-2 border-slate-700 dark:border-slate-400 text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300"
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
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn border border-slate-200 dark:border-slate-700 transition-colors">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Jadwalkan Konsultasi
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Ceritakan ide aplikasi Anda — tim kami akan membantu dari konsep hingga peluncuran.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Nomor Telepon"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                rows="4"
                placeholder="Ceritakan kebutuhan aplikasi Anda..."
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium transition-all"
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

export default ServicesMobile;
