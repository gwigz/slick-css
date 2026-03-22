#!/usr/bin/env bun
/**
 * Post-build optimizer for slick-css.
 * Removes unused Tailwind v4 --tw-* variable machinery from compiled CSS.
 * Runs between Tailwind compilation and lightningcss minification.
 */

export {};

const file = process.argv[2] || "dist/slick.css";
let css = await Bun.file(file).text();
const before = css.length;

// Layer declarations
css = css.replace("@layer properties;\n", "");
css = css.replace("@layer utilities;\n", "");
css = css.replace("@layer theme, base, components, utilities;", "@layer theme, base, components;");

// Remove @layer properties fallback block
// Browser fallback for @property (targets Safari 15.3-). Uses brace-counting
// because the block contains nested @supports and selector blocks.
css = removeBlock(css, "@layer properties {");

// Remove unused @property declarations
// Of 21 @property declarations, only 6 are needed:
//   --tw-leading, --tw-border-style, --tw-shadow,
//   --tw-ring-color, --tw-ring-shadow, --tw-translate-x
const deadProperties = [
  "--tw-font-weight",
  "--tw-tracking",
  "--tw-shadow-color",
  "--tw-shadow-alpha",
  "--tw-inset-shadow",
  "--tw-inset-shadow-color",
  "--tw-inset-shadow-alpha",
  "--tw-inset-ring-color",
  "--tw-inset-ring-shadow",
  "--tw-ring-inset",
  "--tw-ring-offset-width",
  "--tw-ring-offset-color",
  "--tw-ring-offset-shadow",
  "--tw-translate-y",
  "--tw-translate-z",
];
for (const prop of deadProperties) {
  const escaped = prop.replaceAll("-", "\\-");
  css = css.replace(new RegExp(`@property ${escaped} \\{[^}]+\\}\n?`, "g"), "");
}

// Remove dead-write variable assignments
// These vars are set but never read via var()
css = css.replace(/^[ \t]*--tw-font-weight:.*;\n/gm, "");
css = css.replace(/^[ \t]*--tw-tracking:.*;\n/gm, "");
css = css.replace(/^[ \t]*--tw-outline-style:.*;\n/gm, "");

// Inline static transition value
// --tw-ease and --tw-duration are never set, always use fallback
css = css.replaceAll(
  "var(--tw-ease, var(--default-transition-timing-function))",
  "var(--default-transition-timing-function)",
);
css = css.replaceAll("var(--tw-duration, var(--default-transition-duration))", "var(--default-transition-duration)");

// Simplify ring-shadow formula
// --tw-ring-inset is always empty, --tw-ring-offset-width is always 0px
css = css.replaceAll("var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width))", "0 0 0 3px");

// Simplify box-shadow chain
// 3 of 5 shadow layers are always null (0 0 #0000), remove them
css = css.replaceAll(
  "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
  "var(--tw-ring-shadow), var(--tw-shadow)",
);

// Inline --tw-shadow-color
// Never set, always falls back to the default
css = css.replaceAll("var(--tw-shadow-color, rgb(0 0 0 / 0.1))", "rgb(0 0 0 / 0.1)");

// Simplify translate
// --tw-translate-y is never set, always 0
css = css.replaceAll("translate: var(--tw-translate-x) var(--tw-translate-y);", "translate: var(--tw-translate-x) 0;");

// Deduplicate @keyframes
css = deduplicateKeyframes(css);

// Clean up consecutive blank lines
css = css.replace(/\n{3,}/g, "\n\n");

await Bun.write(file, css);
const after = css.length;
console.log(`Optimized ${file}: ${before} → ${after} bytes (-${before - after})`);

// Helpers

function removeBlock(src: string, marker: string) {
  const idx = src.indexOf(marker);
  if (idx === -1) return src;

  let depth = 1;
  let i = idx + marker.length;

  while (i < src.length && depth > 0) {
    if (src[i] === "{") depth++;
    if (src[i] === "}") depth--;
    i++;
  }

  while (i < src.length && src[i] === "\n") i++;

  return src.slice(0, idx) + src.slice(i);
}

function deduplicateKeyframes(src: string) {
  const re = /@keyframes\s+([\w-]+)\s*\{/g;
  let match;
  const blocks = [];

  while ((match = re.exec(src)) !== null) {
    const name = match[1];
    const start = match.index;
    let depth = 1;
    let i = start + match[0].length;

    while (i < src.length && depth > 0) {
      if (src[i] === "{") depth++;
      if (src[i] === "}") depth--;
      i++;
    }

    blocks.push({ name, start, end: i });
  }

  const seen = new Set();
  const toRemove = [];

  for (const block of blocks) {
    if (seen.has(block.name)) {
      toRemove.push(block);
    } else {
      seen.add(block.name);
    }
  }

  let result = src;

  for (const block of toRemove.reverse()) {
    let end = block.end;
    while (end < result.length && result[end] === "\n") end++;

    result = result.slice(0, block.start) + result.slice(end);
  }

  return result;
}
