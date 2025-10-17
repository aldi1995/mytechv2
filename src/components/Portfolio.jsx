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
    image: "/remotely.jpg",
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
    image: "/ekantin.png",
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
    image: "/jalinsehat.jpg",
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
    image: "/learninghands.png",
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
  image: "/fazar.png",
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
  image: "/chatz.jpg",
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
  image: "/wedding.jpg",
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
},
{
  title: "Website Bina Persada International School",
  description:
    "Website resmi sekolah internasional Bina Persada yang menyediakan informasi lengkap tentang program akademik, kegiatan ekstrakurikuler, fasilitas, dan pendaftaran siswa baru. Dirancang untuk memberikan pengalaman pengguna yang informatif dan menarik bagi calon siswa, orang tua, dan komunitas sekolah.",
  image: "/bp.jpg",
  category: "School Website",
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
    { label: "Siswa Terdaftar", value: "100+" },
    { label: "Kepuasan Pengguna", value: "97%" }
  ]
},
{
  title: "Website LBH Inayah Filia",
  description:
    "Platform online untuk meminta konsultasi hukum dan layanan hukum dari LBH Inayah Filia. Website ini menyediakan informasi tentang layanan hukum, profil pengacara, artikel hukum, dan formulir kontak untuk memudahkan klien dalam mendapatkan bantuan hukum. Dirancang untuk memberikan akses yang mudah dan transparan terhadap layanan hukum bagi masyarakat.",
  image: "/if.png",
  category: "Legal First Aid Website",
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
    { label: "Klien Terbantu", value: "50+" },
    { label: "Kepuasan Pengguna", value: "97%" }
  ]
},
{
  title: "Website Resmi Gereja GSK Bandung",
  description:
    "Website resmi Gereja GSK Bandung yang menyediakan informasi tentang kegiatan gereja, jadwal ibadah, pelayanan komunitas, dan sumber daya rohani. Dirancang untuk memperkuat komunikasi antara jemaat dan memfasilitasi partisipasi aktif dalam kehidupan gereja.",
  image: "/gsk.png",
  category: "Church Website",
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
    { label: "Jemaat Terdaftar", value: "50+" },
    { label: "Kepuasan Pengguna", value: "97%" }
  ]
},
{
  title: "Website Resmi NGO 7Lung",
  description:
    "Website resmi NGO 7Lung yang menyediakan informasi tentang misi, program, dan kegiatan organisasi. Website ini juga menampilkan laporan tahunan, galeri foto, dan formulir donasi untuk mendukung kegiatan sosial. Dirancang untuk meningkatkan kesadaran dan partisipasi masyarakat dalam mendukung tujuan kemanusiaan NGO.",
  image: "/7l.png",
  category: "NGO Foundation Website",
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
    { label: "Volunteer Terdata", value: "50+" },
    { label: "Kepuasan Pengguna", value: "97%" }
  ]
},
{
  title: "Website Pemantauan dan Pelaporan Bencana Alam",
  description:
    "Webapps untuk memantau dan melaporkan bencana alam secara real-time. Fitur meliputi peta interaktif, sistem notifikasi, dan laporan kondisi terkini untuk membantu koordinasi respons bencana. Dirancang untuk meningkatkan kesiapsiagaan dan respons cepat terhadap bencana alam.",
  image: "/bp.png",
  category: "Disaster Management Website",
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
    { label: "Bencana Tertangani", value: "50+" },
    { label: "Kesuksesan", value: "97%" }
  ]
},
{
  title: "Website Casavia Estate",
  description:
    "Website resmi Casavia Estate yang menyediakan informasi tentang properti, layanan, dan fasilitas perumahan. Website ini menampilkan katalog properti, galeri foto, dan formulir kontak untuk memudahkan calon pembeli dalam mendapatkan informasi. Dirancang untuk memberikan pengalaman pengguna yang informatif dan menarik bagi calon pembeli properti.",
  image: "/ce.png",
  category: "Real Estate Website",
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
    { label: "Penjualan", value: "500+" },
    { label: "Kepuasan Pengguna", value: "97%" }
  ]
},
{
  title: "Website crowdfunding Inayah Filia",
  description:
    "Platform crowdfunding untuk mendukung proyek sosial dan kemanusiaan yang diinisiasi oleh LBH Inayah Filia. Website ini memungkinkan pengguna untuk membuat kampanye penggalangan dana, berbagi cerita, dan melacak kemajuan donasi secara transparan. Dirancang untuk memudahkan masyarakat dalam berkontribusi terhadap perubahan positif melalui donasi online.",
  image: "/donasi.png",
  category: "Crowdfunding Website",
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
    { label: "Volunteer Terdata", value: "50+" },
    { label: "Kepuasan Pengguna", value: "97%" }
  ]
},
{
  title: "Platform Pelajaran Daring",
  description:
    "Website pembelajaran online yang menyediakan kursus interaktif, video tutorial, dan kuis untuk berbagai topik. Fitur meliputi manajemen kursus, pelacakan kemajuan belajar, dan sertifikat penyelesaian. Dirancang untuk memberikan pengalaman belajar yang fleksibel dan efektif bagi pengguna dari berbagai usia.",
  image: "/edu.png",
  category: "Education Website",
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
    { label: "Siswa", value: "100+" },
    { label: "Materi", value: "97%" }
  ]
},
{
  title: "Apps Inventaris Barang GSK",
  description:
    "Aplikasi inventaris berbasis web untuk Gereja GSK yang memudahkan pengelolaan aset dan perlengkapan gereja. Fitur meliputi pencatatan barang, pelacakan lokasi, dan laporan inventaris. Dirancang untuk meningkatkan efisiensi pengelolaan inventaris dan memastikan ketersediaan perlengkapan gereja yang optimal.",
  image: "/inv_gsk.png",
  category: "Inventory Management App",
  technologies: [
    "JS",
    "MongoDB",
    "React",
    "JavaScript",
    "CSS",
    "DBMS",
    "IT Service Management"
  ],
  metrics: [
    { label: "Barang Terdata", value: "100+" },
    { label: "Kepuasan User", value: "97%" }
  ]
},
{
  title: "Website Konsultasi Hukum Online (gratis)",
  description:
    "Platform online untuk konsultasi hukum gratis yang diinisiasi oleh LBH Inayah Filia. Website ini menyediakan formulir kontak, artikel hukum, dan sumber daya edukatif untuk membantu masyarakat memahami hak-hak mereka. Dirancang untuk memberikan akses yang mudah dan transparan terhadap informasi hukum bagi masyarakat luas.",
  image: "/kh.png",
  category: "Legal Consultation Website",
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
    { label: "Kasus Terdata", value: "50+" },
    { label: "Kepuasan Pengguna", value: "97%" }
  ]
},
{
  title: "LBH Anak Indnoesia",
  description:
    "Website resmi LBH Anak Indonesia yang menyediakan informasi tentang layanan hukum, program advokasi, dan sumber daya edukatif untuk perlindungan hak anak. Website ini juga menampilkan laporan tahunan, galeri foto, dan formulir kontak untuk memudahkan klien dalam mendapatkan bantuan hukum. Dirancang untuk meningkatkan kesadaran dan partisipasi masyarakat dalam mendukung hak anak.",
  image: "/lbhai.png",
  category: "Legal Aid Website",
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
    { label: "Kasus Anak Indonesia Terselesaikan", value: "50+" },
    { label: "Kepuasan Pengguna", value: "97%" }
  ]
},
{
  title: "Website Company Profile EO M-Plus",
  description:
    "Website resmi M-Plus Event Organizer yang menyediakan informasi tentang layanan event organizer, portofolio acara, dan testimoni klien. Dirancang untuk memberikan pengalaman pengguna yang informatif dan menarik bagi calon klien yang ingin menggunakan jasa event organizer.",
  image: "/mplus.png",
  category: "Company Profile Website",
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
    { label: "Event Sukses", value: "50+" },
    { label: "Kepuasan Pengguna", value: "97%" }
  ]
},
{
  title: "Website Resmi MY-Law",
  description:
    "Website resmi MY-Law yang menyediakan informasi tentang layanan hukum, profil pengacara, artikel hukum, dan formulir kontak untuk memudahkan klien dalam mendapatkan bantuan hukum. Dirancang untuk memberikan akses yang mudah dan transparan terhadap layanan hukum bagi masyarakat.",
  image: "/mylaw.png",
  category: "Law Firm Website",
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
    { label: "Kasus Teratasi", value: "50+" },
    { label: "Kepuasan Pengguna", value: "97%" }
  ]
},
{
  title: "Website SMP Lab Malang",
  description:
    "Website resmi SMP Lab Malang yang menyediakan informasi tentang program akademik, kegiatan ekstrakurikuler, fasilitas, dan pendaftaran siswa baru. Dirancang untuk memberikan pengalaman pengguna yang informatif dan menarik bagi calon siswa, orang tua, dan komunitas sekolah.",
  image: "/smplab.png",
  category: "School Website",
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
    { label: "Murid Terdata", value: "500+" },
    { label: "Kepuasan Orang Tua", value: "97%" }
  ]
},


  ];

  return (
    <section className="relative py-32 bg-slate-50">
      {/* Latar belakang gradasi biru */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">Portofolio Kami</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Menampilkan
            <span className="block mt-2 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Karya Kami
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
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
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
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
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

                  <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group">
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

export default Portfolio;
