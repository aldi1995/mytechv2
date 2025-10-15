import React, { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  XCircle,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Kantor Kami",
      details: [
        "Jl. Cipedes Tengah No.35, Sukagalih, Kec. Sukajadi, Kota Bandung, Jawa Barat 40163",
      ],
      ariaLabel: "Lokasi Kantor",
    },
    {
      icon: Phone,
      title: "Kontak Kami",
      details: [
        "Telepon: +62 851-5692-8164",
        "Email: hello@mytech-indonesia.web.id",
      ],
      ariaLabel: "Informasi Kontak",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 09.00 - 18.00", "Akhir Pekan: Janji temu saja"],
      ariaLabel: "Jam Operasional",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  const StatusMessage = ({ status }) => {
    if (!status) return null;

    const configs = {
      success: {
        icon: CheckCircle2,
        text: "Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.",
        className: "bg-green-50 border-green-200 text-green-800",
      },
      error: {
        icon: XCircle,
        text: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
        className: "bg-red-50 border-red-200 text-red-800",
      },
    };

    const config = configs[status];
    const Icon = config.icon;

    return (
      <div
        className={`flex items-center p-4 mb-6 border rounded-lg ${config.className}`}
      >
        <Icon className="w-5 h-5 mr-2 flex-shrink-0" />
        <p className="text-sm">{config.text}</p>
      </div>
    );
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Halo tim MyTech Indonesia! Saya ingin konsultasi mengenai layanan Anda."
    );
    window.open(`https://wa.me/6285156928164?text=${message}`, "_blank");
  };

  return (
    <section
      className="relative py-20 sm:py-24 bg-white"
      aria-label="Bagian Hubungi Kami"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-50/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Formulir Kontak */}
          <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
              id="contact-form-title"
            >
              Hubungi Kami
            </h2>
            <p className="text-slate-600 mb-4">
              Mari kita diskusikan bagaimana kami dapat membantu mengembangkan
              bisnis Anda.
            </p>

            <StatusMessage status={submitStatus} />

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-labelledby="contact-form-title"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Nama Depan <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Nama Belakang <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Nomor Telepon <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all duration-200"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all duration-200 resize-y min-h-[100px]"
                  placeholder="Bagaimana kami dapat membantu Anda?"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-700 to-sky-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-700/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-5 w-5" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-600/40 transition-all duration-200 flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat via WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Informasi Kontak + MAPS */}
          <div className="lg:pl-8 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Mari Bangun Sesuatu yang
                <span className="block mt-2 bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent">
                  Luar Biasa Bersama
                </span>
              </h2>
              <p className="text-lg text-slate-600 mt-4">
                Baik Anda memiliki pertanyaan tentang layanan kami, membutuhkan
                solusi khusus, atau hanya ingin menyapa, kami dengan senang
                hati akan mendengar dari Anda.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="group relative bg-slate-50 rounded-2xl p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                  aria-label={item.ariaLabel}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700/5 to-sky-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-700 to-sky-600 text-white shadow-md">
                        <item.icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <div className="space-y-1">
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-slate-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                title="Lokasi Kantor MyTech Indonesia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.830215269141!2d107.59314147475802!3d-6.867441367188985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6ed56b7a251%3A0x2f4f9c93bb84c40!2sJl.%20Cipedes%20Tengah%20No.35%2C%20Sukagalih%2C%20Kec.%20Sukajadi%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040163!5e0!3m2!1sid!2sid!4v1739568888888!5m2!1sid!2sid"
                width="100%"
                height="320"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-[320px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
