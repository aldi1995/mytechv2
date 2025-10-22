import React from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";
import LazyImage from "./LazyImage";

const mobileProjects = [
  {
    title: "GoProperty",
    description:
      "Aplikasi pencarian properti dengan peta interaktif, filter canggih, dan sistem notifikasi real-time untuk pembeli maupun agen properti.",
    image: "/goproperty.png",
    category: "Mobile App (Android & iOS)",
    technologies: [
      "React Native",
      "Firebase",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Listing Aktif", value: "10K+" },
      { label: "User Rating", value: "4.9⭐" },
    ],
    link: "#",
  },
  {
    title: "MyClinic App",
    description:
      "Aplikasi reservasi dan manajemen pasien klinik. Mendukung booking jadwal dokter, riwayat kesehatan, dan notifikasi antrian secara real-time.",
    image: "/klinik.png",
    category: "Mobile App (Android & iOS)",
    technologies: [
      "React Native",
      "Supabase",
      "Express.js",
      "Tailwind CSS",
      "TypeScript",
    ],
    metrics: [
      { label: "Pasien Terdaftar", value: "8K+" },
      { label: "Klinik Tersambung", value: "150+" },
    ],
    link: "#",
  },
  {
    title: "EduTrack Mobile",
    description:
      "Platform pendidikan yang memudahkan guru dan siswa melakukan absensi, melihat nilai, dan memantau progres belajar di satu aplikasi.",
    image: "/edu3.png",
    category: "Mobile App (Android)",
    technologies: [
      "React Native",
      "Laravel API",
      "MySQL",
      "REST API",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Sekolah Mitra", value: "50+" },
      { label: "Aktivitas Harian", value: "3K+" },
    ],
    link: "#",
  },
];

const PortfolioMobile = () => {
  return (
    <section className="relative py-32 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      {/* Background lembut */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-200 dark:bg-sky-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg hover:shadow-xl transition-shadow duration-300 group mb-8">
            <span className="text-sm font-medium">Portfolio Mobile</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-6xl">
            Aplikasi
            <span className="block mt-2 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Mobile Kami
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Solusi mobile inovatif yang dirancang untuk meningkatkan efisiensi,
            produktivitas, dan kemudahan akses di berbagai industri.
          </p>
        </div>

        {/* Grid daftar mobile projects */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {mobileProjects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Gambar */}
              <div className="relative aspect-[9/16] overflow-hidden rounded-t-2xl">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="text-white">
                          <div className="text-sm opacity-75">{metric.label}</div>
                          <div className="text-lg font-bold">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-8">
                <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-50 dark:bg-slate-700 text-sm text-gray-600 dark:text-gray-200"
                    >
                      <Code size={14} />
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group">
                  <span>Lihat Detail</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioMobile;
