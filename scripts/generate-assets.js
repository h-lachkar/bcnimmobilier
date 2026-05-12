/* eslint-disable */
// Generate all icon/OG assets from logo.webp
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "public", "logo.webp");
const PUBLIC = path.join(__dirname, "..", "public");

const ORANGE = { r: 0xd4, g: 0x60, b: 0x2e };
const CREAM = { r: 0xff, g: 0xff, b: 0xff };

(async () => {
  // Make sure source exists
  if (!fs.existsSync(SRC)) {
    console.error("Source logo missing:", SRC);
    process.exit(1);
  }

  // 1. Favicon ICO equivalent — use PNG 32x32 (Next.js will serve as /favicon.ico if placed there)
  await sharp(SRC)
    .resize(32, 32, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(PUBLIC, "favicon-32x32.png"));

  await sharp(SRC)
    .resize(16, 16, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(PUBLIC, "favicon-16x16.png"));

  // 2. Apple touch icon 180x180 (needs solid background for older iOS)
  await sharp(SRC)
    .resize(160, 160, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .extend({
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
      background: CREAM,
    })
    .flatten({ background: CREAM })
    .png()
    .toFile(path.join(PUBLIC, "apple-touch-icon.png"));

  // 3. Android Chrome / PWA icons 192 + 512
  await sharp(SRC)
    .resize(160, 160, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .extend({
      top: 16,
      bottom: 16,
      left: 16,
      right: 16,
      background: CREAM,
    })
    .flatten({ background: CREAM })
    .png()
    .toFile(path.join(PUBLIC, "icon-192.png"));

  await sharp(SRC)
    .resize(440, 440, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .extend({
      top: 36,
      bottom: 36,
      left: 36,
      right: 36,
      background: CREAM,
    })
    .flatten({ background: CREAM })
    .png()
    .toFile(path.join(PUBLIC, "icon-512.png"));

  // 4. Maskable icon (PWA — covers full square, safe zone in center 80%)
  await sharp(SRC)
    .resize(350, 350, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .extend({
      top: 81,
      bottom: 81,
      left: 81,
      right: 81,
      background: CREAM,
    })
    .flatten({ background: CREAM })
    .png()
    .toFile(path.join(PUBLIC, "icon-maskable-512.png"));

  // 5. Favicon.ico fallback (PNG renamed)
  await sharp(SRC)
    .resize(48, 48, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .flatten({ background: CREAM })
    .png()
    .toFile(path.join(PUBLIC, "favicon.png"));

  // 6. OpenGraph image 1200×630 — composite logo + branding text
  const ogWidth = 1200;
  const ogHeight = 630;

  // Build SVG with logo, title, and decoration
  const svgOG = `
<svg xmlns="http://www.w3.org/2000/svg" width="${ogWidth}" height="${ogHeight}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBF5"/>
      <stop offset="100%" stop-color="#F0EBE2"/>
    </linearGradient>
  </defs>
  <rect width="${ogWidth}" height="${ogHeight}" fill="url(#bg)"/>

  <!-- Decorative orange ellipse -->
  <ellipse cx="900" cy="170" rx="280" ry="70" fill="none" stroke="#D4602E" stroke-width="6" transform="rotate(-3 900 170)"/>

  <!-- Top eyebrow -->
  <text x="80" y="100" font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="6" font-weight="500" fill="#D4602E">
    BCN·IMMOBILIER · BARCELONA · DEPUIS 2016
  </text>

  <!-- Big title -->
  <text x="80" y="220" font-family="Georgia, Times, serif" font-size="88" font-weight="600" fill="#1F1F1F">Achetez votre</text>
  <text x="80" y="320" font-family="Georgia, Times, serif" font-size="88" font-weight="600" fill="#1F1F1F">appartement à</text>
  <text x="80" y="420" font-family="Georgia, Times, serif" font-size="88" font-weight="600" fill="#1F1F1F">Barcelone.</text>

  <!-- Tagline -->
  <text x="80" y="510" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#3A3A3A">
    Chasseur immobilier français · Forfait 1% · Réponse sous 24h
  </text>

  <!-- Bottom right CTA -->
  <rect x="80" y="555" width="280" height="50" rx="25" fill="#D4602E"/>
  <text x="220" y="588" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">
    BCN-IMMOBILIER.COM
  </text>

  <!-- bottom-right meta -->
  <text x="${ogWidth - 80}" y="588" font-family="Helvetica, Arial, sans-serif" font-size="18" fill="#3A3A3A" text-anchor="end">
    +33 6 30 07 74 25
  </text>
</svg>`;

  // Composite: SVG background + logo
  const logoOG = await sharp(SRC).resize(220, 220, { fit: "contain" }).toBuffer();

  await sharp(Buffer.from(svgOG))
    .composite([{ input: logoOG, top: 90, left: ogWidth - 320 }])
    .png()
    .toFile(path.join(PUBLIC, "og-image.png"));

  // 7. Twitter image (same as OG)
  fs.copyFileSync(path.join(PUBLIC, "og-image.png"), path.join(PUBLIC, "twitter-image.png"));

  // 8. Logo as PNG for SEO (search results prefer PNG/SVG)
  await sharp(SRC)
    .resize(512, 512, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .flatten({ background: CREAM })
    .png()
    .toFile(path.join(PUBLIC, "logo.png"));

  console.log("✓ All assets generated successfully");
  console.log("  - favicon-16x16.png, favicon-32x32.png, favicon.png");
  console.log("  - apple-touch-icon.png (180x180)");
  console.log("  - icon-192.png, icon-512.png");
  console.log("  - icon-maskable-512.png");
  console.log("  - og-image.png, twitter-image.png (1200x630)");
  console.log("  - logo.png (512x512)");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
