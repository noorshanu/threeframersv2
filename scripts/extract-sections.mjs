import fs from "fs";

const html = fs.readFileSync(
  "c:/My Web Sites/metromediahouse/www.metromediahouse.co/index.html",
  "utf8"
);

for (const id of ["section_process", "section_solutions", "section_faq"]) {
  const pattern = `id="${id}"`;
  const idx = html.indexOf(pattern);
  console.log(`\n=== ${id} at ${idx} ===`);
  if (idx > -1) console.log(html.slice(idx, idx + 2500).replace(/></g, ">\n<"));
}

// testimonial images
const imgs = [...html.matchAll(/testimonial_card[\s\S]{0,500}?src="([^"]+)"/g)];
console.log("\nTESTIMONIAL IMGS:", imgs.length);

// screenshot testimonials at end
const screenshotIdx = html.indexOf("section_home-reviews");
const screenshotSection = html.slice(screenshotIdx, screenshotIdx + 15000);
const lightboxImgs = [...screenshotSection.matchAll(/testimonial_card[\s\S]{0,300}?<img src="([^"]+)"/g)];
console.log("\nSCREENSHOT CARDS:", lightboxImgs.slice(0, 5).map(m => m[1]));
