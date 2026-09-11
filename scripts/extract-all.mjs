import fs from "fs";

const html = fs.readFileSync(
  "c:/My Web Sites/metromediahouse/www.metromediahouse.co/index.html",
  "utf8"
);

const pricingStart = html.indexOf('id="section_process"');
const pricingEnd = html.indexOf('id="section_solutions"');
const pricing = html.slice(pricingStart, pricingEnd);

const tiers = [...pricing.matchAll(/pricing19_plan[\s\S]{0,4000}?<\/div>\s*<\/div>\s*<\/div>/g)];
console.log("TIERS:", tiers.length);

const planBlocks = pricing.split("pricing-card-border").slice(1);
planBlocks.forEach((block, i) => {
  const title = block.match(/margin-xxsmall">\s*<div>([^<]+)/)?.[1];
  const desc = block.match(/text-color-grey-2">([^<]+)/)?.[1];
  const sticker = block.match(/pricing-sticker[^>]*src="([^"]+)"/)?.[1];
  const features = [...block.matchAll(/pricing19_feature">\s*<div[^>]*>\s*<svg[\s\S]*?<\/svg>\s*<\/div>\s*<div>([^<]+)/g)].map(m => m[1].trim());
  console.log(`\nTIER ${i+1}: ${title}`);
  console.log("sticker:", sticker);
  console.log("desc:", desc?.slice(0, 80));
  console.log("features:", features);
});

// testimonials full list
const testStart = html.indexOf('id="section_testimonials"');
const testEnd = html.indexOf("section_faq6");
const testHtml = html.slice(testStart, testEnd);
const cards = [...testHtml.matchAll(/testimonial_card on-grid[\s\S]{0,1200}?<\/div>\s*<\/div>\s*<\/div>/g)];
console.log("\nTESTIMONIAL CARDS:", cards.length);

// screenshot testimonials
const screenshots = [...html.matchAll(/lightbox-link[\s\S]{0,200}?<img src="([^"]+)"/g)];
console.log("SCREENSHOTS:", screenshots.length, screenshots.slice(0,3).map(m=>m[1]));

// logos
const logos = [...html.matchAll(/logo3_wrapper[\s\S]{0,300}?src="([^"]+)"/g)];
console.log("\nLOGOS:", logos.map(m => m[1].replace(/\.\.\/cdn[^/]+/, "https://cdn.prod.website-files.com")));
