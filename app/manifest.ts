import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BCN-Immobilier — Chasseur immobilier français à Barcelone",
    short_name: "BCN-Immobilier",
    description:
      "Agence immobilière française à Barcelone depuis 2016. Recherche ciblée, visites, négociation et accompagnement complet sécurisé. Forfait unique 1%.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#D4602E",
    orientation: "portrait-primary",
    lang: "fr-FR",
    dir: "ltr",
    categories: ["business", "lifestyle", "real estate"],
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
