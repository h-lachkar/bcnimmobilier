import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-offwhite border-t border-black/5">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14">
                <Image
                  src="/logo.webp"
                  alt="BCN-Immobilier"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display font-semibold text-xl text-ink">
                  BCN-Immobilier
                </div>
                <div className="text-xs text-body/60 uppercase tracking-widest">
                  Barcelona depuis 2016
                </div>
              </div>
            </div>
            <p className="text-sm text-body leading-relaxed max-w-md">
              Agent immobilier français à Barcelone. Agence francophone
              spécialisée dans l&apos;accompagnement complet et sécurisé des
              acheteurs français et francophones.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-orange font-medium mb-4">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-body">
              <li><a href="#expertise" className="hover:text-orange">Expertise</a></li>
              <li><a href="#services" className="hover:text-orange">Services</a></li>
              <li><a href="#processus" className="hover:text-orange">Processus</a></li>
              <li><a href="#clients" className="hover:text-orange">Clients</a></li>
              <li><a href="#contact" className="hover:text-orange">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-orange font-medium mb-4">
              Coordonnées
            </div>
            <ul className="space-y-2 text-sm text-body">
              <li>Carrer Gravina 9</li>
              <li>08001 — Barcelona, España</li>
              <li className="pt-3">
                <a
                  href="tel:+33630077425"
                  className="font-display font-semibold text-lg text-ink hover:text-orange"
                >
                  +33 6 30 07 74 25
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-body/60">
          <div>© 2026 BCN-Immobilier · Tous droits réservés</div>
          <div className="flex gap-6">
            <a href="/mentions-legales" className="hover:text-ink">
              Mentions légales
            </a>
            <span>Made in Barcelona 🌅</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
