import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";
import LazyImage from "./LazyImage";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const categories = [];

  const projects = [
     {
    title: "Remotely.id",
    description:
      "Platform digital terpadu untuk manajemen kerja jarak jauh yang mencakup HRMS, manajemen proyek, payroll, absensi, dan komunikasi tim dalam satu dashboard. Dirancang untuk meningkatkan produktivitas, transparansi, dan kolaborasi lintas industri.",
    image: "/src/remotely.jpg",
    category: "Web Platform",
    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "MongoDB",
      "Bootstrap",
      "AJAX",
    ],
    metrics: [
      { label: "Produktivitas Tim", value: "+35%" },
      { label: "Efisiensi Data", value: "99.9%" },
    ],
  },
    {
    title: "E-Kantin Bina Persada School",
    description:
      "Aplikasi web modern untuk digitalisasi sistem kantin sekolah. Fitur mencakup top-up saldo siswa, voucher makan siang, laporan transaksi, dan otomatisasi layanan untuk efisiensi operasional dan pengalaman pengguna yang lebih baik.",
    image: "/src/ekantin.png",
    category: "Web Apps",
    technologies: [
      "PHP",
      "MySQL",
      "EJS",
      "Bootstrap",
      "JavaScript",
      "PhpMyAdmin",
    ],
    metrics: [
      { label: "Kecepatan Transaksi", value: "+40%" },
      { label: "Efisiensi Operasional", value: "+30%" },
    ],
  },
     {
    title: "Jalin Sehat",
    description:
      "Aplikasi pendaftaran rumah sakit berbasis SaaS yang memudahkan pasien untuk mendaftar online, melihat jadwal dokter, dan mengelola data kesehatan dengan cepat dan aman.",
    image: "/src/jalinsehat.jpg",
    category: "Mobile & Web App",
    technologies: [
      "JavaScript",
      "React.js",
      "React Native",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
    ],
    metrics: [
      { label: "Pendaftaran Online", value: "+50%" },
      { label: "Kepuasan Pengguna", value: "98%" },
    ],
  },
   {
    title: "Learning Hands",
    description:
      "Website preschool interaktif yang menggabungkan pembelajaran berbasis permainan dengan aktivitas edukatif, cerita interaktif, dan sumber daya untuk orang tua. Dirancang untuk mendukung perkembangan anak usia dini melalui pengalaman belajar yang menyenangkan dan penuh nilai positif.",
    image: "/src/learninghands.png",
    category: "Education Website",
    technologies: [
      "Laravel",
      "JavaScript",
      "MySQL",
      "Bootstrap",
      "Web API",
      "Kubernetes",
    ],
    metrics: [
      { label: "Engagement Anak", value: "+60%" },
      { label: "Ketersediaan Sistem", value: "99%" },
    ],
  },
    {
  title: "Fazar",
  description:
    "Website e-commerce yang dikembangkan untuk memfasilitasi penjualan produk secara online dengan fitur katalog, keranjang belanja, dan sistem manajemen pesanan. Dirancang dengan fokus pada performa tinggi, keamanan transaksi, serta pengalaman pengguna yang nyaman.",
  image: "/src/fazar.png",
  category: "E-Commerce Website",
  technologies: [
    "PHP",
    "MySQL",
    "JavaScript",
    "Bootstrap",
    "HTML",
    "CSS"
  ],
  metrics: [
    { label: "Kecepatan Muat", value: "<2 detik" },
    { label: "Tingkat Transaksi Berhasil", value: "99%" }
  ]
},
  {
  title: "Chatting Apps | ChatMe!",
  description:
    "Aplikasi web chat berbasis real-time yang memungkinkan pengguna untuk berkomunikasi melalui pesan teks, gambar, video, dan suara. Dilengkapi dengan sistem autentikasi berbasis JWT, manajemen profil pengguna, grup chat, notifikasi instan, serta penyimpanan riwayat pesan. Dirancang dengan fokus pada keamanan, privasi, dan pengalaman pengguna yang responsif.",
  image: "/src/chatz.jpg",
  category: "Communication App",
  technologies: [
    "PHP",
    "Laravel",
    "MySQL",
    "JWT",
    "AJAX",
    "DBMS",
    "JSON"
  ],
  metrics: [
    { label: "Pesan Real-time", value: "Instant <1 detik" },
    { label: "Uptime Server", value: "99.8%" }
  ]
},
  {
  title: "Website Wedding Organizer",
  description:
    "Platform online yang membantu calon pengantin dalam merencanakan pernikahan mereka. Website ini menyediakan katalog vendor, portofolio layanan, alat perencanaan dan penganggaran, serta fitur testimoni dan galeri untuk inspirasi pernikahan. Dirancang untuk menghubungkan pasangan dengan penyedia layanan pernikahan secara efisien dan profesional.",
  image: "/src/wedding.jpg",
  category: "Service Website",
  technologies: [
    "PHP",
    "Laravel",
    "MySQL",
    "JavaScript",
    "CSS",
    "DBMS",
    "IT Service Management"
  ],
  metrics: [
    { label: "Vendor Terdaftar", value: "50+" },
    { label: "Kepuasan Pengguna", value: "97%" }
  ]
}



  ];

  return (
    <section className="relative py-32 bg-slate-50">
      {/* Latar belakang gradasi */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">Portofolio Kami</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Menampilkan
            <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Keunggulan Digital Kami
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Wujudkan transformasi bisnis Anda dengan solusi digital komprehensif
            dari kami — dirancang untuk mendorong inovasi dan pertumbuhan
            berkelanjutan.
          </p>
        </div>

        {/* Filter kategori */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Daftar proyek */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {projects
            .filter(
              (project) =>
                activeFilter === "Semua" || project.category === activeFilter
            )
            .map((project) => (
              <div
                key={project.title}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Gambar proyek */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-4">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="text-white">
                            <div className="text-sm opacity-75">
                              {metric.label}
                            </div>
                            <div className="text-lg font-bold">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info proyek */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-600">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  {/* Teknologi */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-50 text-sm text-gray-600"
                      >
                        <Code size={14} />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium group">
                    
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
