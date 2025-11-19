
"use client";

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const whatsappNumber = "5511985294882"; 
  const defaultMessage = "Olá! Gostaria de saber mais sobre o IntelliWallet.";

  const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-lg 
                 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      style={{
    
        boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)',
        border: '1px solid rgba(255,255,255,0.2)'
      }}
    >
      
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping group-hover:opacity-0"></span>
      
      
      <FaWhatsapp className="w-8 h-8 relative z-10" />
    </a>
  );
}