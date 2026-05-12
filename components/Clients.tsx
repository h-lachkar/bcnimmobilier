"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CircleHighlight from "./CircleHighlight";

const clients = [
  { name: "Brigitte, Michel & Dune", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/dd01394d-2189-47a5-bd5b-1a74e704b4df/WhatsApp+Image+2025-01-14+at+08.16.08.jpeg" },
  { name: "Olivier", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/d421cb8f-be18-4fa4-95f7-dd94bacd8a4b/WhatsApp+Image+2025-01-09+at+19.06.25.jpeg" },
  { name: "Sophie & Charles", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/e99e4c66-8a47-4079-bc5c-6c311b92fef9/WhatsApp+Image+2025-01-09+at+19.11.08.jpeg" },
  { name: "Catalina", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/6c1d2b59-9d38-4353-8a02-905ed7382dce/WhatsApp+Image+2025-01-09+at+19.08.41.jpeg" },
  { name: "Phillipe & Lola", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/36c1ce12-7ca5-4578-94bb-11e6f062f55a/WhatsApp+Image+2025-01-09+at+19.02.22.jpeg" },
  { name: "Séverine", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/ec452c17-8c62-4a79-a6c6-cd763a1d4375/WhatsApp+Image+2025-01-09+at+23.36.15.jpeg" },
  { name: "Eric & Alice", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/afb56250-b945-4ea1-8fee-bde541c9dea4/WhatsApp+Image+2025-01-09+at+19.03.45.jpeg" },
  { name: "Lionel", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/33a78333-eaaf-4bb9-8cc9-76383422df37/WhatsApp+Image+2025-01-14+at+08.06.43.jpeg" },
  { name: "Xavier & Romain", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/6e2b3bde-120e-487a-a1df-253e5e259add/WhatsApp+Image+2025-01-14+at+08.03.54.jpeg" },
  { name: "Rainer", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/bc39ca47-49a9-434c-9dff-9bc2920e9bd3/WhatsApp+Image+2025-01-14+at+08.27.48.jpeg" },
  { name: "Sandra & Nicolas", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/c46ab8a3-73d6-4b51-be93-b732ee2d3a23/WhatsApp+Image+2025-01-14+at+08.35.22.jpg" },
  { name: "Véronique & Pierre", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/429d2f0e-07d9-4da7-86c0-5e0b984d1817/WhatsApp+Image+2025-01-14+at+08.42.50.jpg" },
  { name: "Stephen", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/65b6161e-3cce-468e-a8b8-4002255742e6/WhatsApp+Image+2025-01-14+at+09.49.00.jpg" },
  { name: "Catherine & Éric", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/5ce26cb1-6482-4346-83dd-f0faa90bc011/WhatsApp+Image+2025-01-14+at+11.33.17.jpeg" },
  { name: "Steve & Marion", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/f2285088-0999-46c9-9fc7-540f6723ad1a/WhatsApp+Image+2025-01-14+at+08.54.16.jpeg" },
  { name: "Christelle, Mathis & Noah", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/8d3a9bf0-5e27-4b87-81d6-fcf5678c4212/WhatsApp+Image+2025-01-14+at+08.54.47.jpeg" },
  { name: "Laurence & Serge", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/36a1a8e7-f386-4bca-98e8-190e43474790/WhatsApp+Image+2025-01-14+at+09.43.02.jpeg" },
  { name: "Jacques & Marie Hélène", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/b2e22d8e-2d95-4aa8-b572-531a8f227553/WhatsApp+Image+2025-01-14+at+11.39.03.jpg" },
  { name: "Richard, Alexandra, Tiago & Rudy", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/cb50ef2a-bcd7-450f-939c-1dfc90cecbbc/WhatsApp+Image+2025-01-14+at+12.13.16.jpeg" },
  { name: "Damien", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/a2bdd160-169c-4deb-af24-553416015fc1/WhatsApp+Image+2025-01-14+at+13.14.27.jpeg" },
  { name: "Serge & Stéphane", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/fcefeb0f-501a-4257-a94d-d78e487556cc/WhatsApp+Image+2025-01-14+at+15.49.38.jpeg" },
  { name: "Yannick", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/8f27eb52-71c5-483a-ada6-390fb37d16ee/WhatsApp+Image+2025-01-14+at+20.00.18.jpeg" },
  { name: "Hassan", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/618dd8b4-91fe-4179-88b7-92276ff125b4/WhatsApp+Image+2025-01-14+at+20.57.11.jpeg" },
  { name: "Evelyne & Rafael", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/7ee39762-84c7-4b4a-aa76-efc1b9307e61/WhatsApp+Image+2025-01-14+at+23.32.14.jpeg" },
  { name: "Dominique", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/89266fa0-7542-4104-814d-480a16737cf4/WhatsApp+Image+2025-01-15+at+15.06.53.jpeg" },
  { name: "Olivier & Christèle", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/5f76f012-71ab-4356-a042-e2b5f983e829/WhatsApp+Image+2025-01-16+at+14.47.12.jpeg" },
  { name: "Karim-Olivier & Séverine", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/dd1c7066-770f-4630-94cb-d33104a1c7a7/WhatsApp+Image+2025-01-17+at+09.58.49.jpeg" },
  { name: "Hervé", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/a893a76e-b49b-479e-81e6-57f70996450f/WhatsApp+Image+2025-01-17+at+10.35.08.jpeg" },
  { name: "Sylvain", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/99c78434-c5f0-4146-baf3-bbbd8450fe5a/WhatsApp+Image+2025-01-17+at+18.27.31.jpeg" },
  { name: "Valérie & Joël", image: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/6cdcdaa3-94ec-43f7-8e83-0e19cbfdda8a/WhatsApp+Image+2025-01-20+at+22.24.29.jpeg" },
];

export default function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    // Compute active index
    const cardWidth = el.scrollWidth / clients.length;
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  };

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollBy = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    // Detect mobile vs desktop based on viewport
    const isMobile = window.innerWidth < 640;
    // On mobile, scroll one card width; on desktop, scroll 2 cards
    const cardEl = el.querySelector(":scope > div") as HTMLElement | null;
    const cardWidth = cardEl
      ? cardEl.offsetWidth + 20 // includes gap-5
      : el.clientWidth;
    const scrollAmount = isMobile ? cardWidth : cardWidth * 2;
    el.scrollBy({ left: scrollAmount * direction, behavior: "smooth" });
  };

  return (
    <section id="clients" className="py-16 lg:py-24 bg-offwhite overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-2xl">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-5xl leading-[1.1] tracking-tight text-ink">
              <CircleHighlight>+100 familles</CircleHighlight>{" "}
              françaises installées à Barcelone.
            </h2>
            <p className="mt-4 text-body text-[13px] sm:text-sm lg:text-base leading-relaxed">
              Nos clients ne postent pas d&apos;avis Google. Ils nous appellent
              pour prendre un café ou déjeuner avec nous, plusieurs semaines,
              mois ou années après leur achat.
            </p>
          </div>
          {/* Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
            <div className="font-mono text-sm text-body/70">
              <span className="text-ink font-medium">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-body/40"> / {clients.length}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollBy(-1)}
                disabled={!canScrollLeft}
                aria-label="Précédent"
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-ink/15 flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-ink"
              >
                ←
              </button>
              <button
                onClick={() => scrollBy(1)}
                disabled={!canScrollRight}
                aria-label="Suivant"
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-orange text-white flex items-center justify-center hover:bg-orangeDark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slider track - extends beyond container for edge fade */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-5 lg:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-6 lg:px-10 max-w-[1400px] mx-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {clients.map((client, i) => (
            <div
              key={i}
              className="snap-center sm:snap-start shrink-0 w-[calc(100vw-3rem)] sm:w-[280px] lg:w-[320px] group"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-beige">
                <img
                  src={client.image}
                  alt={client.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                {/* Number badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-orange text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
                  № {String(i + 1).padStart(2, "0")}
                </div>
                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-white">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-orange mb-1 font-medium">
                    Installé·e à Barcelona
                  </div>
                  <div className="font-display font-semibold text-base lg:text-lg leading-tight">
                    {client.name}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Final CTA card */}
          <div className="snap-center sm:snap-start shrink-0 w-[calc(100vw-3rem)] sm:w-[280px] lg:w-[320px]">
            <a
              href="#contact"
              className="relative aspect-[4/5] rounded-[2rem] bg-orange hover:bg-orangeDark transition-colors p-8 flex flex-col justify-between text-white"
            >
              <div className="text-5xl">✨</div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-80 mb-2 font-medium">
                  Et après tout ça
                </div>
                <div className="font-display font-semibold text-xl lg:text-2xl leading-tight mb-3">
                  Et vous,
                  <br />
                  prochainement ?
                </div>
                <div className="inline-flex items-center gap-2 text-sm uppercase tracking-wider border-b border-white/60 pb-0.5">
                  Démarrer mon projet
                  <span>→</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Edge fade overlays — desktop only */}
        <div className="hidden sm:block absolute top-0 left-0 bottom-4 w-12 lg:w-20 bg-gradient-to-r from-offwhite to-transparent pointer-events-none" />
        <div className="hidden sm:block absolute top-0 right-0 bottom-4 w-12 lg:w-20 bg-gradient-to-l from-offwhite to-transparent pointer-events-none" />
      </div>

      {/* Progress indicator */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mt-8">
        <div className="h-1 bg-ink/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange rounded-full transition-all duration-500"
            style={{
              width: `${((activeIndex + 1) / (clients.length + 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
