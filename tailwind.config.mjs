/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: 'class',
  theme: { extend: {
  "colors": {
    "background": "rgb(var(--c-background) / <alpha-value>)",
    "error": "rgb(var(--c-error) / <alpha-value>)",
    "error-container": "rgb(var(--c-error-container) / <alpha-value>)",
    "inverse-on-surface": "rgb(var(--c-inverse-on-surface) / <alpha-value>)",
    "inverse-primary": "rgb(var(--c-inverse-primary) / <alpha-value>)",
    "inverse-surface": "rgb(var(--c-inverse-surface) / <alpha-value>)",
    "on-background": "rgb(var(--c-on-background) / <alpha-value>)",
    "on-error": "rgb(var(--c-on-error) / <alpha-value>)",
    "on-error-container": "rgb(var(--c-on-error-container) / <alpha-value>)",
    "on-primary": "rgb(var(--c-on-primary) / <alpha-value>)",
    "on-primary-container": "rgb(var(--c-on-primary-container) / <alpha-value>)",
    "on-primary-fixed": "rgb(var(--c-on-primary-fixed) / <alpha-value>)",
    "on-primary-fixed-variant": "rgb(var(--c-on-primary-fixed-variant) / <alpha-value>)",
    "on-secondary": "rgb(var(--c-on-secondary) / <alpha-value>)",
    "on-secondary-container": "rgb(var(--c-on-secondary-container) / <alpha-value>)",
    "on-secondary-fixed": "rgb(var(--c-on-secondary-fixed) / <alpha-value>)",
    "on-secondary-fixed-variant": "rgb(var(--c-on-secondary-fixed-variant) / <alpha-value>)",
    "on-surface": "rgb(var(--c-on-surface) / <alpha-value>)",
    "on-surface-variant": "rgb(var(--c-on-surface-variant) / <alpha-value>)",
    "on-tertiary": "rgb(var(--c-on-tertiary) / <alpha-value>)",
    "on-tertiary-container": "rgb(var(--c-on-tertiary-container) / <alpha-value>)",
    "on-tertiary-fixed": "rgb(var(--c-on-tertiary-fixed) / <alpha-value>)",
    "on-tertiary-fixed-variant": "rgb(var(--c-on-tertiary-fixed-variant) / <alpha-value>)",
    "outline": "rgb(var(--c-outline) / <alpha-value>)",
    "outline-variant": "rgb(var(--c-outline-variant) / <alpha-value>)",
    "primary": "rgb(var(--c-primary) / <alpha-value>)",
    "primary-container": "rgb(var(--c-primary-container) / <alpha-value>)",
    "primary-fixed": "rgb(var(--c-primary-fixed) / <alpha-value>)",
    "primary-fixed-dim": "rgb(var(--c-primary-fixed-dim) / <alpha-value>)",
    "secondary": "rgb(var(--c-secondary) / <alpha-value>)",
    "secondary-container": "rgb(var(--c-secondary-container) / <alpha-value>)",
    "secondary-fixed": "rgb(var(--c-secondary-fixed) / <alpha-value>)",
    "secondary-fixed-dim": "rgb(var(--c-secondary-fixed-dim) / <alpha-value>)",
    "surface": "rgb(var(--c-surface) / <alpha-value>)",
    "surface-bright": "rgb(var(--c-surface-bright) / <alpha-value>)",
    "surface-container": "rgb(var(--c-surface-container) / <alpha-value>)",
    "surface-container-high": "rgb(var(--c-surface-container-high) / <alpha-value>)",
    "surface-container-highest": "rgb(var(--c-surface-container-highest) / <alpha-value>)",
    "surface-container-low": "rgb(var(--c-surface-container-low) / <alpha-value>)",
    "surface-container-lowest": "rgb(var(--c-surface-container-lowest) / <alpha-value>)",
    "surface-dim": "rgb(var(--c-surface-dim) / <alpha-value>)",
    "surface-tint": "rgb(var(--c-surface-tint) / <alpha-value>)",
    "surface-variant": "rgb(var(--c-surface-variant) / <alpha-value>)",
    "tertiary": "rgb(var(--c-tertiary) / <alpha-value>)",
    "tertiary-container": "rgb(var(--c-tertiary-container) / <alpha-value>)",
    "tertiary-fixed": "rgb(var(--c-tertiary-fixed) / <alpha-value>)",
    "tertiary-fixed-dim": "rgb(var(--c-tertiary-fixed-dim) / <alpha-value>)",
    "canvas-deep": "rgb(var(--c-canvas-deep) / <alpha-value>)",
    "surface-card": "rgb(var(--c-surface-card) / <alpha-value>)",
    "surface-elevated": "rgb(var(--c-surface-elevated) / <alpha-value>)",
    "surface-highlight": "rgb(var(--c-surface-highlight) / <alpha-value>)",
    "gold-luminous": "rgb(var(--c-gold-luminous) / <alpha-value>)",
    "gold-rich": "rgb(var(--c-gold-rich) / <alpha-value>)",
    "border-subtle": "rgb(var(--c-border-subtle) / <alpha-value>)"
  },
  "borderRadius": {
    "DEFAULT": "0.25rem",
    "lg": "0.5rem",
    "xl": "0.75rem",
    "full": "9999px"
  },
  "spacing": {
    "margin-mobile": "1.25rem",
    "space-xl": "2.5rem",
    "margin": "3rem",
    "space-xs": "0.25rem",
    "space-sm": "0.5rem",
    "space-md": "1rem",
    "gutter-mobile": "1rem",
    "gutter": "1.5rem",
    "space-lg": "1.5rem"
  },
  "fontFamily": {
    "label-sm": [
      "Plus Jakarta Sans"
    ],
    "headline-lg-mobile": [
      "Outfit"
    ],
    "label-lg": [
      "Plus Jakarta Sans"
    ],
    "headline-xl": [
      "Outfit"
    ],
    "headline-md": [
      "Outfit"
    ],
    "headline-lg": [
      "Outfit"
    ],
    "body-lg": [
      "Plus Jakarta Sans"
    ],
    "body-md": [
      "Plus Jakarta Sans"
    ],
    "body-sm": [
      "Plus Jakarta Sans"
    ],
    "headline-sm": [
      "Outfit"
    ],
    "display-lg-mobile": [
      "Outfit"
    ],
    "display-lg": [
      "Outfit"
    ],
    "headline-xl-mobile": [
      "Outfit"
    ],
    "label-md": [
      "Plus Jakarta Sans"
    ]
  },
  "fontSize": {
    "label-sm": [
      "11px",
      {
        "lineHeight": "16px",
        "letterSpacing": "0.04em",
        "fontWeight": "700"
      }
    ],
    "headline-lg-mobile": [
      "24px",
      {
        "lineHeight": "32px",
        "fontWeight": "600"
      }
    ],
    "label-lg": [
      "15px",
      {
        "lineHeight": "20px",
        "letterSpacing": "0.01em",
        "fontWeight": "600"
      }
    ],
    "headline-xl": [
      "40px",
      {
        "lineHeight": "48px",
        "letterSpacing": "-0.015em",
        "fontWeight": "600"
      }
    ],
    "headline-md": [
      "24px",
      {
        "lineHeight": "32px",
        "fontWeight": "600"
      }
    ],
    "headline-lg": [
      "32px",
      {
        "lineHeight": "40px",
        "letterSpacing": "-0.01em",
        "fontWeight": "600"
      }
    ],
    "body-lg": [
      "18px",
      {
        "lineHeight": "28px",
        "fontWeight": "400"
      }
    ],
    "body-md": [
      "16px",
      {
        "lineHeight": "24px",
        "fontWeight": "400"
      }
    ],
    "body-sm": [
      "14px",
      {
        "lineHeight": "20px",
        "fontWeight": "400"
      }
    ],
    "headline-sm": [
      "20px",
      {
        "lineHeight": "28px",
        "fontWeight": "600"
      }
    ],
    "display-lg-mobile": [
      "36px",
      {
        "lineHeight": "44px",
        "letterSpacing": "-0.01em",
        "fontWeight": "700"
      }
    ],
    "display-lg": [
      "56px",
      {
        "lineHeight": "64px",
        "letterSpacing": "-0.02em",
        "fontWeight": "700"
      }
    ],
    "headline-xl-mobile": [
      "28px",
      {
        "lineHeight": "36px",
        "letterSpacing": "-0.01em",
        "fontWeight": "600"
      }
    ],
    "label-md": [
      "13px",
      {
        "lineHeight": "18px",
        "letterSpacing": "0.02em",
        "fontWeight": "600"
      }
    ]
  }
} },
  plugins: [],
};
