import React, { useState } from "react";
import {
  CheckCircle2,
  Star,
  ArrowUpRight,
  Phone,
} from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const formatPrice = (monthly, yearly) => (isYearly ? yearly : monthly);

  const handleContact = (plan) => {
    if (plan.monthly === "Hubungi Kami") {
      const message = `Halo MyTech Indonesia! Saya tertarik dengan paket ${plan.name}. Mohon informasi lebih lanjut.`;
      window.open(
        `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    } else {
      setSelectedPlan(plan.name);
      setOpenForm(true);
    }
  };

  const categories = [
    {
      category: "Solusi Enterprise",
      tagline: "Untuk kebutuhan sistem internal & bisnis skala besar",
      plans: [
        {
          name: "Basic Enterprise",
          monthly: "Rp5.000.000",
          yearly: "Rp50.000.000",
          gradient: "from-blue-600 to-sky-500",
          features: [
            "Dashboard internal perusahaan",
            "Integrasi database lokal",
            "User management dasar",
            "Dukungan teknis 3 bulan",
          ],
        },
        {
          name: "Advanced Enterprise",
          monthly: "Rp12.000.000",
          yearly: "Rp110.000.000",
          gradient: "from-sky-600 to-blue-600",
          popular: true,
          features: [
            "Integrasi API eksternal",
            "Laporan otomatis (PDF/Excel)",
            "Role-based access control",
            "Dukungan prioritas 6 bulan",
          ],
        },
        {
          name: "Custom Enterprise",
          monthly: "Hubungi Kami",
          yearly: "Hubungi Kami",
          gradient: "from-blue-700 to-cyan-500",
          features: [
            "Integrasi ERP/CRM/HRMS",
            "Arsitektur skalabel",
            "SLA 99.9% uptime",
            "Maintenance tahunan & 24/7 support",
          ],
        },
      ],
    },
    {
      category: "Pengembangan Website",
      tagline: "Solusi digital modern untuk bisnis & brand Anda",
      plans: [
        {
          name: "Basic Website",
          monthly: "Rp2.000.000",
          yearly: "Rp20.000.000",
          gradient: "from-green-600 to-emerald-500",
          features: [
            "Landing page profesional",
            "Optimasi SEO dasar",
            "Desain responsif semua perangkat",
            "Gratis domain 1 tahun",
          ],
        },
        {
          name: "Business Website",
          monthly: "Rp3.500.000",
          yearly: "Rp35.000.000",
          gradient: "from-emerald-600 to-green-600",
          popular: true,
          features: [
            "Multi-page (Home, About, Services, Contact)",
            "Integrasi WhatsApp & Maps",
            "Formulir kontak dinamis",
            "Dukungan teknis 6 bulan",
          ],
        },
        {
          name: "E-Commerce Pro",
          monthly: "Rp6.000.000",
          yearly: "Rp60.000.000",
          gradient: "from-teal-600 to-green-500",
          features: [
            "Sistem katalog & keranjang belanja",
            "Integrasi pembayaran (Midtrans/Xendit)",
            "Dashboard admin & laporan penjualan",
            "Dukungan prioritas 12 bulan",
          ],
        },
      ],
    },
    {
      category: "Pengembangan Mobile Apps",
      tagline: "Aplikasi Android & iOS untuk memperluas jangkauan bisnis Anda",
      plans: [
        {
          name: "Starter App",
          monthly: "Rp8.000.000",
          yearly: "Rp75.000.000",
          gradient: "from-purple-600 to-indigo-500",
          features: [
            "Aplikasi Android (Play Store ready)",
            "Autentikasi pengguna dasar",
            "Notifikasi push sederhana",
            "Support bugfix 3 bulan",
          ],
        },
        {
          name: "Pro App",
          monthly: "Rp15.000.000",
          yearly: "Rp140.000.000",
          gradient: "from-indigo-600 to-violet-600",
          popular: true,
          features: [
            "Android & iOS (Cross-platform Flutter/React Native)",
            "Integrasi API & database cloud",
            "Desain UI/UX profesional",
            "Dukungan teknis prioritas 6 bulan",
          ],
        },
        {
          name: "Custom App",
          monthly: "Hubungi Kami",
          yearly: "Hubungi Kami",
          gradient: "from-violet-700 to-purple-500",
          features: [
            "Integrasi sistem backend kompleks",
            "Deployment multi-environment",
            "Maintenance tahunan",
            "Konsultasi fitur advance & scaling",
          ],
        },
      ],
    },
    {
      category: "IT Consulting & Maintenance",
      tagline: "Pendampingan teknologi dan pemeliharaan sistem profesional",
      plans: [
        {
          name: "Consult Basic",
          monthly: "Rp1.500.000",
          yearly: "Rp15.000.000",
          gradient: "from-orange-600 to-amber-500",
          features: [
            "Analisis kebutuhan sistem",
            "Rekomendasi solusi digital",
            "Laporan konsultasi bulanan",
            "Support teknis 1 bulan",
          ],
        },
        {
          name: "Consult Pro",
          monthly: "Rp3.000.000",
          yearly: "Rp30.000.000",
          gradient: "from-amber-600 to-orange-600",
          popular: true,
          features: [
            "Pendampingan pengembangan sistem",
            "Optimasi performa aplikasi",
            "Audit keamanan & data",
            "Support teknis prioritas 3 bulan",
          ],
        },
        {
          name: "Dedicated Support",
          monthly: "Hubungi Kami",
          yearly: "Hubungi Kami",
          gradient: "from-orange-700 to-yellow-500",
          features: [
            "Tim IT khusus untuk perusahaan Anda",
            "Monitoring sistem 24/7",
            "Konsultasi dan upgrade rutin",
            "Perjanjian SLA profesional",
          ],
        },
      ],
    },
  ];

  return (
    <section className="relative py-28 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-blue-600 text-white shadow-lg mb-6">
          <span className="text-sm font-medium">Paket Harga</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>

        <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
          Pilih Paket Sesuai{" "}
          <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
            Kebutuhan Anda
          </span>
        </h2>
        <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
          Harga fleksibel — transparan dan bisa disesuaikan.
        </p>

        {/* Toggle Bulanan / Tahunan */}
        <div className="mt-8 flex justify-center items-center gap-3">
          <span
            className={`text-sm font-medium ${
              !isYearly
                ? "text-blue-600 dark:text-blue-400"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            Bulanan
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className="w-12 h-6 bg-slate-300 dark:bg-slate-600 rounded-full transition-colors duration-300 peer-checked:bg-blue-600"></div>
            <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white dark:bg-slate-200 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
          </label>
          <span
            className={`text-sm font-medium ${
              isYearly
                ? "text-blue-600 dark:text-blue-400"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            Tahunan{" "}
            <span className="ml-1 text-xs text-green-500">(Hemat 20%)</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="space-y-24 max-w-7xl mx-auto px-6">
        {categories.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              {cat.category}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-10">
              {cat.tagline}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {cat.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white dark:bg-slate-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all p-10 border-t-8 ${
                    plan.popular
                      ? "border-blue-500 scale-105"
                      : "border-slate-100 dark:border-slate-700 hover:-translate-y-1"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 right-6 flex items-center gap-1 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
                      <Star className="w-4 h-4" /> Terpopuler
                    </div>
                  )}
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {plan.name}
                  </h4>
                  <p className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    {formatPrice(plan.monthly, plan.yearly)}
                    <span className="text-base font-normal text-slate-500 dark:text-slate-400">
                      {plan.monthly !== "Hubungi Kami" &&
                        (isYearly ? "/tahun" : "/bulan")}
                    </span>
                  </p>
                  <ul className="space-y-3 mb-8 text-slate-600 dark:text-slate-300">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleContact(plan)}
                    className={`w-full py-3 rounded-xl font-medium transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:opacity-90"
                        : "border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    {plan.monthly === "Hubungi Kami"
                      ? "Hubungi via WhatsApp"
                      : "Konsultasi Paket Ini"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-28 max-w-3xl mx-auto text-center">
        <div className="bg-slate-900 dark:bg-slate-800 text-white rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-sky-500/10" />
          <div className="relative space-y-6">
            <h3 className="text-3xl font-bold">Butuh Penawaran Kustom?</h3>
            <p className="text-slate-400">
              Kami bantu hitung solusi paling efisien untuk kebutuhan bisnis Anda.
            </p>
            <button
              onClick={() => setOpenForm(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-blue-600 text-slate-900 dark:text-white font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" /> Jadwalkan Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-4 right-4 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Konsultasi Paket {selectedPlan && `(${selectedPlan})`}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Terima kasih! Kami akan segera menghubungi Anda.");
                setOpenForm(false);
              }}
              className="space-y-5"
            >
              <input
                type="text"
                placeholder="Nama Lengkap"
                required
                className="w-full border border-slate-300 dark:border-slate-600 bg-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              <input
                type="email"
                placeholder="Alamat Email"
                required
                className="w-full border border-slate-300 dark:border-slate-600 bg-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              <input
                type="tel"
                placeholder="Nomor WhatsApp"
                className="w-full border border-slate-300 dark:border-slate-600 bg-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              <textarea
                placeholder="Pesan atau kebutuhan Anda..."
                rows="4"
                className="w-full border border-slate-300 dark:border-slate-600 bg-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold hover:opacity-90 transition-all"
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

export default Pricing;
