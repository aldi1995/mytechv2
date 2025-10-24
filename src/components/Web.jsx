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
      title: "Website Profil Perusahaan",
      description:
        "Bangun citra profesional perusahaan Anda dengan website elegan, cepat, dan sepenuhnya responsif.",
      icon: Globe,
      gradient: "from-blue-700 to-blue-800",
      features: [
        "Desain responsif & modern",
        "Optimasi kecepatan dan SEO",
        "Kemudahan manajemen konten",
      ],
    },
    {
      title: "Sistem Web Kustom",
      description:
        "Solusi berbasis web yang dibuat khusus sesuai kebutuhan bisnis Anda — mulai dari dashboard internal hingga sistem reservasi.",
      icon: Settings,
      gradient: "from-blue-800 to-blue-700",
      features: ["Integrasi API & database", "Keamanan tinggi", "Akses multi-user"],
    },
    {
      title: "Website E-Commerce",
      description:
        "Tingkatkan penjualan online Anda dengan toko digital cepat, aman, dan mudah digunakan.",
      icon: ShoppingCart,
      gradient: "from-blue-700 to-blue-600",
      features: [
        "Keranjang belanja & pembayaran online",
        "Manajemen produk & stok",
        "Laporan penjualan otomatis",
      ],
    },
    {
      title: "Pemeliharaan & SEO",
      description:
        "Pastikan website Anda selalu optimal dengan pemeliharaan rutin, pembaruan sistem, dan strategi SEO terbaru.",
      icon: BarChart3,
      gradient: "from-blue-600 to-blue-700",
      features: [
        "Pembaruan sistem & plugin",
        "Optimasi performa & SEO",
        "Backup & pengecekan keamanan rutin",
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
            <span className="text-sm font-medium">Layanan Website</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-6xl">
            Solusi Website Profesional untuk
            <span className="block mt-2 bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
              Bisnis dan Organisasi
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Kami membantu Anda membangun kehadiran digital yang kuat — mulai dari desain hingga manajemen, semuanya disesuaikan dengan kebutuhan Anda.
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
          <div className="w-full max-w-2xl p-8 rounded-3xl bg-slate-900 dark:bg-blue-800 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-800/10 dark:from-slate-800/30 dark:to-slate-900/30" />

            <div className="relative space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Siap Membangun Website Impian Anda?
              </h3>
              <p className="text-slate-400 dark:text-slate-300">
                Hubungi tim kami untuk konsultasi gratis.
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
                  className="px-8 py-4 rounded-full border-2 border-slate-700 text-white font-medium hover:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-300"
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
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn transition-colors duration-300">
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
              Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Alamat Email"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Nomor Telepon"
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                rows="4"
                placeholder="Ceritakan kebutuhan website Anda..."
                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
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

export default Services;
