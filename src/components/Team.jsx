import React from "react";
import { Users, Star, Code, ArrowUpRight } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Renaldi Bagus Widakdo",
      role: "CEO & Lead Developer",
      description:
        "Memimpin arah strategis Mytech Indonesia dan memastikan setiap proyek berjalan dengan inovasi serta kualitas tinggi.",
    },
    {
      name: "Melika Candra Widyani Mas",
      role: "Project Manager",
      description:
        "Mengelola komunikasi antara klien dan tim pengembang untuk memastikan proyek selesai tepat waktu dan sesuai harapan.",
    },
    {
      name: "Dwi Santoso",
      role: "UI/UX Designer",
      description:
        "Merancang pengalaman pengguna yang intuitif dengan desain antarmuka yang modern dan fungsional.",
    },
    {
      name: "Andi Pratama",
      role: "Backend Engineer",
      description:
        "Membangun arsitektur server yang andal dan aman untuk mendukung performa aplikasi secara optimal.",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Kolaboratif",
      description:
        "Kami percaya bahwa kerja sama yang kuat menghasilkan solusi yang luar biasa.",
      gradient: "from-blue-700 to-indigo-800",
    },
    {
      icon: Star,
      title: "Profesional",
      description:
        "Setiap anggota tim memiliki dedikasi tinggi terhadap kualitas dan hasil kerja.",
      gradient: "from-indigo-800 to-blue-900",
    },
    {
      icon: Code,
      title: "Inovatif",
      description:
        "Kami selalu mencari cara baru untuk menciptakan teknologi yang relevan dan berdampak.",
      gradient: "from-blue-800 to-sky-700",
    },
  ];

  return (
    <section className="relative py-32 bg-[#f9fafc] dark:bg-gray-900 transition-colors duration-500">
      {/* Latar belakang gradasi */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-[1/0.7] bg-gradient-to-b from-white via-blue-50/30 to-transparent dark:from-gray-900 dark:via-gray-800/40 dark:to-transparent rounded-[50%] blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">Tim Kami</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-6xl">
            Profesional di Balik
            <span className="block mt-2 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
              Mytech Indonesia
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
            Tim kami terdiri dari para profesional muda yang berdedikasi di bidang teknologi. 
            Bersama sejak tahun 2023, kami berkomitmen menciptakan solusi digital yang inovatif 
            dan membantu bisnis beradaptasi di era transformasi digital.
          </p>
        </div>

        {/* Anggota Tim */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-700 to-indigo-800 dark:from-indigo-700 dark:to-blue-900 mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white text-center">
                {member.name}
              </h3>
              <p className="text-blue-700 dark:text-blue-400 text-center font-medium mt-1">
                {member.role}
              </p>
              <p className="mt-4 text-slate-600 dark:text-gray-300 text-center leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Nilai-nilai */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-white dark:from-gray-700/30 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} text-white shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                >
                  <value.icon size={28} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-4 text-slate-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
