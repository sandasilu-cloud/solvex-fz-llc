import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hello SOLVEX Engineering, I would like to know more about your engineering solutions. Please contact me."
  );
  return (
    <a
      href={`https://wa.me/94767908659?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-pulse-wa fixed bottom-6 right-6 z-200 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform hover:scale-105"
    >
      <MessageCircle className="text-white" size={26} fill="white" />
    </a>
  );
}
