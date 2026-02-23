"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppSupport() {
    const raw = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").trim();
    const number = raw.replace(/[^0-9]/g, "");

    if (!number) return null;

    const text = encodeURIComponent("Hi XamSathi team, I need help with test series.");
    const href = `https://wa.me/${number}?text=${text}`;

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-5 py-3 shadow-2xl border border-emerald-300/30"
                aria-label="Chat on WhatsApp"
            >
                <span className="w-9 h-9 rounded-full bg-slate-950/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                </span>
                <span className="text-sm">WhatsApp Support</span>
            </a>
        </div>
    );
}
