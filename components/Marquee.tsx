export default function Marquee() {
  const items = [
    "Recherche ciblée",
    "Visites organisées",
    "Négociation",
    "Compromis (Arras)",
    "Compte Banco Santander",
    "Démarches NIE",
    "Signature notaire",
    "Tapas & célébration",
  ];

  return (
    <div className="bg-orange text-white py-5 overflow-hidden">
      <div className="marquee-track">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6 shrink-0">
            {items.map((item, j) => (
              <div key={j} className="flex items-center gap-12 shrink-0">
                <span className="text-lg lg:text-xl whitespace-nowrap font-medium">
                  {item}
                </span>
                <span className="text-white/70">●</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
