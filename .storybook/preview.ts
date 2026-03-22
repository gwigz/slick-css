import "../dist/slick.css";
import { createIcons, icons } from "lucide";

import type { Preview } from "@storybook/html";

const themes: Record<string, Record<string, string>> = {
  zinc: {},
  blue: {
    "--primary": "oklch(0.593 0.204 264.376)",
    "--primary-foreground": "oklch(0.98 0.016 263.684)",
    "--ring": "oklch(0.593 0.204 264.376)",
  },
  green: {
    "--primary": "oklch(0.627 0.164 164.36)",
    "--primary-foreground": "oklch(0.98 0.016 166.105)",
    "--ring": "oklch(0.627 0.164 164.36)",
  },
  rose: {
    "--primary": "oklch(0.645 0.246 16.439)",
    "--primary-foreground": "oklch(0.969 0.015 12.422)",
    "--ring": "oklch(0.645 0.246 16.439)",
  },
  orange: {
    "--primary": "oklch(0.69 0.204 70.746)",
    "--primary-foreground": "oklch(0.985 0.008 70.746)",
    "--ring": "oklch(0.69 0.204 70.746)",
  },
  violet: {
    "--primary": "oklch(0.627 0.265 303.9)",
    "--primary-foreground": "oklch(0.98 0.016 303.684)",
    "--ring": "oklch(0.627 0.265 303.9)",
  },
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        items: [
          { value: "zinc", title: "Zinc", icon: "circle" },
          { value: "blue", title: "Blue", icon: "circle" },
          { value: "green", title: "Green", icon: "circle" },
          { value: "rose", title: "Rose", icon: "circle" },
          { value: "orange", title: "Orange", icon: "circle" },
          { value: "violet", title: "Violet", icon: "circle" },
        ],
        dynamicTitle: true,
      },
    },
    radius: {
      description: "Border radius",
      toolbar: {
        title: "Radius",
        items: [
          { value: "0", title: "None" },
          { value: "0.375rem", title: "Small" },
          { value: "0.625rem", title: "Medium" },
          { value: "0.875rem", title: "Large" },
          { value: "1.25rem", title: "Full" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "zinc",
    radius: "0.625rem",
  },
  decorators: [
    (story, context) => {
      const themeName = (context.globals.theme as string) || "zinc";
      const vars = themes[themeName] || {};

      const wrapper = document.createElement("div");
      wrapper.style.padding = "2rem";
      wrapper.style.backgroundColor = "var(--background)";
      wrapper.style.color = "var(--foreground)";
      wrapper.style.minHeight = "100vh";

      const radius = (context.globals.radius as string) || "0.625rem";
      wrapper.style.setProperty("--radius", radius);

      for (const [key, value] of Object.entries(vars)) {
        wrapper.style.setProperty(key, value);
      }

      const content = document.createElement("div");
      const result = story();
      let sourceHtml = "";
      if (typeof result === "string") {
        sourceHtml = result.trim();
        content.innerHTML = sourceHtml;
      } else if (result instanceof HTMLElement) {
        content.appendChild(result);
        sourceHtml = result.outerHTML;
      }
      wrapper.appendChild(content);

      // Show Source toggle
      const toggle = document.createElement("button");
      toggle.textContent = "Show Source";
      Object.assign(toggle.style, {
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: "9999",
        padding: "0.375rem 0.75rem",
        fontSize: "0.75rem",
        borderRadius: "0.375rem",
        border: "1px solid var(--border)",
        background: "var(--secondary)",
        color: "var(--secondary-foreground)",
        cursor: "pointer",
      });

      const codeBlock = document.createElement("pre");
      Object.assign(codeBlock.style, {
        display: "none",
        marginTop: "1.5rem",
        padding: "1rem",
        borderRadius: "0.5rem",
        background: "var(--secondary)",
        color: "var(--secondary-foreground)",
        fontSize: "0.75rem",
        lineHeight: "1.5",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        border: "1px solid var(--border)",
      });
      // Format with basic indentation
      const formatted = sourceHtml
        .replace(/></g, ">\n<")
        .replace(/\n\s*\n/g, "\n")
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
        .join("\n");
      codeBlock.textContent = formatted;

      toggle.addEventListener("click", () => {
        const visible = codeBlock.style.display !== "none";
        codeBlock.style.display = visible ? "none" : "block";
        toggle.textContent = visible ? "Show Source" : "Hide Source";
      });

      wrapper.appendChild(codeBlock);
      wrapper.appendChild(toggle);

      // Replace <i data-lucide="..."> with SVG icons after DOM insertion
      requestAnimationFrame(() => {
        createIcons({ icons, nameAttr: "data-lucide", attrs: {} });
      });

      return wrapper;
    },
  ],
};

export default preview;
