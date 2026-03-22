# `@gwigz/slick-css`

A classless CSS component library using `shadcn/ui` component styles translated to semantic HTML element and attribute selectors. No classes needed, just write plain HTML.

## Install

```bash
bun add @gwigz/slick-css
```

## Usage

Import the stylesheet:

```css
@import "@gwigz/slick-css";
```

Or link it directly:

```html
<link rel="stylesheet" href="path/to/slick.min.css" />
```

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gwigz/slick-css/dist/slick.min.css" />
```

Or the static (smaller) variant:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gwigz/slick-css/dist/slick-static.min.css" />
```

## Variants

<!-- variants -->

| File                   | Size     | Gzip    | Description                                         |
| ---------------------- | -------- | ------- | --------------------------------------------------- |
| `slick.css`            | ~43.9 KB | ~6.3 KB | Readable, full Tailwind var compatibility           |
| `slick.min.css`        | ~34.8 KB | ~5.8 KB | Minified, full Tailwind var compatibility (default) |
| `slick-static.css`     | ~39.3 KB | ~5.9 KB | Readable, dead `--tw-*` vars removed                |
| `slick-static.min.css` | ~30.9 KB | ~5.4 KB | Minified, smallest size                             |

<!-- /variants -->

The **default** export (`@import "@gwigz/slick-css"`) resolves to `slick.min.css` which preserves all Tailwind variable machinery for maximum compatibility.

The **static** variants (`@import "@gwigz/slick-css/static"`) strip unused `--tw-*` variable writes for a smaller footprint. Use these if you don't need to compose with Tailwind utilities at runtime.

Then write plain HTML:

```html
<button>Primary</button>
<button secondary>Secondary</button>
<button destructive>Delete</button>
<button outline>Outline</button>
<button ghost>Ghost</button>

<kbd>Badge</kbd>
<kbd destructive>Error</kbd>

<article>
  <header>
    <h3>Card Title</h3>
    <p>Description</p>
  </header>
  <section>Content</section>
  <footer>
    <button>Action</button>
  </footer>
</article>

<input type="text" placeholder="Input" />
<textarea placeholder="Textarea"></textarea>
<select>
  <option>Option</option>
</select>

<input type="checkbox" />
<input type="radio" />
<input type="checkbox" role="switch" />

<progress value="60" max="100"></progress>

<details>
  <summary>Accordion</summary>
  <p>Content</p>
</details>

<dialog>
  <header><h3>Title</h3></header>
  <footer><button>OK</button></footer>
</dialog>

<button tooltip-top="Tooltip text">Hover me</button>
```

## Components

| Component | Selector                                                       | Variants                                                         |
| --------- | -------------------------------------------------------------- | ---------------------------------------------------------------- |
| Button    | `button`, `[type="submit"]`                                    | `[secondary]`, `[destructive]`, `[outline]`, `[ghost]`, `[link]` |
| Badge     | `kbd`                                                          | `[secondary]`, `[destructive]`, `[outline]`                      |
| Card      | `article`                                                      | -                                                                |
| Input     | `input:not([type="checkbox"]):not([type="radio"])`, `textarea` | -                                                                |
| Select    | `select`                                                       | -                                                                |
| Checkbox  | `input[type="checkbox"]`                                       | -                                                                |
| Radio     | `input[type="radio"]`                                          | -                                                                |
| Toggle    | `input[type="checkbox"][role="switch"]`                        | -                                                                |
| Dialog    | `dialog`                                                       | -                                                                |
| Progress  | `progress`                                                     | -                                                                |
| Accordion | `details > summary`                                            | -                                                                |
| Tabs      | `[role="tablist"]`, `[role="tab"]`, `[role="tabpanel"]`        | -                                                                |
| Tooltip   | `[tooltip-top]`, `[tooltip-bottom]`                            | -                                                                |
| Separator | `hr`                                                           | -                                                                |
| Label     | `label`                                                        | -                                                                |

## Theming

Slick uses CSS custom properties. Override them to customize:

```css
:root {
  --primary: oklch(0.593 0.204 264.376);
  --primary-foreground: oklch(0.98 0.016 263.684);
  --ring: oklch(0.593 0.204 264.376);
}
```

## Development

```bash
bun install
bun run dev        # watch CSS changes
bun run storybook  # launch Storybook at :6006
bun run build      # compile all dist/ variants
```
