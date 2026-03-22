#!/usr/bin/env bun
/**
 * Updates the variants size table in README.md between <!-- variants --> markers.
 * Runs as the final build step after all dist files are produced.
 */

import { gzipSync } from "node:zlib";

const variants = [
  { file: "slick.css", desc: "Readable, full Tailwind var compatibility" },
  { file: "slick.min.css", desc: "Minified, full Tailwind var compatibility (default)" },
  { file: "slick-static.css", desc: "Readable, dead `--tw-*` vars removed" },
  { file: "slick-static.min.css", desc: "Minified, smallest size" },
] as const;

function formatKB(bytes: number): string {
  return `~${(bytes / 1024).toFixed(1)} KB`;
}

const rows = await Promise.all(
  variants.map(async ({ file, desc }) => {
    const content = await Bun.file(`dist/${file}`).bytes();
    const raw = content.length;
    const gz = gzipSync(content).length;
    return `| \`${file}\` | ${formatKB(raw)} | ${formatKB(gz)} | ${desc} |`;
  }),
);

const table = ["| File | Size | Gzip | Description |", "|---|---|---|---|", ...rows].join("\n");

const readme = await Bun.file("README.md").text();

const updated = readme.replace(
  /<!-- variants -->\n[\s\S]*?\n<!-- \/variants -->/,
  `<!-- variants -->\n\n${table}\n\n<!-- /variants -->`,
);

if (updated !== readme) {
  await Bun.write("README.md", updated);

  console.log("Updated README.md variant sizes");
} else {
  console.log("README.md variant sizes unchanged");
}
