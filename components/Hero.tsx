"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import CircleHighlight from "./CircleHighlight";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen overflow-hidden"
      aria-label="Présentation BCN-Immobilier"
    >
      {/* Parallax background */}
      <div className="absolute inset-0">
        <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
          <img
            src="/images/apartment-hero.jpeg"
            alt="Appartement intérieur à Barcelone — salon avec vue, sélectionné par BCN-Immobilier"
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1600"
            height="1066"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display font-medium text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
          >
            Achetez votre appartement à{" "}
            <CircleHighlight>Barcelone</CircleHighlight>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Ciblage, visites et accompagnement{" "}
            <CircleHighlight>complet sécurisé</CircleHighlight>. Chasseur
            immobilier français à Barcelone depuis 2016.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-wrap items-center justify-center gap-5"
          >
            <a
              href="#contact"
              className="btn-pill-orange"
              aria-label="Nous contacter pour démarrer votre projet"
            >
              Contactez-nous
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="tel:+33630077425"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm tracking-wide uppercase text-ink bg-white rounded-full hover:bg-ink hover:text-white transition-colors font-medium shadow-lg"
              aria-label="Téléphoner au +33 6 30 07 74 25"
            >
              <span aria-hidden="true">🇫🇷</span>
              <span lang="fr">+33 6 30 07 74 25</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom scroll indicator */}
        <motion.a
          href="#expertise"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group cursor-pointer"
          aria-label="Découvrir les services"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          <div className="text-[10px] uppercase tracking-[0.3em]">
            Découvrir
          </div>
          <div className="w-px h-12 bg-white/40 group-hover:bg-white transition-colors" />
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="animate-bounce"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
