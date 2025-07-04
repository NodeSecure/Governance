// Import Node.js Dependencies
import { readFileSync } from "node:fs";

// Import Third-party Dependencies
import compile from "zup";

// Import Internal Dependencies
import allContributors from "../contributors.json" with { type: "json" };

const [kind = "core"] = process.argv[2];

// CONSTANTS
const kNumberOfContributorsPerRow = 3;
const kRawHTMLTemplate = readFileSync(
  new URL("../views/contributors.html", import.meta.url),
  "utf8"
);

const tableTdGenerator = compile(kRawHTMLTemplate);

let html = "";
for (const contributors of chunkArray(allContributors[kind], kNumberOfContributorsPerRow)) {
  html += tableTdGenerator({ contributors })
    .split("\n")
    .flatMap((line) => line.trim().length > 0 ? [line] : [])
    .join("\n");
}
console.log(html);

export function* chunkArray(
  arr, chunkSize
) {
  for (let i = 0; i < arr.length; i += chunkSize) {
    yield arr.slice(i, i + chunkSize);
  }
}
