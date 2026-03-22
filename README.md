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
| `slick.css`            | ~46.5 KB | ~6.7 KB | Readable, full Tailwind var compatibility           |
| `slick.min.css`        | ~36.8 KB | ~6.1 KB | Minified, full Tailwind var compatibility (default) |
| `slick-static.css`     | ~41.9 KB | ~6.2 KB | Readable, dead `--tw-*` vars removed                |
| `slick-static.min.css` | ~33.0 KB | ~5.7 KB | Minified, smallest size                             |

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

<article flush>
  <header><h3>Settings</h3></header>
  <details>
    <summary>Appearance</summary>
    <p>Customize the look and feel.</p>
  </details>
  <details>
    <summary>Notifications</summary>
    <p>Configure alerts.</p>
  </details>
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

| Component | Selector                                                       | Variants                                                                 |
| --------- | -------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Button    | `button`, `[type="submit"]`                                    | `[secondary]`, `[destructive]`, `[outline]`, `[ghost]`, `[link]`, `[sm]` |
| Badge     | `kbd`                                                          | `[secondary]`, `[destructive]`, `[outline]`                              |
| Card      | `article`                                                      | `[empty]`, `[flush]`                                                     |
| Input     | `input:not([type="checkbox"]):not([type="radio"])`, `textarea` | `[sm]`                                                                   |
| Select    | `select`                                                       | -                                                                        |
| Checkbox  | `input[type="checkbox"]`                                       | -                                                                        |
| Radio     | `input[type="radio"]`                                          | -                                                                        |
| Toggle    | `input[type="checkbox"][role="switch"]`                        | -                                                                        |
| Dialog    | `dialog`                                                       | -                                                                        |
| Progress  | `progress`                                                     | -                                                                        |
| Accordion | `details > summary`                                            | `[left]`                                                                 |
| Tabs      | `[role="tablist"]`, `[role="tab"]`, `[role="tabpanel"]`        | -                                                                        |
| Tooltip   | `[tooltip-top]`, `[tooltip-bottom]`                            | -                                                                        |
| Log       | `samp`                                                         | -                                                                        |
| Separator | `hr`                                                           | -                                                                        |
| Spinner   | `[aria-busy="true"]`                                           | -                                                                        |
| Label     | `label`                                                        | -                                                                        |

### Layout Utilities

| Utility   | Selector     | Sizes / Values                    |
| --------- | ------------ | --------------------------------- |
| Stack     | `[stack]`    | `xs`, `md`, `lg`, `xl`, `2xl`     |
| Row       | `[row]`      | `sm`, `md`, `lg`                  |
| Grid      | `[grid]`     | `sm`, `lg`, `xl`                  |
| Max Width | `[max-w]`    | `xs`, `md`, `lg`, `xl`            |
| Align     | `[align]`    | `left`, `center`, `right`         |
| Color     | `[color]`    | `destructive`, `success`, `muted` |
| Spacer    | `[spacer]`   | -                                 |
| Truncate  | `[truncate]` | -                                 |

## Theming

Slick uses CSS custom properties. Override them to customize:

```css
:root {
  --background: oklch(14.5% 0 0deg);
  --foreground: oklch(98.5% 0 0deg);
  --card: oklch(20.5% 0 0deg);
  --card-foreground: oklch(98.5% 0 0deg);
  --primary: oklch(92.2% 0 0deg);
  --primary-foreground: oklch(20.5% 0 0deg);
  --secondary: oklch(26.9% 0 0deg);
  --secondary-foreground: oklch(98.5% 0 0deg);
  --muted: oklch(26.9% 0 0deg);
  --muted-foreground: oklch(70.8% 0 0deg);
  --destructive: oklch(70.4% 0.191 22.216deg);
  --destructive-foreground: oklch(98.5% 0 0deg);
  --success: oklch(72.3% 0.194 142.5deg);
  --success-foreground: oklch(98.5% 0 0deg);
  --border: oklch(100% 0 0deg / 10%);
  --input: oklch(100% 0 0deg / 15%);
  --ring: oklch(55.6% 0 0deg);
  --radius: 0.625rem;
}
```

## Development

```bash
bun install
bun run dev        # watch CSS changes
bun run storybook  # launch Storybook at :6006
bun run build      # compile all dist/ variants
```
