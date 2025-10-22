import React from "react";
import { Rocket, Eye, Users, ArrowUpRight } from "lucide-react";

const About = () => {
  const features = [
    {
      title: "Misi Kami",
      description:
        "Memberdayakan bisnis dengan solusi digital inovatif yang mendorong pertumbuhan dan kesuksesan.",
      icon: Rocket,
      gradient: "from-blue-700 to-indigo-800",
    },
    {
      title: "Visi Kami",
      description:
        "Menjadi katalis transformasi digital dengan menetapkan standar baru dalam inovasi di seluruh dunia.",
      icon: Eye,
      gradient: "from-indigo-800 to-blue-900",
    },
    {
      title: "Nilai-Nilai Kami",
      description:
        "Dibangun di atas inovasi, integritas, dan keunggulan. Nilai-nilai inti ini menjadi panduan dalam setiap keputusan kami.",
      icon: Users,
      gradient: "from-blue-800 to-sky-700",
    },
  ];

  const stats = [
    { number: "5+", label: "Tahun Pengalaman" },
    { number: "20+", label: "Proyek Terselesaikan" },
    { number: "98%", label: "Kepuasan Klien" },
    { number: "5+", label: "Tim Ahli" },
  ];

  return (
    <section className="relative py-32 bg-[#f9fafc] dark:bg-gray-900 transition-colors duration-500">
      {/* Latar belakang gradasi lembut */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-[1/0.7] bg-gradient-to-b from-white via-blue-50/30 to-transparent dark:from-gray-900 dark:via-gray-800/40 dark:to-transparent rounded-[50%] blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">Tentang Perusahaan Kami</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-6xl">
            Pelopor
            <span className="block mt-2 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
              Kemahiran Teknologi
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
            Didirikan pada tahun 2023, Mytech Indonesia hadir sebagai mitra
            digital bagi bisnis dan organisasi yang ingin bertransformasi di era
            teknologi. <br />
            <br />
            Kami mengembangkan solusi digital mulai dari website, aplikasi
            bisnis, hingga layanan sistem informasi yang dirancang untuk
            meningkatkan efisiensi, visibilitas, dan produktivitas klien kami.
            <br />
            <br />
            Mytech Indonesia percaya bahwa teknologi bukan sekadar alat, tetapi
            jembatan menuju pertumbuhan — dan kami ada untuk membantu Anda
            melewatinya.
          </p>
        </div>

        {/* Kartu fitur */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-white dark:from-gray-700/30 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                >
                  <feature.icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistik */}
        <div className="mt-24 rounded-3xl bg-blue-900 dark:bg-indigo-950 p-12 sm:p-16 relative overflow-hidden transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-indigo-900/20" />
          <div className="relative grid grid-cols-2 gap-12 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center group cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-4xl font-bold text-white">{stat.number}</p>
                <p className="mt-2 text-sm font-medium text-blue-100 dark:text-blue-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
