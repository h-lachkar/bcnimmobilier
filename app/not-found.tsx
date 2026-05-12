import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable — BCN-Immobilier",
  description: "Cette page n'existe pas. Retournez à l'accueil de BCN-Immobilier.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg mx-auto">
        <div className="font-display font-semibold text-[120px] leading-none text-orange/20 select-none">
          404
        </div>
        <h1 className="font-display font-semibold text-2xl sm:text-3xl text-ink mt-4 leading-tight">
          Cette page n&apos;existe pas.
        </h1>
        <p className="mt-4 text-body text-sm leading-relaxed">
          Elle a peut-être été déplacée ou supprimée. Retournez à l&apos;accueil pour trouver ce que vous cherchez.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-pill-orange">
            Retour à l&apos;accueil
            <span>→</span>
          </Link>
          <a
            href="tel:+33630077425"
            className="inline-flex items-center gap-2 px-6 py-4 text-sm tracking-wide uppercase text-ink bg-white border border-black/10 rounded-full hover:border-orange transition-colors font-medium"
          >
            🇫🇷 +33 6 30 07 74 25
          </a>
        </div>
      </div>
    </div>
  );
}
