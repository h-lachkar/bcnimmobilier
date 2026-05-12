"use client";

import { motion, type Variants } from "framer-motion";
import CircleHighlight from "./CircleHighlight";

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="expertise" className="py-16 lg:py-24 bg-cream">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image left */}
          <motion.div
            className="order-2 lg:order-1"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="rounded-[3rem] overflow-hidden aspect-[4/5]">
              <img
                src="https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/346f5d5b-3c8c-4f78-81a5-5863e0ce668d/IMG_2184.jpeg"
                alt="Chloé, agent immobilier français à Barcelone, fondatrice de BCN-Immobilier depuis 2016"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
                width="800"
                height="1000"
              />
            </div>
          </motion.div>

          {/* Text right */}
          <motion.div
            className="order-1 lg:order-2"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-5xl leading-[1.1] tracking-tight text-ink">
              Expertise &amp;{" "}
              <CircleHighlight>réactivité</CircleHighlight>{" "}
              à votre service.
            </h2>

            <div className="mt-6 space-y-3 text-body text-[13px] sm:text-sm lg:text-base leading-relaxed">
              <p>
                <strong className="text-ink">Chloé</strong> est votre agent
                immobilier français à Barcelone depuis 2016. Et oui,
                j&apos;ai commencé à travailler très jeune, dès l&apos;âge de
                16 ans, en parallèle avec mes études — j&apos;assistais mon
                papa et j&apos;ai effectué de nombreuses visites avec lui !
                J&apos;adooore l&apos;immobilier ! J&apos;ai repris l&apos;agence
                de mes parents depuis 5 ans maintenant. Je vis à Barcelone
                avec LUNA 🐶. J&apos;ai 26 ans et la double nationalité
                franco-espagnole.
              </p>
              <p>
                Notre agence,{" "}
                <strong className="text-ink">BCN-Immobilier</strong>, a aidé
                plus de <strong className="text-ink">100 clients français</strong>{" "}
                à acheter leur appartement à Barcelone depuis près de 10 ans.
                Notre expertise nous permet de vous accompagner à chaque étape
                jusqu&apos;à la signature finale chez le notaire. Nous vous
                garantissons un achat 100% sécurisé et un accompagnement
                réactif, transparent, personnalisé et{" "}
                <strong className="text-ink">&laquo; HUMAIN &raquo;</strong>.
              </p>
              <p className="text-body/80">
                Nota : Vous discuterez et avancerez dans votre projet avec un
                être humain et non pas avec ChatGPT ou une IA ! 😅
              </p>
              <p>
                Nos clients ne postent pas d&apos;avis Google. Ils
                m&apos;appellent régulièrement pour prendre un café ou déjeuner
                avec nous, plusieurs semaines, mois ou années après leur achat.
                Le faux marketing internet à la mode ne nous intéresse pas. Nous
                privilégions le vrai rapport humain, et à long-terme.
              </p>
              <p className="text-ink font-medium">
                Barcelone a métamorphosé notre vie, nous sommes ravis de vous
                aider à changer la vôtre.
              </p>
              <p className="text-body/70 italic text-base">
                &laquo; Y a que les routes qui sont belles... &raquo;
                <span className="block text-sm not-italic mt-1 text-body/50">
                  — J-J Goldman, &laquo; On ira &raquo;
                </span>
              </p>
            </div>

            <div className="mt-10">
              <a href="#contact" className="btn-pill">
                Contactez Chloé
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
