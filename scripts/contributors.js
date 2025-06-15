// Import Node.js Dependencies
import { readFileSync } from "node:fs";

// Import Third-party Dependencies
import compile from "zup";

// Import Internal Dependencies
import allContributors from "../contributors.json" with { type: "json" };

// CONSTANTS
const kNumberOfContributorsPerRow = 3;
const kRawHTMLTemplate = readFileSync(
  new URL("../views/contributors.html", import.meta.url),
  "utf8"
);

const tableTdGenerator = compile(kRawHTMLTemplate);

let html = "";
for (const contributors of chunkArray(allContributors.core, kNumberOfContributorsPerRow)) {
  html += tableTdGenerator({ contributors })
    .replace(/^\s*$(?:\r\n?|\n)/gm, "");
}
console.log(html);

export function* chunkArray(
  arr, chunkSize
) {
  for (let i = 0; i < arr.length; i += chunkSize) {
    yield arr.slice(i, i + chunkSize);
  }
}
