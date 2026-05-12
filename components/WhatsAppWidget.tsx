"use client";

import { useState } from "react";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const phone = "33630077425";
  const presetMessage = encodeURIComponent(
    "Bonjour Chloé, je souhaite discuter de mon projet d'achat à Barcelone."
  );

  return (
    <>
      {/* Chat popup */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[320px] sm:w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-black/5 animate-rise">
          {/* Header */}
          <div className="bg-[#0a5f54] p-4 flex items-center gap-3 relative">
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/346f5d5b-3c8c-4f78-81a5-5863e0ce668d/IMG_2184.jpeg"
                  alt="Chloé"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#0a5f54]" />
            </div>
            <div className="flex-1 text-white">
              <div className="font-medium text-sm">Chloé</div>
              <div className="text-xs text-white/70">Vous répond sous 24h</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-xl leading-none w-7 h-7 flex items-center justify-center"
              aria-label="Fermer"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div
            className="p-5 bg-[#e5ddd5]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><circle cx='2' cy='2' r='0.6' fill='%23000' opacity='0.04'/></svg>\")",
            }}
          >
            <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[85%]">
              <p className="text-sm text-ink leading-relaxed">
                Bonjour ! 👋
                <br />
                Comment puis-je vous aider ?
              </p>
              <div className="text-[10px] text-body/40 mt-2 text-right">
                Maintenant
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/${phone}?text=${presetMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#25d366] hover:bg-[#1eb853] transition-colors p-4 flex items-center justify-center gap-2 text-white font-medium text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
            </svg>
            Démarrer la conversation
          </a>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] hover:bg-[#1eb853] rounded-full shadow-2xl flex items-center justify-center text-white transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        {open ? (
          <span className="text-2xl leading-none">×</span>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          </svg>
        )}
        {/* Notification pulse */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-orange rounded-full ring-2 ring-white animate-pulse" />
        )}
      </button>
    </>
  );
}
