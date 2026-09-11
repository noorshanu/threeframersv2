import fs from "fs";

const html = fs.readFileSync(
  "c:/My Web Sites/metromediahouse/www.metromediahouse.co/index.html",
  "utf8"
);

const ids = [...html.matchAll(/id="(section_[^"]+)"/g)].map((m) => m[1]);
console.log("SECTION IDS:", [...new Set(ids)]);

const pricingIdx = html.indexOf("Three ways");
console.log("\nPRICING:", html.slice(pricingIdx - 200, pricingIdx + 8000));

const processIdx = html.indexOf("section_process");
console.log("\nPROCESS:", html.slice(processIdx, processIdx + 3000));

const viralIdx = html.indexOf("section_home-viral");
console.log("\nVIRAL:", html.slice(viralIdx, viralIdx + 4000));
