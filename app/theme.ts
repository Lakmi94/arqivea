import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  globalCss: {
    "html, body": {
      backgroundColor: "var(--color-bg-page)",
      color: "var(--color-text-primary)",
      fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-geist-sans), system-ui, sans-serif" },
        body: { value: "var(--font-geist-sans), system-ui, sans-serif" },
      },

      colors: {
        brand: {
          surface: { value: "var(--color-surface-default)" },
          text: { value: "var(--color-text-primary)" },
          muted: { value: "var(--color-text-secondary)" },
          lightMuted: { value: "var(--color-text-secondary)" },
          border: { value: "var(--color-text-muted)" },
          placeholder: { value: "var(--color-surface-soft-warm)" },
          primary: { value: "var(--color-action-primary)" },
          primaryHover: { value: "var(--color-action-primary-hover)" },
        },
      },
    },
  },
});