/* eslint-disable */
// Generate OG image — uses SVG with rect/path only (no system fonts)
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC = path.join(__dirname, "..", "public", "logo.webp");
const OUT = path.join(__dirname, "..", "public");

const ogWidth = 1200;
const ogHeight = 630;

(async () => {
  // Background SVG — gradient + decorative shapes only (no text)
  const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${ogWidth}" height="${ogHeight}">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFBF5"/>
        <stop offset="100%" stop-color="#F0EBE2"/>
      </linearGradient>
    </defs>
    <rect width="${ogWidth}" height="${ogHeight}" fill="url(#bg)"/>
    <ellipse cx="280" cy="395" rx="195" ry="48" fill="none" stroke="#D4602E" stroke-width="6" transform="rotate(-2 280 395)"/>
    <rect x="80" y="555" width="280" height="50" rx="25" fill="#D4602E"/>
  </svg>`;

  // Render text via SVG with web-safe fallback — using DM Sans-like serif
  // We'll use SVG <text> with `font-family="serif"` and `font-family="sans-serif"` which sharp handles via librsvg + system fonts.
  // To guarantee text renders, we use fontconfig system fonts and a tighter character set.
  // If text still fails, we'll fall back to manually drawing characters as path. But typically sharp/librsvg has DejaVu/Liberation fonts.

  const textSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${ogWidth}" height="${ogHeight}">
    <style>
      .eyebrow { font-family: sans-serif; font-size: 20px; letter-spacing: 6px; font-weight: 500; fill: #D4602E; }
      .title { font-family: serif; font-size: 84px; font-weight: 700; fill: #1F1F1F; }
      .tagline { font-family: sans-serif; font-size: 26px; fill: #3A3A3A; }
      .cta { font-family: sans-serif; font-size: 18px; font-weight: 700; fill: #FFFFFF; letter-spacing: 2px; }
      .phone { font-family: sans-serif; font-size: 18px; fill: #3A3A3A; }
    </style>
    <text x="80" y="100" class="eyebrow">BCN-IMMOBILIER · BARCELONA · DEPUIS 2016</text>
    <text x="80" y="220" class="title">Achetez votre</text>
    <text x="80" y="315" class="title">appartement</text>
    <text x="80" y="410" class="title">a Barcelone.</text>
    <text x="80" y="490" class="tagline">Chasseur immobilier francais · Forfait 1% · Sous 24h</text>
    <text x="220" y="588" class="cta" text-anchor="middle">BCN-IMMOBILIER.COM</text>
    <text x="${ogWidth - 80}" y="588" class="phone" text-anchor="end">+33 6 30 07 74 25</text>
  </svg>`;

  // Logo composite
  const logoBuf = await sharp(SRC)
    .resize(220, 220, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Combine: bg → text → logo
  const bgBuf = await sharp(Buffer.from(bgSvg)).png().toBuffer();
  const textBuf = await sharp(Buffer.from(textSvg)).png().toBuffer();

  await sharp(bgBuf)
    .composite([
      { input: textBuf, top: 0, left: 0 },
      { input: logoBuf, top: 80, left: ogWidth - 300 },
    ])
    .png()
    .toFile(path.join(OUT, "og-image.png"));

  fs.copyFileSync(path.join(OUT, "og-image.png"), path.join(OUT, "twitter-image.png"));

  console.log("✓ og-image.png regenerated (1200x630)");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
