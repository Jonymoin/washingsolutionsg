import { useState, type FormEvent } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { trackConversion } from "@/lib/tracking";

const WHATSAPP_NUMBER = "6585301773";

export function BookingForm({
  subjectLabel,
  subjectValue,
}: {
  subjectLabel: string;
  subjectValue: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [preferred, setPreferred] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    trackConversion();
    const lines = [
      "Hi WashingSolutionSG, I'd like to book a service.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `${subjectLabel}: ${subjectValue}`,
      area ? `Area: ${area}` : "",
      preferred ? `Preferred date/time: ${preferred}` : "",
      details ? `Problem details: ${details}` : "",
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-yellow focus:ring-2 focus:ring-yellow/40";

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-8">
      <h2 className="text-2xl font-extrabold">Book this service on WhatsApp</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill in your details and we'll open WhatsApp with your request ready to send. We reply within minutes, 7 days a week.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="bf-name" className="mb-1.5 block text-sm font-semibold">Name</label>
            <input id="bf-name" required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="bf-phone" className="mb-1.5 block text-sm font-semibold">Phone number</label>
            <input id="bf-phone" required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={field} placeholder="+65 9xxx xxxx" />
          </div>
        </div>

        <div>
          <label htmlFor="bf-subject" className="mb-1.5 block text-sm font-semibold">{subjectLabel}</label>
          <input id="bf-subject" readOnly value={subjectValue} className={`${field} bg-neutral-50 font-semibold`} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="bf-area" className="mb-1.5 block text-sm font-semibold">Area / district</label>
            <input id="bf-area" value={area} onChange={(e) => setArea(e.target.value)} className={field} placeholder="e.g. Tampines" />
          </div>
          <div>
            <label htmlFor="bf-time" className="mb-1.5 block text-sm font-semibold">Preferred date & time</label>
            <input id="bf-time" value={preferred} onChange={(e) => setPreferred(e.target.value)} className={field} placeholder="e.g. Today 3pm" />
          </div>
        </div>

        <div>
          <label htmlFor="bf-details" className="mb-1.5 block text-sm font-semibold">Problem details</label>
          <textarea id="bf-details" rows={4} value={details} onChange={(e) => setDetails(e.target.value)} className={field} placeholder="Describe the fault, error code or noise..." />
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button type="submit" className="btn-yellow text-sm">
            <MessageCircle className="h-4 w-4" /> Send on WhatsApp
          </button>
          <a href="tel:+6585301773" onClick={() => trackConversion()} className="btn-outline text-sm">
            <Phone className="h-4 w-4" /> Call +65 8530 1773
          </a>
        </div>
      </form>
    </div>
  );
}

export function CallWhatsAppButtons({ message }: { message: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a href="tel:+6585301773" onClick={() => trackConversion()} className="btn-yellow">
        <Phone className="h-4 w-4" /> Call +65 8530 1773
      </a>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackConversion()}
        className="btn-glass"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp Us
      </a>
    </div>
  );
}
