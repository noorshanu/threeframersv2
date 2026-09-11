import fs from "fs";

const html = fs.readFileSync(
  "c:/My Web Sites/metromediahouse/www.metromediahouse.co/index.html",
  "utf8"
);

const sections = [
  "section_home-logos",
  "section_home-process",
  "section_home-repurposing",
  "section_home-short-form",
  "section_home-trailers",
  "section_layout2",
  "section_home-reviews",
  "section_layout254",
  "section_home-problems",
  "section_home-goal",
  "section_home-testimonials",
  "section_faq6",
];

for (const s of sections) {
  const idx = html.indexOf(s);
  if (idx === -1) {
    console.log(`\n=== ${s}: NOT FOUND ===`);
    continue;
  }
  console.log(`\n=== ${s} ===`);
  console.log(html.slice(idx, idx + 3500).replace(/></g, ">\n<"));
}
