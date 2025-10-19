import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import LazyImage from "./LazyImage";

const Product = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const categories = ["Semua", "Bisnis", "Edukasi", "Produktivitas", "Keuangan"];

  const products = [
    {
  name: "Remotely SaaS",
  tagline: "Manajemen kerja jarak jauh, HRMS, payroll & komunikasi tim dalam satu dashboard.",
  image: "/remotely.jpg",
  category: "Productivity",
  price: "Rp 149.000 /bulan", 
  features: [
    "Manajemen proyek & absensi otomatis",
    "Payroll & HR digital",
    "Integrasi chat & file sharing",
  ],
  link: "https://remotely.gt.tc",
},

    {
  name: "MyERP Cloud",
  tagline: "Sistem ERP terintegrasi untuk mengelola keuangan, inventori, dan operasional bisnis Anda.",
  image: "/erp.png",
  category: "Business",
  price: "Rp 299.000 /bulan",
  features: [
    "Manajemen keuangan & akuntansi",
    "Inventori & pembelian otomatis",
    "Dashboard analitik realtime",
  ],
  link: "#",
  },
    {
      name: "MyPOS Cloud",
      tagline: "POS modern untuk restoran & kafe dengan dashboard penjualan realtime.",
      image: "/resto.png",
      category: "Business",
      price: "Rp 199.000 /bulan",
      features: [
        "Manajemen pesanan & stok",
        "Laporan penjualan otomatis",
        "Support multi-device",
      ],
      link: "#",
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
            <span className="text-sm font-medium">Produk Kami</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Solusi
            <span className="block mt-2 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              SaaS Kami
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Temukan berbagai solusi SaaS yang siap pakai untuk membantu bisnis Anda
            tumbuh lebih cepat, efisien, dan modern.
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

        {/* Daftar produk */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {products
            .filter(
              (product) =>
                activeFilter === "Semua" ||
                activeFilter === "All" ||
                product.category === activeFilter
            )
            .map((product) => (
              <div
                key={product.name}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Gambar produk */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <LazyImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info produk */}
                <div className="p-8">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-4">
                    {product.category}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.tagline}</p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-lg font-semibold text-slate-900 mb-6">
                    {product.price}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={product.link}
                      className="inline-flex items-center justify-center w-full gap-2 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-all"
                    >
                      Coba Gratis
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button className="inline-flex items-center justify-center w-full gap-2 border border-blue-200 py-3 rounded-xl text-blue-600 hover:bg-blue-50 font-medium transition-all">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
