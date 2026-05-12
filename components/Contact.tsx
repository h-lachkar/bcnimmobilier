"use client";

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import CircleHighlight from "./CircleHighlight";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function Contact() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="bg-cream py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="w-10 h-px bg-orange" />
          <span className="text-orange text-[10px] uppercase tracking-[0.3em] font-medium">
            On en discute ?
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — title + intro + contact methods */}
          <motion.div
            className="lg:col-span-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-semibold text-2xl sm:text-3xl lg:text-5xl leading-[1.05] tracking-tight text-ink"
            >
              Discutons{" "}
              <CircleHighlight>ensemble</CircleHighlight>{" "}
              de votre projet.
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-body text-[13px] sm:text-sm lg:text-base leading-relaxed max-w-md">
              Réservez 30 minutes avec Chloé dans le calendrier ci-contre, ou
              contactez-la directement. Réponse{" "}
              <span className="text-ink font-medium">sous 24h</span>, en
              français, par un humain.
            </motion.p>

            {/* Availability badge */}
            <div className="mt-6 inline-flex items-center gap-2.5 bg-white border border-black/8 rounded-full px-4 py-2 shadow-sm">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                <span className="relative rounded-full bg-green-500 w-2 h-2" />
              </span>
              <span className="text-xs text-ink">
                Disponible aujourd&apos;hui
              </span>
            </div>

            {/* Chloé mini card */}
            <div className="mt-8 flex items-center gap-4 bg-white border border-black/5 rounded-2xl p-4 shadow-sm">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-orange/20">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/346f5d5b-3c8c-4f78-81a5-5863e0ce668d/IMG_2184.jpeg"
                    alt="Chloé"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display font-semibold text-base text-ink leading-tight">
                  Chloé
                </div>
                <div className="text-xs text-body/70 mt-0.5">
                  Votre agente immobilière
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] text-green-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  En ligne maintenant
                </div>
              </div>
            </div>

            {/* Direct contact methods */}
            <div className="mt-5 space-y-2">
              <a
                href="tel:+33630077425"
                className="group flex items-center gap-3 p-3 rounded-2xl bg-white border border-black/5 hover:border-orange hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0 group-hover:bg-orange group-hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 5.5C3 14.06 9.94 21 18.5 21c.39 0 .77-.01 1.15-.04.43-.03.65-.05.85-.16a1.3 1.3 0 00.51-.59c.09-.2.09-.43.09-.9V17.4c0-.39 0-.59-.06-.76a1 1 0 00-.4-.51c-.16-.1-.36-.13-.77-.2l-2.55-.42c-.39-.06-.58-.09-.74-.06-.15.03-.27.1-.36.22-.1.13-.16.32-.27.7l-.65 1.95c-2.42-.79-4.36-2.73-5.16-5.15l1.96-.65c.39-.13.58-.19.71-.28.11-.09.18-.21.21-.36.03-.16 0-.34-.06-.72l-.43-2.57c-.06-.4-.1-.6-.2-.76A1 1 0 006.78 8c-.16-.06-.36-.06-.75-.06H4.19c-.47 0-.7 0-.9.09a1 1 0 00-.59.51c-.11.2-.13.42-.16.85C2.51 9.73 2.5 10.11 2.5 10.5V5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-body/50 font-medium">
                    🇫🇷 Téléphone
                  </div>
                  <div className="font-display font-semibold text-sm text-ink">
                    +33 6 30 07 74 25
                  </div>
                </div>
                <span className="text-body/40 group-hover:text-orange group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>

              <a
                href="https://wa.me/33630077425"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-2xl bg-white border border-black/5 hover:border-green-500 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-body/50 font-medium">
                    WhatsApp
                  </div>
                  <div className="font-display font-semibold text-sm text-ink">
                    Message instantané
                  </div>
                </div>
                <span className="text-body/40 group-hover:text-green-500 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>

              <a
                href="mailto:contact@bcn-immobilier.com"
                className="group flex items-center gap-3 p-3 rounded-2xl bg-white border border-black/5 hover:border-ink hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-ink/8 text-ink flex items-center justify-center shrink-0 group-hover:bg-ink group-hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 8l8.5 5.5L20 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-body/50 font-medium">
                    Email
                  </div>
                  <div className="font-display font-semibold text-sm text-ink truncate">
                    contact@bcn-immobilier.com
                  </div>
                </div>
                <span className="text-body/40 group-hover:text-ink group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Calendly widget */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
          >
            <div className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden">
              <div className="px-6 lg:px-8 py-5 border-b border-black/5 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-orange font-medium mb-1">
                    Réservez un créneau
                  </div>
                  <div className="font-display font-semibold text-lg text-ink">
                    30 minutes avec Chloé
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-body/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Calendrier en direct
                </div>
              </div>

              {/* Calendly inline widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/yves-bcn-immobilier/30min?hide_gdpr_banner=1"
                style={{ minWidth: "320px", height: "650px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
