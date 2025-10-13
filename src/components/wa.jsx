import React from "react";
import { WhatsApp } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "6281234567890"; // ganti dengan nomor WA
  const message = "Halo, saya ingin bertanya."; // opsional

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
      aria-label="Hubungi via WhatsApp"
    >
      <WhatsApp className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
