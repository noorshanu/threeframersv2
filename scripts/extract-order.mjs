import fs from "fs";

const html = fs.readFileSync(
  "c:/My Web Sites/metromediahouse/www.metromediahouse.co/index.html",
  "utf8"
);

const matches = [...html.matchAll(/<section\s([^>]+)>/g)];
matches.forEach((m, i) => {
  const attrs = m[1];
  const id = attrs.match(/id="([^"]*)"/)?.[1] || "-";
  const cls = attrs.match(/class="([^"]*)"/)?.[1]?.split(" ")[0] || "-";
  console.log(`${i + 1}. id=${id} class=${cls}`);
});
