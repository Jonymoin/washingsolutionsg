import { FaPhoneAlt } from "react-icons/fa";
import { trackConversion } from "@/lib/tracking";

export function FloatingCallButton() {
  return (
    
    <a  href="tel:+6585301773"
      onClick={() => trackConversion()}
      aria-label="Call us"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-black/20 transition-all hover:scale-105 hover:bg-red-700 hover:shadow-xl"
    >
      <FaPhoneAlt className="h-6 w-6 text-white" />
    </a>
  );
}