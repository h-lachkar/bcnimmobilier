import type { Metadata } from "next";
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
    "compte bancaire Santander",
    "notaire Barcelone",
    "compromis vente arras",
  ],
  authors: [{ name: "BCN-Immobilier", url: SITE_URL }],
  creator: "BCN-Immobilier",
  publisher: "BCN-Immobilier",
  applicationName: "BCN-Immobilier",
  category: "Real Estate",
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "BCN-Immobilier",
    title:
      "BCN-Immobilier — Chasseur immobilier français à Barcelone",
    description:
      "Recherche, visites, négociation et accompagnement complet sécurisé jusqu'à la signature notaire. Forfait unique 1%, aucune avance. +100 familles françaises installées à Barcelone.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "BCN-Immobilier — Agence française à Barcelone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BCN-Immobilier — Chasseur immobilier français à Barcelone",
    description:
      "Achetez votre appartement à Barcelone avec une agence française : ciblage, visites, négociation et accompagnement complet. Forfait 1%, sous 24h.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.webp", type: "image/webp" },
      { url: "/favicon.ico" },
    ],
    apple: "/logo.webp",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    "geo.region": "ES-CT",
    "geo.placename": "Barcelona",
    "geo.position": "41.3851;2.1734",
    ICBM: "41.3851, 2.1734",
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
    name: "BCN-Immobilier",
    alternateName: "BCN Immobilier",
    description:
      "Agent immobilier français à Barcelone depuis 2016. Chasseur immobilier francophone : recherche, visites, négociation, accompagnement administratif et notarial.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.webp`,
    image: `${SITE_URL}/logo.webp`,
    foundingDate: "2016",
    telephone: "+33630077425",
    email: "contact@bcn-immobilier.com",
    priceRange: "1%",
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
    areaServed: {
      "@type": "City",
      name: "Barcelona",
    },
    availableLanguage: ["French", "Spanish"],
    sameAs: ["https://wa.me/33630077425"],
    employee: {
      "@type": "Person",
      name: "Chloé",
      jobTitle: "Agent immobilier",
      nationality: ["French", "Spanish"],
    },
    makesOffer: {
      "@type": "Offer",
      name: "Forfait Tranquilité 1%",
      description:
        "Recherche, négociation et accompagnement complet jusqu'à la signature notaire. 1% du prix d'achat, payable uniquement en cas de conclusion.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        price: "1% du prix d'achat",
      },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
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

  return (
    <html
      lang="fr"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
