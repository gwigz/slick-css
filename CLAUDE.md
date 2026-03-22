# Slick CSS

A classless CSS library with `shadcn/ui` style component styles translated to semantic HTML selectors.

## Commands

- `bun run build` compile 4 dist variants (`slick.css`, `slick.min.css`, `slick-static.css`, `slick-static.min.css`)
- `bun run dev` watch mode (rebuilds on CSS changes)
- `bun run storybook` launch Storybook dev server at `:6006`
- `bun run build-storybook` build static Storybook

## Architecture

### CSS Pipeline

1. `src/slick.css` is the entry point - imports Tailwind (with `source(none)`), defines `@theme inline` mapping CSS vars to Tailwind tokens, then imports all component files
2. `src/theme.css` defines `:root` CSS custom properties with dark-only oklch values (from shadcn v4)
3. `src/components/*.css` files use `@apply` with Tailwind utilities targeting element/attribute selectors
4. `@tailwindcss/cli` compiles to `dist/slick.css`, which is copied and optimized (`scripts/optimize-css.ts`) for the static variant, then both are minified via lightningcss

### Key Patterns

- **`source(none)`** in the Tailwind import disables HTML scanning - only `@apply` directives in CSS are resolved
- **`@theme inline`** maps CSS custom properties (`--primary`, etc.) to Tailwind color tokens so `@apply bg-primary` works
- **Classless selectors** - components are styled via element names (`button`, `article`, `select`) and attribute selectors (`[secondary]`, `[destructive]`, `[role="tab"]`)
- **CSS-only tooltips** via `[tooltip-top]` / `[tooltip-bottom]` attributes using `::before` pseudo-elements

### Component Reference

Styles are translated from shadcn/ui source at `/tmp/shadcn-ref/src/components/ui/`. When updating components, compare against those files for the canonical Tailwind classes.

### Storybook

- Stories are raw HTML strings in `stories/*.stories.ts`
- Preview imports `dist/slick.css` - run `bun run dev` alongside `bun run storybook` for live reload
- Theme switcher in toolbar (Zinc, Blue, Green, Rose, Orange, Violet) - configured via `globalTypes` in `.storybook/preview.ts`

## Conventions

- All component CSS goes in `@layer components { }`
- Theme/reset CSS goes in `@layer base { }`
- Use `@apply` for Tailwind utilities, raw CSS for things Tailwind can't express (SVG data URIs, pseudo-element content, keyframes)
- `b { font-weight: inherit; }` reset in base - `<b>` is used as a lightweight `<span>` equivalent in consuming projects
