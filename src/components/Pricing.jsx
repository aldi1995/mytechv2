import React, { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Star,
  ArrowUpRight,
  Phone,
} from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const formatPrice = (monthly, yearly) =>
    isYearly ? yearly : monthly;

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
    // Tetap sama, hanya ganti warna gradient
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
      category: "Pengembangan Mobile",
      tagline: "Aplikasi Android, iOS, & cross-platform",
      plans: [
        {
          name: "Starter App",
          monthly: "Rp7.500.000",
          yearly: "Rp70.000.000",
          gradient: "from-blue-600 to-sky-500",
          features: [
            "1 platform (Android/iOS)",
            "UI/UX modern",
            "Integrasi API dasar",
            "Publikasi ke store",
          ],
        },
        {
          name: "Pro App",
          monthly: "Rp15.000.000",
          yearly: "Rp140.000.000",
          gradient: "from-sky-600 to-blue-600",
          popular: true,
          features: [
            "Android + iOS (cross-platform)",
            "Realtime DB (Firebase)",
            "Push Notification",
            "Maintenance 3 bulan",
          ],
        },
        {
          name: "Enterprise App",
          monthly: "Rp25.000.000",
          yearly: "Rp240.000.000",
          gradient: "from-blue-700 to-cyan-500",
          features: [
            "Integrasi sistem internal",
            "Security audit",
            "Monitoring & Analytics",
            "Maintenance 1 tahun",
          ],
        },
      ],
    },
    {
      category: "Layanan Cloud",
      tagline: "Infrastruktur dan hosting berperforma tinggi",
      plans: [
        {
          name: "Cloud Starter",
          monthly: "Rp500.000",
          yearly: "Rp5.000.000",
          gradient: "from-blue-600 to-sky-500",
          features: [
            "VPS 2vCPU / 4GB RAM",
            "Backup mingguan",
            "SSL & Firewall dasar",
            "Support email",
          ],
        },
        {
          name: "Cloud Pro",
          monthly: "Rp1.200.000",
          yearly: "Rp12.000.000",
          gradient: "from-sky-600 to-blue-600",
          popular: true,
          features: [
            "VPS 4vCPU / 8GB RAM",
            "Load balancing & auto scaling",
            "Monitoring 24 jam",
            "Backup harian",
          ],
        },
        {
          name: "Cloud Enterprise",
          monthly: "Rp2.500.000",
          yearly: "Rp25.000.000",
          gradient: "from-blue-700 to-cyan-500",
          features: [
            "Cluster server terdedikasi",
            "Integrasi AWS/GCP",
            "SLA 99.9% uptime",
            "Audit keamanan tahunan",
          ],
        },
      ],
    },
    {
      category: "Keamanan Siber (Cybersecurity)",
      tagline: "Audit & perlindungan sistem digital bisnis Anda",
      plans: [
        {
          name: "Basic Security",
          monthly: "Rp3.500.000",
          yearly: "Rp30.000.000",
          gradient: "from-blue-600 to-sky-500",
          features: [
            "Analisis keamanan web/app",
            "Laporan kerentanan dasar",
            "Rekomendasi perbaikan",
            "Audit satu kali",
          ],
        },
        {
          name: "Advanced Security",
          monthly: "Rp7.500.000",
          yearly: "Rp70.000.000",
          gradient: "from-sky-600 to-blue-600",
          popular: true,
          features: [
            "Penetration Testing penuh",
            "Simulasi serangan siber",
            "Hardening sistem & server",
            "Monitoring 1 bulan",
          ],
        },
        {
          name: "Enterprise Security",
          monthly: "Rp15.000.000",
          yearly: "Rp140.000.000",
          gradient: "from-blue-700 to-cyan-500",
          features: [
            "SOC Monitoring 24/7",
            "Incident Response Plan",
            "Compliance ISO 27001",
            "Pelatihan keamanan internal",
          ],
        },
      ],
    },
  ];

  return (
    <section className="relative py-28 bg-slate-50 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl transition-all mb-6">
          <span className="text-sm font-medium">Paket Harga</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
        <h2 className="text-5xl font-bold text-slate-900">
          Pilih Paket Sesuai{" "}
          <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
            Kebutuhan Anda
          </span>
        </h2>
        <p className="mt-5 text-lg text-slate-600">
          Harga fleksibel — transparan dan bisa disesuaikan.
        </p>

        {/* Toggle Bulanan / Tahunan */}
        <div className="mt-8 flex justify-center items-center gap-3">
          <span
            className={`text-sm font-medium ${
              !isYearly ? "text-blue-600" : "text-slate-500"
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
            <div className="w-12 h-6 bg-slate-300 rounded-full transition-colors duration-300 peer-checked:bg-blue-600"></div>
            <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
          </label>
          <span
            className={`text-sm font-medium ${
              isYearly ? "text-blue-600" : "text-slate-500"
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
            <h3 className="text-3xl font-bold text-slate-900 mb-3">
              {cat.category}
            </h3>
            <p className="text-slate-500 mb-10">{cat.tagline}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {cat.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all p-10 border-t-8 ${
                    plan.popular
                      ? "border-blue-500 scale-105"
                      : "border-slate-100 hover:-translate-y-1"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 right-6 flex items-center gap-1 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
                      <Star className="w-4 h-4" /> Terpopuler
                    </div>
                  )}
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">
                    {plan.name}
                  </h4>
                  <p className="text-4xl font-bold text-slate-900 mb-6">
                    {formatPrice(plan.monthly, plan.yearly)}
                    <span className="text-base font-normal text-slate-500">
                      {plan.monthly !== "Hubungi Kami" &&
                        (isYearly ? "/tahun" : "/bulan")}
                    </span>
                  </p>
                  <ul className="space-y-3 mb-8 text-slate-600">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-blue-600" />{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleContact(plan)}
                    className={`w-full py-3 rounded-xl font-medium transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:opacity-90"
                        : "border border-slate-300 text-slate-900 hover:bg-slate-100"
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
        <div className="bg-slate-900 text-white rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-sky-500/10" />
          <div className="relative space-y-6">
            <h3 className="text-3xl font-bold">Butuh Penawaran Kustom?</h3>
            <p className="text-slate-400">
              Kami bantu hitung solusi paling efisien untuk kebutuhan bisnis
              Anda.
            </p>
            <button
              onClick={() => setOpenForm(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" /> Jadwalkan Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-6">
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
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Alamat Email"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Nomor WhatsApp"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Pesan atau kebutuhan Anda..."
                rows="4"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
