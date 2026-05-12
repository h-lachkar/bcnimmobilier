const steps = [
  {
    n: "1",
    title: "Recherche",
    desc: "Nous ciblons vos besoins et sélectionnons les meilleures options pour vous.",
    icon: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/64c8c243-d1bb-45c4-8708-2f78f167e7e7/search.png",
  },
  {
    n: "2",
    title: "Visites",
    desc: "Explorez les appartements qui vous correspondent avec des visites ciblées et gagnez du temps.",
    icon: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/ec6791a3-8bfe-45ea-9eca-5d709fd4a123/location-mark.png",
  },
  {
    n: "3",
    title: "Offre",
    desc: "Soumettez une offre avec notre aide pour maximiser vos chances de succès.",
    icon: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/556766bb-7c31-4206-931d-77a5669dc22d/advertising.png",
  },
  {
    n: "4",
    title: "Signature",
    desc: "Finalisez l'achat en toute sérénité. Nous vous guidons à travers les démarches légales.",
    icon: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/ccac18f0-68bc-4541-b448-318d886a7262/agreement.png",
  },
  {
    n: "5",
    title: "Tapas et Célébration",
    desc: "Célébrons votre nouvelle vie à Barcelone autour de tapas !",
    icon: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/4bf1ef1b-2240-482f-917e-9fcf703444eb/celebration.png",
  },
];

export default function Process() {
  return (
    <section id="processus" className="py-16 lg:py-24 bg-cream">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-5xl leading-[1.1] tracking-tight text-ink">
            Comment{" "}
            <span className="circle-highlight">
              <span className="relative z-10">acheter</span>
            </span>{" "}
            un appartement à Barcelone
          </h2>
        </div>

        {/* 5 steps horizontal */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              {/* Icon circle */}
              <div className="mx-auto w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-offwhite flex items-center justify-center p-5 group-hover:bg-orange/10 transition-colors mb-4">
                <img
                  src={step.icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-orange text-[10px] uppercase tracking-[0.3em] font-medium mb-2">
                Étape {step.n}
              </div>
              <h3 className="font-display font-semibold text-lg lg:text-xl text-ink mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-body leading-relaxed max-w-[200px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
