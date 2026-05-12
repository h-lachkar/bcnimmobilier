/* eslint-disable */
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "public", "images");

const images = [
  // Hero + Services
  {
    url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/04824028-9445-4487-917b-b840841de612/WhatsApp+Image+2022-03-13+at+16.54.16.jpeg",
    dest: "apartment-hero.jpeg",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/346f5d5b-3c8c-4f78-81a5-5863e0ce668d/IMG_2184.jpeg",
    dest: "chloe.jpeg",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/33bc9aa7-65b8-4536-91da-75d1b8ffd17f/UNADJUSTEDNONRAW_thumb_990c.jpg",
    dest: "service-forfait.jpg",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/6d0f79ff-6dcc-4da3-9190-74142d6632df/7Z7A7905.jpg",
    dest: "service-demarches.jpg",
  },
  // Process icons
  {
    url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/64c8c243-d1bb-45c4-8708-2f78f167e7e7/search.png",
    dest: "process/search.png",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/ec6791a3-8bfe-45ea-9eca-5d709fd4a123/location-mark.png",
    dest: "process/location-mark.png",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/556766bb-7c31-4206-931d-77a5669dc22d/advertising.png",
    dest: "process/advertising.png",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/ccac18f0-68bc-4541-b448-318d886a7262/agreement.png",
    dest: "process/agreement.png",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/4bf1ef1b-2240-482f-917e-9fcf703444eb/celebration.png",
    dest: "process/celebration.png",
  },
  // Clients (in order)
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/dd01394d-2189-47a5-bd5b-1a74e704b4df/WhatsApp+Image+2025-01-14+at+08.16.08.jpeg", dest: "clients/01-brigitte-michel-dune.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/d421cb8f-be18-4fa4-95f7-dd94bacd8a4b/WhatsApp+Image+2025-01-09+at+19.06.25.jpeg", dest: "clients/02-olivier.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/e99e4c66-8a47-4079-bc5c-6c311b92fef9/WhatsApp+Image+2025-01-09+at+19.11.08.jpeg", dest: "clients/03-sophie-charles.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/6c1d2b59-9d38-4353-8a02-905ed7382dce/WhatsApp+Image+2025-01-09+at+19.08.41.jpeg", dest: "clients/04-catalina.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/36c1ce12-7ca5-4578-94bb-11e6f062f55a/WhatsApp+Image+2025-01-09+at+19.02.22.jpeg", dest: "clients/05-phillipe-lola.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/ec452c17-8c62-4a79-a6c6-cd763a1d4375/WhatsApp+Image+2025-01-09+at+23.36.15.jpeg", dest: "clients/06-severine.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/afb56250-b945-4ea1-8fee-bde541c9dea4/WhatsApp+Image+2025-01-09+at+19.03.45.jpeg", dest: "clients/07-eric-alice.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/33a78333-eaaf-4bb9-8cc9-76383422df37/WhatsApp+Image+2025-01-14+at+08.06.43.jpeg", dest: "clients/08-lionel.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/6e2b3bde-120e-487a-a1df-253e5e259add/WhatsApp+Image+2025-01-14+at+08.03.54.jpeg", dest: "clients/09-xavier-romain.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/bc39ca47-49a9-434c-9dff-9bc2920e9bd3/WhatsApp+Image+2025-01-14+at+08.27.48.jpeg", dest: "clients/10-rainer.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/c46ab8a3-73d6-4b51-be93-b732ee2d3a23/WhatsApp+Image+2025-01-14+at+08.35.22.jpg", dest: "clients/11-sandra-nicolas.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/429d2f0e-07d9-4da7-86c0-5e0b984d1817/WhatsApp+Image+2025-01-14+at+08.42.50.jpg", dest: "clients/12-veronique-pierre.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/65b6161e-3cce-468e-a8b8-4002255742e6/WhatsApp+Image+2025-01-14+at+09.49.00.jpg", dest: "clients/13-stephen.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/5ce26cb1-6482-4346-83dd-f0faa90bc011/WhatsApp+Image+2025-01-14+at+11.33.17.jpeg", dest: "clients/14-catherine-eric.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/f2285088-0999-46c9-9fc7-540f6723ad1a/WhatsApp+Image+2025-01-14+at+08.54.16.jpeg", dest: "clients/15-steve-marion.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/8d3a9bf0-5e27-4b87-81d6-fcf5678c4212/WhatsApp+Image+2025-01-14+at+08.54.47.jpeg", dest: "clients/16-christelle-mathis-noah.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/36a1a8e7-f386-4bca-98e8-190e43474790/WhatsApp+Image+2025-01-14+at+09.43.02.jpeg", dest: "clients/17-laurence-serge.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/b2e22d8e-2d95-4aa8-b572-531a8f227553/WhatsApp+Image+2025-01-14+at+11.39.03.jpg", dest: "clients/18-jacques-marie-helene.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/cb50ef2a-bcd7-450f-939c-1dfc90cecbbc/WhatsApp+Image+2025-01-14+at+12.13.16.jpeg", dest: "clients/19-richard-alexandra-tiago-rudy.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/a2bdd160-169c-4deb-af24-553416015fc1/WhatsApp+Image+2025-01-14+at+13.14.27.jpeg", dest: "clients/20-damien.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/fcefeb0f-501a-4257-a94d-d78e487556cc/WhatsApp+Image+2025-01-14+at+15.49.38.jpeg", dest: "clients/21-serge-stephane.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/8f27eb52-71c5-483a-ada6-390fb37d16ee/WhatsApp+Image+2025-01-14+at+20.00.18.jpeg", dest: "clients/22-yannick.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/618dd8b4-91fe-4179-88b7-92276ff125b4/WhatsApp+Image+2025-01-14+at+20.57.11.jpeg", dest: "clients/23-hassan.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/7ee39762-84c7-4b4a-aa76-efc1b9307e61/WhatsApp+Image+2025-01-14+at+23.32.14.jpeg", dest: "clients/24-evelyne-rafael.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/89266fa0-7542-4104-814d-480a16737cf4/WhatsApp+Image+2025-01-15+at+15.06.53.jpeg", dest: "clients/25-dominique.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/5f76f012-71ab-4356-a042-e2b5f983e829/WhatsApp+Image+2025-01-16+at+14.47.12.jpeg", dest: "clients/26-olivier-christele.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/dd1c7066-770f-4630-94cb-d33104a1c7a7/WhatsApp+Image+2025-01-17+at+09.58.49.jpeg", dest: "clients/27-karim-olivier-severine.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/a893a76e-b49b-479e-81e6-57f70996450f/WhatsApp+Image+2025-01-17+at+10.35.08.jpeg", dest: "clients/28-herve.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/99c78434-c5f0-4146-baf3-bbbd8450fe5a/WhatsApp+Image+2025-01-17+at+18.27.31.jpeg", dest: "clients/29-sylvain.jpeg" },
  { url: "https://images.squarespace-cdn.com/content/v1/672f5ef286a4883722caa345/6cdcdaa3-94ec-43f7-8e83-0e19cbfdda8a/WhatsApp+Image+2025-01-20+at+22.24.29.jpeg", dest: "clients/30-valerie-joel.jpeg" },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const fullDest = path.join(OUT, dest);
    if (fs.existsSync(fullDest)) {
      process.stdout.write(`  skip  ${dest}\n`);
      return resolve();
    }
    const file = fs.createWriteStream(fullDest);
    const get = url.startsWith("https") ? https : http;
    get.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(fullDest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(fullDest);
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        process.stdout.write(`  ✓     ${dest}\n`);
        resolve();
      });
    }).on("error", (err) => {
      fs.unlinkSync(fullDest);
      reject(err);
    });
  });
}

(async () => {
  console.log(`Downloading ${images.length} images…\n`);
  for (const img of images) {
    try {
      await download(img.url, img.dest);
    } catch (e) {
      console.error(`  ✗     ${img.dest}: ${e.message}`);
    }
  }
  console.log("\nDone.");
})();
