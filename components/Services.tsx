export default function Services() {
  return (
    <section id="services" className="bg-cream">
      {/* Service 1 — Recherche, image right */}
      <ServiceRow
        image="https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/04824028-9445-4487-917b-b840841de612/WhatsApp+Image+2022-03-13+at+16.54.16.jpeg"
        imageRight
        title={
          <>
            Recherche et sélection de biens{" "}
            <span className="circle-highlight">
              <span className="relative z-10">ciblée</span>
            </span>{" "}
            à vos besoins.
          </>
        }
        paragraphs={[
          "Trouver et acheter le bon appartement à Barcelone peut être un défi. Nous prenons le temps de comprendre vos besoins et vos envies pour vous proposer une sélection de biens parfaitement adaptés à votre projet.",
          "Qu'il s'agisse d'un appartement familial, d'un investissement locatif ou d'un pied-à-terre, nous faisons le travail pour vous : ciblage précis, visites organisées, et conseils à chaque étape. Grâce à notre réactivité, votre recherche devient simple et efficace. Ensemble, trouvons l'appartement qui vous correspond !",
        ]}
        ctaLabel="Parlons de votre projet"
      />

      {/* Service 2 — Forfait 1%, image left */}
      <div className="bg-offwhite">
        <ServiceRow
          image="https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/33bc9aa7-65b8-4536-91da-75d1b8ffd17f/UNADJUSTEDNONRAW_thumb_990c.jpg"
          title={
            <>
              Un Forfait{" "}
              <span className="circle-highlight">
                <span className="relative z-10">Tranquilité</span>
              </span>{" "}
              de 1%.
            </>
          }
          paragraphs={[
            "Nous travaillons comme un chasseur immobilier — nous recherchons, ciblons et sécurisons votre achat à 100%.",
            "Nous facturons un FORFAIT UNIQUE de 1% du prix de l'appartement acheté, payable uniquement en cas de conclusion (aucune avance à nous verser au départ ou pendant la recherche). Nous sommes payés au résultat.",
            "Nous gérons les phases d'offre, de compromis de vente (arras), de vérification de tous les documents légaux comme le ferait un avocat. Nous avons une expérience et expertise de 10 ans dans ce domaine à Barcelone. Nous vous accompagnons jusqu'à l'achat final chez le notaire et vous aidons à ouvrir un compte bancaire chez Banco Santander.",
          ]}
          extra={
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <PriceCard price="250 000 €" fee="2 500" total="3 025" />
              <PriceCard price="500 000 €" fee="5 000" total="6 050" />
            </div>
          }
          footer="Cette facture sera réglée en 2 fois : 50% après conclusion du compromis de vente et 50% le jour de la signature chez le notaire."
          ctaLabel="Prenez rendez-vous"
        />
      </div>

      {/* Service 3 — Démarches, image right */}
      <ServiceRow
        image="https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/6d0f79ff-6dcc-4da3-9190-74142d6632df/7Z7A7905.jpg"
        imageRight
        title={
          <>
            Accompagnement pour vos{" "}
            <span className="circle-highlight">
              <span className="relative z-10">démarches</span>
            </span>{" "}
            administratives.
          </>
        }
        paragraphs={[
          "Les démarches administratives peuvent être complexes, et encore plus lorsqu'il s'agit de s'installer dans un autre pays. Nous sommes là pour vous accompagner et vous guider à chaque étape, sans jamais vous laisser seul face aux formalités.",
          "Qu'il s'agisse de comprendre les documents légaux (NIE), d'ouvrir un compte bancaire ou de préparer la signature chez le notaire, nous vous aidons à naviguer dans ce processus parfois déroutant. Avec notre expertise, nous vous donnons les clés pour avancer en toute confiance et réussir votre achat immobilier à Barcelone.",
          "Bientôt, nous partagerons des tapas ensemble... Rejoignez-nous.",
        ]}
        ctaLabel="Parlez avec une experte"
      />
    </section>
  );
}

function ServiceRow({
  image,
  imageAlt = "",
  imageRight,
  title,
  paragraphs,
  extra,
  footer,
  ctaLabel,
}: {
  image: string;
  imageAlt?: string;
  imageRight?: boolean;
  title: React.ReactNode;
  paragraphs: string[];
  extra?: React.ReactNode;
  footer?: string;
  ctaLabel: string;
}) {
  return (
    <div className="py-14 lg:py-20">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={imageRight ? "lg:order-2" : ""}>
            <div className="rounded-[3rem] overflow-hidden aspect-[4/5]">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="800"
                height="1000"
              />
            </div>
          </div>

          {/* Text */}
          <div className={imageRight ? "lg:order-1" : ""}>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight text-ink">
              {title}
            </h2>
            <div className="mt-5 space-y-3 text-body text-[13px] sm:text-sm lg:text-base leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {extra}

            {footer && (
              <p className="mt-6 text-body/70 italic text-sm">{footer}</p>
            )}

            <div className="mt-10">
              <a href="#contact" className="btn-pill">
                {ctaLabel}
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceCard({
  price,
  fee,
  total,
}: {
  price: string;
  fee: string;
  total: string;
}) {
  return (
    <div className="bg-white border border-black/8 rounded-3xl p-6 shadow-sm">
      <div className="text-xs uppercase tracking-widest text-body/60">
        Pour un achat de
      </div>
      <div className="font-display font-semibold text-2xl mt-1 text-ink">
        {price}
      </div>
      <div className="mt-4 pt-4 border-t border-black/5">
        <div className="text-xs uppercase tracking-widest text-body/60">
          Notre commission (1%)
        </div>
        <div className="font-display font-semibold text-xl mt-1 text-orange">
          {fee} € + TVA
        </div>
        <div className="text-xs text-body/60 mt-1">soit {total} €</div>
      </div>
    </div>
  );
}
