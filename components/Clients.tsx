"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CircleHighlight from "./CircleHighlight";

const clients = [
  { name: "Brigitte, Michel & Dune", image: "/images/clients/01-brigitte-michel-dune.jpeg" },
  { name: "Olivier", image: "/images/clients/02-olivier.jpeg" },
  { name: "Sophie & Charles", image: "/images/clients/03-sophie-charles.jpeg" },
  { name: "Catalina", image: "/images/clients/04-catalina.jpeg" },
  { name: "Phillipe & Lola", image: "/images/clients/05-phillipe-lola.jpeg" },
  { name: "Séverine", image: "/images/clients/06-severine.jpeg" },
  { name: "Eric & Alice", image: "/images/clients/07-eric-alice.jpeg" },
  { name: "Lionel", image: "/images/clients/08-lionel.jpeg" },
  { name: "Xavier & Romain", image: "/images/clients/09-xavier-romain.jpeg" },
  { name: "Rainer", image: "/images/clients/10-rainer.jpeg" },
  { name: "Sandra & Nicolas", image: "/images/clients/11-sandra-nicolas.jpg" },
  { name: "Véronique & Pierre", image: "/images/clients/12-veronique-pierre.jpg" },
  { name: "Stephen", image: "/images/clients/13-stephen.jpg" },
  { name: "Catherine & Éric", image: "/images/clients/14-catherine-eric.jpeg" },
  { name: "Steve & Marion", image: "/images/clients/15-steve-marion.jpeg" },
  { name: "Christelle, Mathis & Noah", image: "/images/clients/16-christelle-mathis-noah.jpeg" },
  { name: "Laurence & Serge", image: "/images/clients/17-laurence-serge.jpeg" },
  { name: "Jacques & Marie Hélène", image: "/images/clients/18-jacques-marie-helene.jpg" },
  { name: "Richard, Alexandra, Tiago & Rudy", image: "/images/clients/19-richard-alexandra-tiago-rudy.jpeg" },
  { name: "Damien", image: "/images/clients/20-damien.jpeg" },
  { name: "Serge & Stéphane", image: "/images/clients/21-serge-stephane.jpeg" },
  { name: "Yannick", image: "/images/clients/22-yannick.jpeg" },
  { name: "Hassan", image: "/images/clients/23-hassan.jpeg" },
  { name: "Evelyne & Rafael", image: "/images/clients/24-evelyne-rafael.jpeg" },
  { name: "Dominique", image: "/images/clients/25-dominique.jpeg" },
  { name: "Olivier & Christèle", image: "/images/clients/26-olivier-christele.jpeg" },
  { name: "Karim-Olivier & Séverine", image: "/images/clients/27-karim-olivier-severine.jpeg" },
  { name: "Hervé", image: "/images/clients/28-herve.jpeg" },
  { name: "Sylvain", image: "/images/clients/29-sylvain.jpeg" },
  { name: "Valérie & Joël", image: "/images/clients/30-valerie-joel.jpeg" },
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
