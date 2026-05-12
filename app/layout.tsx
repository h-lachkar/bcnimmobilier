import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://www.bcn-immobilier.com";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#D4602E" },
    { media: "(prefers-color-scheme: dark)", color: "#1F1F1F" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "BCN-Immobilier — Chasseur immobilier français à Barcelone | Acheter un appartement",
    template: "%s · BCN-Immobilier Barcelona",
  },
  description:
    "Agence immobilière française à Barcelone depuis 2016. Chasseur immobilier pour francophones : recherche ciblée, visites, négociation, NIE, notaire. Forfait unique 1%, aucune avance, +100 familles installées. Réponse sous 24h.",
  keywords: [
    "agent immobilier français Barcelone",
    "chasseur immobilier Barcelone",
    "acheter appartement Barcelone",
    "agence immobilière francophone Barcelone",
    "immobilier Barcelone français",
    "acheter à Barcelone",
    "BCN Immobilier",
    "Chloé Barcelone immobilier",
    "investissement locatif Barcelone",
    "pied-à-terre Barcelone",
    "NIE Barcelone",
    "compte bancaire Santander Barcelone",
    "notaire Barcelone achat",
    "compromis vente arras Barcelone",
    "français installés Barcelone",
    "expatrié Barcelone immobilier",
  ],
  authors: [{ name: "BCN-Immobilier", url: SITE_URL }],
  creator: "BCN-Immobilier",
  publisher: "BCN-Immobilier",
  applicationName: "BCN-Immobilier",
  category: "Real Estate",
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "BCN-Immobilier",
    title:
      "BCN-Immobilier — Chasseur immobilier français à Barcelone | Forfait 1%",
    description:
      "Recherche, visites, négociation et accompagnement complet sécurisé jusqu'à la signature notaire. Forfait unique 1%, aucune avance. +100 familles françaises installées à Barcelone depuis 2016.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BCN-Immobilier — Achetez votre appartement à Barcelone",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BCN-Immobilier — Chasseur immobilier français à Barcelone",
    description:
      "Achetez votre appartement à Barcelone avec une agence française. Forfait unique 1%, réponse sous 24h, +100 familles installées.",
    images: ["/og-image.png"],
    creator: "@bcnimmobilier",
    site: "@bcnimmobilier",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: true, email: true, address: true },
  other: {
    "geo.region": "ES-CT",
    "geo.placename": "Barcelona",
    "geo.position": "41.3851;2.1734",
    ICBM: "41.3851, 2.1734",
    rating: "general",
    distribution: "global",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD structured data
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#organization`,
    name: "BCN-Immobilier",
    alternateName: ["BCN Immobilier", "BCN-Immo"],
    description:
      "Agent immobilier français à Barcelone depuis 2016. Chasseur immobilier francophone : recherche, visites, négociation, accompagnement administratif et notarial.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/og-image.png`,
    foundingDate: "2016",
    telephone: "+33630077425",
    email: "contact@bcn-immobilier.com",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: ["Cash", "Bank Transfer"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer Gravina 9",
      addressLocality: "Barcelona",
      addressRegion: "Catalunya",
      postalCode: "08001",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3851,
      longitude: 2.1734,
    },
    areaServed: [
      { "@type": "City", name: "Barcelona" },
      { "@type": "AdministrativeArea", name: "Catalunya" },
    ],
    availableLanguage: [
      { "@type": "Language", name: "French", alternateName: "fr" },
      { "@type": "Language", name: "Spanish", alternateName: "es" },
    ],
    sameAs: ["https://wa.me/33630077425"],
    employee: {
      "@type": "Person",
      "@id": `${SITE_URL}/#chloe`,
      name: "Chloé",
      jobTitle: "Agent immobilier",
      nationality: ["French", "Spanish"],
      worksFor: { "@id": `${SITE_URL}/#organization` },
      knowsLanguage: ["fr", "es"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services immobiliers",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Recherche et sélection ciblée",
            description:
              "Recherche ciblée d'appartements à Barcelone, sélection adaptée aux besoins (familial, investissement, pied-à-terre).",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "Barcelona",
          },
        },
        {
          "@type": "Offer",
          name: "Forfait Tranquilité 1%",
          itemOffered: {
            "@type": "Service",
            name: "Forfait Tranquilité 1%",
            description:
              "Forfait unique de 1% du prix de l'appartement acheté, payable uniquement en cas de conclusion. Inclut négociation, compromis, vérification documents, signature notaire.",
            provider: { "@id": `${SITE_URL}/#organization` },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            price: "1",
            description: "1% du prix d'achat",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Accompagnement administratif",
            description:
              "Aide aux démarches administratives : NIE, ouverture de compte bancaire Banco Santander, préparation signature notaire.",
            provider: { "@id": `${SITE_URL}/#organization` },
          },
        },
      ],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+33630077425",
        contactType: "customer service",
        availableLanguage: ["French", "Spanish"],
        areaServed: ["ES", "FR"],
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "100",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "BCN-Immobilier",
    description:
      "Site officiel de BCN-Immobilier, chasseur immobilier français à Barcelone.",
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quel est le tarif de BCN-Immobilier pour acheter à Barcelone ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un forfait unique de 1% du prix de l'appartement acheté, payable uniquement en cas de conclusion. Aucune avance n'est demandée au départ. Exemple : pour un achat à 250 000 €, notre commission est de 2 500 € + TVA (soit 3 025 €).",
        },
      },
      {
        "@type": "Question",
        name: "Quels services propose BCN-Immobilier ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Recherche ciblée de biens, visites organisées, négociation, gestion du compromis de vente (arras), vérification des documents légaux, accompagnement jusqu'à la signature notaire, ouverture de compte bancaire chez Banco Santander, et démarches administratives (NIE).",
        },
      },
      {
        "@type": "Question",
        name: "En combien de temps répondez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sous 24h, en français, par un être humain (jamais une IA).",
        },
      },
      {
        "@type": "Question",
        name: "Depuis quand existe BCN-Immobilier ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depuis 2016. Plus de 100 familles françaises ont été accompagnées dans leur installation à Barcelone.",
        },
      },
      {
        "@type": "Question",
        name: "Où est située l'agence ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Carrer Gravina 9, 08001 Barcelona, España.",
        },
      },
      {
        "@type": "Question",
        name: "Faut-il payer une avance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Aucune avance n'est demandée. Le forfait 1% est payable uniquement en cas de conclusion : 50% à la signature du compromis, 50% à la signature notaire.",
        },
      },
      {
        "@type": "Question",
        name: "Aidez-vous pour le NIE et l'ouverture de compte bancaire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Nous accompagnons nos clients pour l'obtention du NIE (Número de Identidad de Extranjero) et l'ouverture d'un compte bancaire chez Banco Santander.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "BCN-Immobilier",
    image: `${SITE_URL}/og-image.png`,
    "@id_organization": `${SITE_URL}/#organization`,
    url: SITE_URL,
    telephone: "+33630077425",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer Gravina 9",
      addressLocality: "Barcelona",
      postalCode: "08001",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3851,
      longitude: 2.1734,
    },
  };

  return (
    <html
      lang="fr"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          as="image"
          href="https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/04824028-9445-4487-917b-b840841de612/WhatsApp+Image+2022-03-13+at+16.54.16.jpeg"
          fetchPriority="high"
        />
        <link rel="dns-prefetch" href="//images.squarespace-cdn.com" />
        <link rel="preconnect" href="https://images.squarespace-cdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//assets.calendly.com" />
        <link rel="dns-prefetch" href="//wa.me" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="antialiased">
        {/* Skip link for keyboard navigation / a11y */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-ink focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
