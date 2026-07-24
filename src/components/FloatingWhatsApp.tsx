import { MessageCircle } from "lucide-react";
import { trackConversion } from "@/lib/tracking";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6585301773"
      target="_blank"
      rel="noreferrer"
      onClick={() => trackConversion()}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-black/20 transition-all hover:scale-105 hover:shadow-xl"
    >
      <MessageCircle className="h-6 w-6 fill-white text-white" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp Us</span>
    </a>
  );
}
