export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background apartment image — like original */}
      <div className="absolute inset-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/04824028-9445-4487-917b-b840841de612/WhatsApp+Image+2022-03-13+at+16.54.16.jpeg"
          alt="Appartement à Barcelone"
          className="w-full h-full object-cover"
        />
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display font-medium text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Achetez votre appartement à{" "}
            <span className="circle-highlight">
              <span className="relative z-10">Barcelone</span>
            </span>
          </h1>

          <p className="mt-8 text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
            Ciblage, visites et accompagnement{" "}
            <span className="circle-highlight">
              <span className="relative z-10">complet sécurisé</span>
            </span>
            .
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
            <a href="#contact" className="btn-pill-orange">
              Contactez-nous
              <span>→</span>
            </a>
            <a
              href="tel:+33630077425"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm tracking-wide uppercase text-ink bg-white rounded-full hover:bg-ink hover:text-white transition-colors font-medium shadow-lg"
            >
              🇫🇷 +33 6 30 07 74 25
            </a>
          </div>
        </div>

        {/* Bottom indicator — clickable */}
        <a
          href="#expertise"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group cursor-pointer"
          aria-label="Découvrir"
        >
          <div className="text-[10px] uppercase tracking-[0.3em]">
            Découvrir
          </div>
          <div className="w-px h-12 bg-white/40 group-hover:bg-white transition-colors" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="animate-bounce">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
