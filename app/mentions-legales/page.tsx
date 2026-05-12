import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — BCN-Immobilier",
  description:
    "Mentions légales de l'agence BCN-Immobilier, chasseur immobilier français à Barcelone.",
};

export default function MentionsLegales() {
  return (
    <main className="bg-cream min-h-screen">
      <Nav />

      <section className="pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <div className="text-[10px] uppercase tracking-[0.3em] text-body/50 font-mono mb-8 flex items-center gap-2">
            <a href="/" className="hover:text-orange transition-colors">
              Accueil
            </a>
            <span>/</span>
            <span className="text-ink">Mentions légales</span>
          </div>

          <h1 className="font-display font-semibold text-3xl lg:text-5xl leading-[1.1] tracking-tight text-ink mb-4">
            Mentions{" "}
            <span className="circle-highlight">
              <span className="relative z-10">légales</span>
            </span>
          </h1>
          <p className="text-body text-sm lg:text-base mb-12">
            Dernière mise à jour : 11 mai 2026
          </p>

          <div className="space-y-10 text-sm lg:text-base text-body leading-relaxed">
            <Block title="Éditeur du site">
              <p>
                <strong className="text-ink">BCN-Immobilier</strong>
                <br />
                Agent immobilier français à Barcelone
                <br />
                Carrer Gravina 9, 08001 Barcelona, España
                <br />
                Téléphone :{" "}
                <a
                  href="tel:+33630077425"
                  className="text-orange hover:underline"
                >
                  +33 6 30 07 74 25
                </a>
                <br />
                Email :{" "}
                <a
                  href="mailto:contact@bcn-immobilier.com"
                  className="text-orange hover:underline"
                >
                  contact@bcn-immobilier.com
                </a>
              </p>
              <p className="mt-3">
                Directrice de la publication : Chloé — Agence francophone à
                Barcelone depuis 2016.
              </p>
            </Block>

            <Block title="Hébergement">
              <p>
                Ce site est hébergé par les services compatibles avec
                l&apos;application Next.js. Les détails du fournisseur
                d&apos;hébergement peuvent être communiqués sur simple demande
                écrite à l&apos;adresse e-mail de contact ci-dessus.
              </p>
            </Block>

            <Block title="Propriété intellectuelle">
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logos,
                graphismes, photographies, vidéos, sons) est la propriété
                exclusive de BCN-Immobilier ou de ses partenaires, et est
                protégé par les lois françaises et internationales relatives à
                la propriété intellectuelle.
              </p>
              <p className="mt-3">
                Toute reproduction, représentation, modification, publication,
                adaptation totale ou partielle des éléments du site, quel que
                soit le moyen ou le procédé utilisé, est interdite sans
                autorisation écrite préalable.
              </p>
            </Block>

            <Block title="Données personnelles (RGPD)">
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez d&apos;un droit d&apos;accès, de
                rectification, d&apos;opposition et de suppression des données
                vous concernant.
              </p>
              <p className="mt-3">
                Les données collectées via les formulaires de contact ou par
                téléphone sont utilisées uniquement dans le cadre du suivi de
                votre projet immobilier et ne sont jamais cédées à des tiers.
              </p>
              <p className="mt-3">
                Pour exercer vos droits, écrivez-nous à{" "}
                <a
                  href="mailto:contact@bcn-immobilier.com"
                  className="text-orange hover:underline"
                >
                  contact@bcn-immobilier.com
                </a>
                .
              </p>
            </Block>

            <Block title="Cookies">
              <p>
                Ce site utilise un nombre minimal de cookies, uniquement
                techniques, nécessaires au bon fonctionnement de la navigation
                et à l&apos;affichage des contenus. Aucun cookie de suivi
                publicitaire n&apos;est déposé sans votre consentement.
              </p>
            </Block>

            <Block title="Activité réglementée">
              <p>
                BCN-Immobilier exerce son activité d&apos;agence immobilière en
                Espagne, sous le statut applicable aux agents immobiliers
                indépendants. L&apos;agence intervient en qualité de chasseur
                immobilier pour le compte d&apos;acheteurs francophones.
              </p>
            </Block>

            <Block title="Limitation de responsabilité">
              <p>
                Les informations diffusées sur ce site sont présentées à titre
                indicatif. BCN-Immobilier s&apos;efforce d&apos;assurer leur
                exactitude et leur mise à jour, mais ne peut garantir
                l&apos;exhaustivité ni l&apos;absence d&apos;erreurs.
                L&apos;utilisateur reste seul responsable de l&apos;usage
                qu&apos;il fait des informations consultées.
              </p>
            </Block>

            <Block title="Loi applicable">
              <p>
                Les présentes mentions légales sont soumises au droit français
                et espagnol selon la nature du litige. Tout différend relatif à
                l&apos;utilisation du site sera, à défaut de règlement
                amiable, soumis aux tribunaux compétents.
              </p>
            </Block>
          </div>

          {/* Back link */}
          <div className="mt-16 pt-10 border-t border-black/10">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-orange hover:underline"
            >
              <span>←</span> Retour à l&apos;accueil
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display font-semibold text-lg lg:text-xl text-ink mb-3">
        {title}
      </h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
